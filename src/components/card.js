import React from 'react';

const card = (props) => (
  <li className='animated zoomIn'>
    <a href={props.url} target='_blank'>
      <h3>{props.fullName}</h3>
      <p>
        {props.description}
      </p>
      <footer>
        <p>
          <strong>&#9885; Language: </strong> {props.language}
        </p>
        <p>
          <strong>&#9733; Stars: </strong> {props.stars}
        </p>
      </footer>
    </a>
  </li>
);

export default card;
