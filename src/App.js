import React from "react"
import Navbar from "./components/Navbar.js"

import './components/css/App.css';


const AppHandler = (function() {

  const links = [
    {name: 'Portfolio', url: 'https://www.josiaheakle.com'},
    {name: 'Google', url: 'https://www.google.com'},
  ]

  return {
    links: links,
  }

})();

export default class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        <Navbar title='My App' links={AppHandler.links}/>
      </div>
    );
  }
}