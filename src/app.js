import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './styles/main.sass';
import Layout from './components/layout';

WebFont.load({
  google: {
    families: ['Dosis:400,600'],
  },
});

ReactDOM.render(<Layout />, document.getElementById('root'));
