import React from 'react'

export default function Downloadguide() {

  return (
<div className="container p-4">
<h3>How to Download ?
</h3>
  <p>For Downloading the Audio or video file from youtube. You need to 
    paste the url in Search bar then hit the submit button.
    After submitting the same, please wait for a while, to load all the
    available streams. As all the streams will be loaded successfully, you need
    to click over three verticle dots <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg> on the loaded files. Kindly click over the same then 
    you will get the menu with download option. Please hit the download option. your 
    file will be downloaded to your PC.
  </p>
  <div className='container'><b>Kindly watch the demonstrated video below....</b>or <a href='https://youtu.be/dppPnqRZDUg' target="_blank" rel="noreferrer">click here</a> to watch on <b>Youtube</b></div>
  <hr/>  
  {/*     
     <section className="">
      <div className="row d-flex justify-content-center">

        <div className="col-lg-6">
          <div className="ratio ratio-16x9">
            <iframe
              className="shadow-1-strong rounded"
              src="https://www.youtube.com/embed/vlDzYIIOYmM"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  */}
  <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube-nocookie.com/embed/dppPnqRZDUg" title="Demostrated video"></iframe>
</div>
   <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  </div>
  )
}