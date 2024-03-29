import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Header(props) {
  return (
    <>
    {/**/}
    {/*
    <nav className="navbar navbar-expand-lg navbar-light bg-light my-3 px-5">
      <Link className="navbar-brand px-3" to="/youtubedownloader">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/youtubedownloader">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/youtubedownloader/about">About us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/youtubedownloader/download-guide">How to Download ?</Link>
          </li>
          */}
          {/**/}
          {/*<li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Dropdown
  </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/youtubedownloader">Action</Link>
          <Link className="dropdown-item" to="/youtubedownloader/about">Another action</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="#">Something else here</Link>
        </div>
        
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="#">Disabled</Link>
          </li>*/}
          {/**/}
        {/*  
        </ul>
        {props.searchBar ? <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> : ''
        }
      </div>
    </nav>
      */}
    {/**/}
    {/*
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
*/}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/youtubedownloader"><p>{props.title}</p></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/youtubedownloader">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/youtubedownloader/about">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/youtubedownloader/download-guide">How to Download ?</Link>
        </li>
        {/*<li className="nav-item">
          <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
          </li>*/}
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
};
Header.defaultProps = {
  title: 'Your Title Here'
}
export default Header
