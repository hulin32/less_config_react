import ReactDOM from 'react-dom';
import React from 'react';
import './style.css';
import Icon from './icon.png';

function component() {
  return (
    <div>
      <img alt='icon' src={Icon} />
      <div className='hello' />
      hello world
    </div>
  );
}

ReactDOM.render(
  component(),
  document.getElementById('root')
);
