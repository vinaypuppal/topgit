import React from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import languages from '../languages.js';
import Loader from './loader';
import Card from './card';

// https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc
const BASE_URL = 'https://api.github.com/search/repositories';
const queryParams = '?q=stars:>=500+language:';
const extraParams = '&sort=stars&order=desc';

function getRepos(term) {
  const url = `${BASE_URL}${queryParams}${encodeURIComponent(term.toLowerCase())}${extraParams}`;
  return axios.get(url);
}

// calculate suggestions for any given input value.
function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.toLowerCase().slice(0, inputLength) === inputValue
  );
}

// When suggestion is clicked, Autosuggest needs to populate the input field
// based on the clicked suggestion.
function getSuggestionValue(suggestion) {
  return suggestion;
}

// render suggestions.
function renderSuggestion(suggestion) {
  return (
    <span>{suggestion}</span>
  );
}

class App extends React.Component {
  constructor() {
    super();
    // intial state
    this.state = {
      value: '',
      suggestions: [],
      repos: [],
      totalCount: '',
      headers: null,
      error: '',
      loading: false,
    };
  }

  onChange(event, { newValue }) {
    if (!newValue) {
      this.setState({
        repos: [],
        totalCount: '',
        headers: null,
        error: '',
      });
    }
    this.setState({
      value: newValue,
    });
  }

  // Autosuggest will call this function every time you need to update suggestions.
  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value),
    });
  }

  // Autosuggest will call this function every time users clears input.
  onSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
      error: '',
    });
  }

  // On user selects a suggestion fetch repos
  onSuggestionSelected(event, { suggestionValue }) {
    this.setState({
      loading: true,
    });
    getRepos(suggestionValue)
      .then(({ data, headers }) => {
        const totalCount = data.total_count;
        const results = data.items.map(({ full_name, html_url, description, language, stargazers_count }) => {
          return {
            description,
            language,
            fullName: full_name,
            htmlUrl: html_url,
            stars: stargazers_count,
          };
        });
        const reqHeaders = {
          link: headers.link,
          xRateLimit: headers['x-ratelimit-limit'],
          xRateLimitRemaining: headers['x-ratelimit-remaining'],
          xRateLimitRest: headers['x-ratelimit-reset'],
        };
        this.setState({
          totalCount,
          repos: results,
          headers: reqHeaders,
          error: '',
          loading: false,
        });
      })
      .catch(() => {
        this.setState({
          error: `No Results Found For ${this.state.value}`,
          loading: false,
        });
      });
  }

  renderRepos() {
    if (this.state.repos.length) {
      const cards = this.state.repos.map((repo, index) => {
        return (
          <Card
            key={index}
            fullName={repo.fullName}
            description={repo.description}
            language={repo.language}
            stars={repo.stars}
            url={repo.htmlUrl}
          />
        );
      });
      return (
        <div>
          <div className='info success'>
            We've Found
            <strong> {this.state.totalCount} </strong>
            Repository Results in <strong>{this.state.value}</strong>
          </div>
          <ul className='cards'>
            {cards}
          </ul>
        </div>
      );
    } else if (this.state.error) {
      return (
        <div className='info error'>{this.state.error}</div>
      );
    } else if (this.state.totalCount === 0) {
      return (
        <div className='info'>
          No Repositories Found With <strong> Stars >=500 </strong> in
          <strong> {this.state.value}</strong>
        </div>
      );
    } else {
      return (
        <div className='info important'>
          This App help the users to search different programming
          languages and browse top github projects conveniently.
        </div>
      );
    }
  }

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input field.
    const inputProps = {
      placeholder: 'Search By Language',
      value,
      onChange: this.onChange.bind(this),
    };

    return (
      <div className='container'>
        <div className='content'>
          <header>
            <p>
              <i className='flaticon-top-games-star'></i>
              <i className='flaticon-git-sketched-social-logo-outline'></i>
            </p>
            <p className='text-center'>
              Find the best &#9733; github projects!
            </p>
          </header>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
            onSuggestionSelected={this.onSuggestionSelected.bind(this)}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps} />
          {
            this.state.loading
            ?
              <Loader />
            :
            this.renderRepos()
          }
        </div>
        <footer>
          <p className='text-center'>
            You can find all my other awesome projects at my site <a href='https://www.vinaypuppal.com' target='_blank'>https://www.vinaypuppal.com</a>
          </p>
          <p className='text-center'>
            Made With &hearts; By <a href='https://www.vinaypuppal.com' target='_blank'>VinayPuppal</a>
          </p>
          <p className='text-center'>
            &#9755; <a href='https://www.github.com/vinaypuppal/topgit' target='_blank'>Source Code</a> &#9754;
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
