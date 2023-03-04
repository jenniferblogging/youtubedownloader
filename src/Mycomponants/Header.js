import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Header(props) {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light my-3">
      <Link className="navbar-brand px-3" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/download-guide">How to Download ?</Link>
          </li>
          {/*<li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Dropdown
  </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/">Action</Link>
          <Link className="dropdown-item" to="/about">Another action</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="#">Something else here</Link>
        </div>
        
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="#">Disabled</Link>
          </li>*/}
        </ul>
        {props.searchBar ? <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> : ''
        }
      </div>
    </nav>
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
