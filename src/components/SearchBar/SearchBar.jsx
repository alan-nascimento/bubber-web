import React from 'react';

const SearchBar = ( props ) => {
  return (
    <input
      type={ props.type } 
      className={ props.class }
      name={ props.name }
      placeholder={ props.placeholder }
      onClick={ props.action }
      onChange={ props.atualization }
    />
  );
}

export default SearchBar;
