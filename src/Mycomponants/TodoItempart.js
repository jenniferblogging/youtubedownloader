import React from 'react';

export default function TodoItempart({newDescription,newJson}) { 
    return(
        <>
            <h6 className="headings">{newDescription.title}</h6><p> Quality: {newJson.quality} (video:pixels/audio:kbps)</p><p>Duration: {newDescription.duration}</p>
            <p>Type: {newJson.type}</p>
            {/*
      <video width="480" controls className='container my-3'>
        <source src={JSON.parse(props.todo.Description).url} type="video/mp4" />
        <p>
          Your browser doesn't support HTML video. Here is a
          <a href={JSON.parse(props.todo.Description).url}>link to the video</a> instead.
        </p>
      </video>
      */}
            <video
              width="240"
              controls
              poster={newDescription.thumb}>
              <source
                src={newJson.url}
                type="video/mp4" />

              Sorry, your browser doesn't support embedded videos, but don't worry, you can
              <a href={newDescription.url}>
                download the MP4
              </a>
              and watch it with your favorite video player!
            </video>
            <hr />
            </>
                )
                
            }
