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
          <strong>Language: </strong> {props.language}
        </p>
        <p>
          <strong>Stars: </strong> {props.stars}
        </p>
      </footer>
    </a>
  </li>
);

export default card;
