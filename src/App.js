import React from "react"
import Navbar from "./components/Navbar.js"

import './components/css/App.css';


const Help = (function() {

  function removeAllChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

  return {
    removeAllChildElements: removeAllChildElements,
  }

})();

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
  
  constructor(props) { 
    super(props)

    this.state = {
      searchValue : '',
      list: [
        'pear', 'apple', 'banana', 'cow', 'apple pie', 'banana bread', 'milk',
        'fried pickles', 'pickles', 'organges', 'french fries', 'french pastry',
        'lamb chowder', 'lamb chops', 'pork chops', 'argot wine'
      ],
      listDom : (<span>Ehlo</span>),
      searchListDom: (<span/>),
      searchOn: false,
    }

    this.createList = this.createList.bind(this)
    this.saveSearch = this.saveSearch.bind(this)
    this.makeListState = this.makeListState.bind(this)
    this.renderSearch = this.renderSearch.bind(this)


  }
  

  saveSearch(searchValue) {
  
    this.setState({
      searchValue: searchValue,
    })

    this.renderSearch();

  }

  renderSearch() {

    // Help.removeAllChildElements(document.querySelector('.list'))


    const {list, searchValue} = this.state;
    console.log(`searchValue: ${searchValue}`)

    let searchResults = [];

    for(let i=0; i<this.state.list.length; i++) {
      // console.log(list[i])
      if(this.state.list[i].indexOf(this.state.searchValue) !== -1) {
        searchResults.push(this.state.list[i])
        console.log(searchResults)
      }
    }

    this.setState({
      searchOn: true,
      searchListDom: (<span/>)
    })
    this.makeListState(searchResults, 'search')




    // const listToRender = this.createList(newList);



  }



  createList(list) {

    console.log(`called`)
    return(

      <ul className='list'>  
        {list.map( (item, index) => <li key={index}>{item}</li>)}
      </ul>
    )

  }
  

  makeListState(list, type) {
    const listdom = this.createList(list);
    if(type === 'main') {
      this.setState({
        listDom:listdom,
      })
    } else if (type === 'search') {
      this.setState({
        searchListDom:listdom,
      })
    }
  }

  componentDidMount() {
    this.makeListState(this.state.list, 'main');

  }




  

  render() {


    return (
      <div className="app">
        <Navbar title='My App' links={AppHandler.links} searchCallAction={this.saveSearch}/>
        <div className='pad-top'>
          <h1> {this.state.searchValue} </h1>

           {(this.state.searchOn)?this.state.searchListDom:this.state.listDom} 


        </div>
      </div>
    );
  }
}