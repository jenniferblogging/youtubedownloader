import React, { useState, useEffect } from 'react';
import Header from './Mycomponants/Header';
import TodoList from './Mycomponants/TodoList';
import AddTodo from './Mycomponants/AddTodo';
import Footer from './Mycomponants/Footer';
import About from './Mycomponants/About';
import Downloadguide from './Mycomponants/Downloadguide';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  let storageTodos;
  let newData;
  let todo;
  let statusCode;
  if (localStorage.getItem('todos') == null) {
    storageTodos = []
  }
  else {
    storageTodos = JSON.parse(localStorage.getItem('todos'));

    console.log('get item todos', storageTodos)
  }

  const [todos, setTodos] = useState(storageTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  const submit = (e, todo) => {
    e.preventDefault();
    if (!todo.Heading) {
      alert('Kindly enter a valid URl')
      setTodos([])
    }
    else {
      todo.Description='Loading Please wait..'
      setTodos([todo])
      const handleFetchData = async () => {
        try {
        const response = await fetch('https://ssyoutube.com/api/convert', {
          method: 'POST',
          headers: new Headers({
            "User-Agent": `${window.navigator.userAgent},*/*`,
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "en-US,en;q=0.5",
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin"
          }),
          body: `{\"url\":\"${todo.Heading}\"}`
        });
        statusCode=response.status;
        const data = await response.json();
        //console.log('data:', data);
        //console.log('data:', typeof (data));
        //console.log('data:', data["meta"]);
        let metaData = data["meta"]
        //console.log('metaData==>',metaData)
        {/*newData = {
          'title': metaData['title'],
          'source': metaData['source'],
          'duration': metaData['duration'],
          'thumb':data['thumb'],
          'url':data['url'][0]['url'],
          'quality':data['url'][0]['quality'],
          'type': data['url'][0]['type']
        }*/}
        newData = {
          'title': metaData['title'],
          'source': metaData['source'],
          'duration': metaData['duration'],
          'thumb': data['thumb'],
          'list': data.url.filter((element)=>{
            return {
              'url':element['url'],
              'quality':element['quality'],
              'type': element['type']
            }
          })
        }
        console.log('newData',newData)
        todo.Description = JSON.stringify(newData);
        console.log('newData==>', newData['url'])
        //console.log('todo.Description:', todo.Description)
        //todo.Description = JSON.stringify(newData);
        //console.log('todo.Description:', todo.Description);
        setTodos([todo])
      }
      catch (error) {
        // TypeError: Failed to fetch
        console.log('There was an error', error);
        console.log('typeof(statusCode)==>',typeof(statusCode))
        if (statusCode>400 & statusCode<500){
        todo.Description = `Error ${statusCode}, Seems Like Your hvae entered wrong URL, please retry after some time with corrected Url`;
        console.log('todo===>',todo)
        }
        else if (statusCode>=500){
          todo.Description = `Server Side Error ${statusCode}, Please retry after some time`;
          console.log('todo===>',todo)
          }
        else {
          if (String(statusCode)==='undefined'){
            todo.Description = 'ERR_INTERNET_DISCONNECTED, Please check internet connectivity';
          }
          else{
            todo.Description = `Error ${statusCode}, Please retry after sometime`;
          }
        }
        setTodos([todo])
      }
      }
      handleFetchData()
    }

  }

  return (
    <>
      <Router>
        <Header title={'Youtube Downloader'} searchBar={false} />
        <Switch>
          <Route exact path="/youtubedownloader" render={() => {
            return (
              <>
                <AddTodo todo={todo} todos={todos} submit={submit} />
                <TodoList todo={todo} todos={todos}/>
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/download-guide">
            <Downloadguide />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App

