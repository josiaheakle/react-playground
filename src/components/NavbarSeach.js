import React from "react"

export default class NavbarSearch extends React.Component {
    constructor(props) {
        super(props);


        this.thisRef = React.createRef();
        this.state = {



        }

    }


    animateSearchBar() {
        const searchContainer = document.querySelector('.search-container')
        searchContainer.classList.toggle('open-search-container')
        const searchButton = document.querySelector('.search-icon-button')
        searchButton.classList.toggle('search-icon')
    }
    
    componentDidUpdate(prevProps){
        if(this.props.openSearchBar != prevProps.openSearchBar) {
            this.animateSearchBar();
        }
    }

    render() {
        const { clickAction, openSearchBar, updateSearchValue } = this.props
        return( 
            <span className='search-container' >
                
                    {openSearchBar?
                                <input className='search-input' type='text' placeholder='search' onChange={updateSearchValue}></input>
                    :null}
                <a href='#' className='search-icon-button' onClick={ clickAction }>
                    <i className='material-icons nav-icons'>search</i>
                </a>
            </span>
        );
    }


}