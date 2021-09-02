import React, { Component } from 'react';
import './searchBar.css';

export default class Searchbar extends Component {
  render() {
    return (
      <nav className='searchBar'>
        <div className="searchBar-logo">
            <i className='fab fa-youtube searchBar-youtubeIcon'></i>
            <h1 className='searchBar-title'>Youtube</h1>
        </div>
        <form action='' className='searchBar-form'>
          <input className='searchBar-input' type='text' placeholder='search' />
          <button className='searchBar-searchIcon'><i className='fas fa-search'></i></button>
        </form>
      </nav>
    );
  }
}
