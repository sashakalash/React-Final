import React, {Component} from 'react';

const SearchForm = ({isOpen, onChange}) => {
  return (
    <form className={`header-main__search ${isOpen ? "header-main__search_active" : ""}`} action="#">
      <input onChange={onChange} placeholder="Поиск"/>
      <i className="fa fa-search" aria-hidden="true"></i>
    </form>
  )
};

export default SearchForm;

