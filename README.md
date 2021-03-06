[![builtbadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://topgit.vinaypuppal.com)
[![demobadge](https://img.shields.io/badge/Demo-clickhere-green.svg)](https://topgit.vinaypuppal.com)

## To view this project locally

Click [here](https://github.com/vinaypuppal/topgit/archive/master.zip) then download the .zip file. Extract the contents of the zip file, open `dist\` folder and then open `index.html` to view app in browser.

## Installation

This project used following FrontEnd Libraries and tools
- [React](http://facebook.github.io/react) For View Layer
- [Sass](http://sass-lang.com) CSS preprocess
- [autoprefixer](https://github.com/postcss/autoprefixer) A PostCSS for CSS vendor Prefixing
- [hj-webpack](https://github.com/HenrikJoreteg/hjs-webpack) Helpers/presets for setting up webpack with hotloading react and ES6(2015) using Babel.

## To run this project Locally

First Clone this repoistory https://github.com/vinaypuppal/topgit.git

Check if you have NodeJs installed locally by running below command

```
node -v
```

You should now see the version of your current Node installation.

If NodeJs is not installed then install the latest version of [NodeJS](https://nodejs.org). Once you have installed it, you can verify it is correctly installed by running above command again.

Now `cd` into cloned repoistory

And install the necessary dependencies for the project with

```
npm i
```

This command will install all the dependencies listed in package.json.

To run local server, run

```
npm start
```
The default server is `http://localhost:3000`.

You are now ready to go!

Open `http://localhost:3000` in your browser to view running App.

And To build the project use

```
npm run build
```
Then the built project can be found in `dist/` folder.

**Note:** After building the project locally edit `index.html` to add title, meta tags and fix relative paths of both `CSS` and `JS` files linked to view locally. **No need to fix relative paths if deploying to server.**

---
# SAP Labs Frontend Hiring Challenge

04 Sept, 2016

https://www.hackerearth.com/sap-labs-frontend-hiring-challenge/

## TopGit — finding the best github projects!

### Problem Statement

Develop a pseudo front end application which would let the users help list and browse top github projects conveniently.

#### Minimum Requirement

Use of Web API to fetch problems detail. Utilise API parameter: q=stars:>=500 language:php

- [x] stars — number of stars given to respective repository
- [x] language — programming language used in repository

Utilise Response Parameters:
- [x] repos[] —[ total_count, items[] — full_name, html_url, description, language ].
- [x] Visually interactive responsive design listing all the repositories.

#### Plus Point

- [x] A feature to Search (via language).

- [ ] Implement Seek feature (to filter result through range of Stars given to repositories).

- [x] Display and integrate repository details including name, html_url, description, and language.

- [x] Link html_url to Github’s repo URL. (Should open in new window | target="_blank")

- [x] Feel free to use your favourite UI/UX frameworks and tools in design and development.

#### Extra Work

- [ ] Display and keep track of response Header X-RateLimit-Remaining / X-RateLimit-Limit.

- [x] Add autocomplete feature to Search programming languages conveniently .

- [x] Custom elegant design, fonts and icons to make web app more user-friendly.

- [x] You may add portfolio activity comprising awesome work you have done on web application(s).

- [x] Use your imagination and add features which would make things easier for end users.

---

<p align="center">
Tweet <kbd><a href="https://twitter.com/vinaypuppal"><b><img src="https://i.imgur.com/wOPZd0Y.png?1"> @vinaypuppal</b></a></kbd><br>
Connect On <kbd><b><a href="https://in.linkedin.com/in/vinay-puppal-4514b7104">linkedIn</a></b></kbd><br>
Chat with <kbd><a href="https://gitter.im/vinaypuppal">
<img src="https://i.imgur.com/ThSWa6Y.png?2"> <b>@vinaypuppal</b></a></kbd>
</p>
