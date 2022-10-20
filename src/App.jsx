import { useState, useEffect } from 'react';
import Component from './components/Component/Component';
import './App.css'

function App() {

  //initializing the data
  //I initialize the data variable as null so that while fetch is not complete,
  //there would be no renders
  const [data, setData] = useState(null);

  //First we fetch data from the given link
  //I'll do that using useEffect hook
  useEffect(() => {
    fetch('https://w4m9n4r9.stackpathcdn.com/frontend-test-data.json')
    .then(res => res.json())
    .then(newRes => setData(newRes))
  }, [])

  
  return (
    <div className="App">
      { data && <Component colConfig={data.data.config1} data={ data } /> }
      {/* { data && <Component colConfig={data.data.config2} data={ data } /> } */}
    </div>
  )
}

export default App
