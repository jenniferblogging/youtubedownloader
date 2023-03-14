import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  {/*let footerStyle={
    position:"relative",
    top:"100vh",
    width:"100%"
  }*/}
  let footerStyle = {
    position: "relative",
    top: "10vh",
    width: "100%"
  }
  return (
    <>
      {/*<footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className="text-center">
      Copyright &copy; MyTodosList.com
      </p>
  </footer>*/}
      {/*<footer className="page-footer font-small blue pt-4" style={footerStyle}>*/}
      {/*<footer className='bg-dark text-light py-3' style={footerStyle}>

  <div className="container-fluid text-center text-md-left">
    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3">
        <h5 className="text-uppercase">Footer Content</h5>
        <p>Here you can use rows and columns to organize your footer content.</p>
      </div>
      <hr className="clearfix w-100 d-md-none pb-3"/>
      <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase">Links</h5>

        <ul className="list-unstyled">
          <li>
            <Link to="#!">Link 1</Link>
          </li>
          <li>
            <Link to="#!">Link 2</Link>
          </li>
          <li>
            <Link to="#!">Link 3</Link>
          </li>
          <li>
            <Link to="#!">Link 4</Link>
          </li>
        </ul>

      </div>
      <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase">Links</h5>

        <ul className="list-unstyled">
          <li>
            <Link to="#!">Link 1</Link>
          </li>
          <li>
            <Link to="#!">Link 2</Link>
          </li>
          <li>
            <Link to="#!">Link 3</Link>
          </li>
          <li>
            <Link to="#!">Link 4</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <Link to="/"> MDBootstrap.com</Link>
  </div>
</footer>*/}

      {/*<footer className='bg-dark text-light py-3' style={footerStyle}>

<div className="container-fluid text-center text-md-left">
  <div className="row">
    <div className="col-md-6 mt-md-0 mt-3">
      <h5 className="text-uppercase">Youtube Downloader</h5>
      <p>Here you can download Youtube videos and audios.</p>
    </div>
    <hr className="clearfix w-100 d-md-none pb-3"/>
    <div className="col-md-3 mb-md-0 mb-3">
      <h5 className="text-uppercase">Links</h5>

      <ul className="list-unstyled">
        <li>
          <Link to="/">Youtube Downloader</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>

    </div>
    <div className="col-md-3 mb-md-0 mb-3">
      <h5 className="text-uppercase">Links</h5>

      <ul className="list-unstyled">
        <li>
          <Link to="/">Current</Link>
        </li>
      </ul>
    </div>
  </div>
</div>
<div className="footer-copyright text-center py-3">© 2023 Copyright:
  <Link to="/"> Youtube Downloader</Link>
</div>
</footer>
*/}
      <footer className='bg-dark text-light py-3' style={footerStyle}>

        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">How to Download <b>?</b></h5>
              <p>Please click <Link to="/youtubedownloader/download-guide">here</Link> to know how to download.</p>
              <section className="">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6">
                    <div className="ratio ratio-16x9">
                      <iframe
                        className="shadow-1-strong rounded"
                        src="https://www.youtube-nocookie.com/embed/dppPnqRZDUg"
                        title="YouTube video"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to="/youtubedownloader">Youtube Downloader</Link>
                </li>
                <li>
                  <Link to="/youtubedownloader">Home</Link>
                </li>
                <li>
                  <Link to="/youtubedownloader/about">About Us</Link>
                </li>
              </ul>

            </div>
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to="/youtubedownloader">Current</Link>
                </li>
                <li>
                  <Link to="/youtubedownloader/download-guide">How to Download ?</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2023 Copyright:
          <Link to="/youtubedownloader"> Youtube Downloader</Link>
        </div>
      </footer>
    </>
  )
}
