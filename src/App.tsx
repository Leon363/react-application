
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
// import { time } from 'console';

function App() {
  return ( <div className='timer-board'>
  <Timer interval={1000} city = 'Rehovot' gmt = {+3}/>
  <Timer interval={1000} city = 'London' gmt = {+1}/>
  <Timer interval={1000} city = 'Izhevsk' gmt={+4}/>
  <Timer interval={1000} city = 'Washington' gmt={-4}/>
  <Timer interval={1000} city = 'Tokio' gmt={+9}/>
  <Timer interval={1000} city = 'Paris' gmt={+2}/>
  <Timer interval={1000} city = 'Sidney' gmt={+10}/>

  </div>
  )
}


export default App;


