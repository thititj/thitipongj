import React from 'react';

const LinkItem = ({ text, link }) => {
  return (
    <ul>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </ul>
  );
}

export default LinkItem;
