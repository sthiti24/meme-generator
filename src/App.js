import React from 'react'
import Form from './components/Form'
import memesData from './components/memesData'
import Navbar from './components/Navbar'

function App() {

  const memesArr = memesData.data.memes
  let r = Math.floor(Math.random()*memesArr.length)
  let source = memesArr[r].url
  

  return (
    <div className="App" >
       <Navbar />
       <Form img = {source}/>

    </div>
  );
}

export default App;
