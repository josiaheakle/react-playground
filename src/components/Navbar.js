import React from "react"

import NavbarIcon from "./NavbarIcon.js"
import NavbarMenu from "./NavbarMenu.js"
import NavbarSeach from './NavbarSeach.js'

import './css/Navbar.css'

export default class Navbar extends React.Component {

    // props
    // searchCallAction - parent function sending searchValue
    // title - title of nav



    constructor(props) {
        super(props);

        this.state = {
            openMenu: false,
            openSearch: false,
            navbarMenuTitle: '',

            searchValue: '',    
            searchQuery: '',
        }

        this.startMenuTimeout = this.startMenuTimeout.bind(this)
        this.setMenuOpen = this.setMenuOpen.bind(this)
        this.setMenuClosed = this.setMenuClosed.bind(this)
        this.updateSearchValue = this.updateSearchValue.bind(this)
        this.handleSearchClick = this.handleSearchClick.bind(this)
        // this.createResult = this.createResult.bind(this)
        // this.openSearchMenu = this.openSearchMenu.bind(this)
    }

    startMenuTimeout() {
        setTimeout(this.setMenuClosed, 4000);
    }

    setMenuOpen(event) {
        this.startMenuTimeout();
        this.setState({openMenu: true})
        console.log(event.target.textContent)

        switch(event.target.textContent) {
            case('person'):
                this.state.navbarMenuTitle = 'Account';
                break;
            case('settings'):
                this.state.navbarMenuTitle = 'Settings'
                break;
        }

    }

    setMenuClosed(event) {
        this.setState({openMenu: false})
    }

    updateSearchValue(event) {
        this.setState({
            searchValue:event.target.value,
        })
    }

    handleSearchClick(event) {

        const { searchCallAction } = this.props

        
        if(this.state.openSearch === false) {
            this.setState({
                openSearch:true
            })
        } else {
            
            this.setState({
                searchQuery: this.state.searchValue,
                searchValue: '',
            })

            setTimeout(() => {
                searchCallAction(this.state.searchQuery)
            }, 100)
            // searchCallAction(this.state.searchQuery)

            // this.createResult();

            //CALL SEARCH FROM HERE

            this.setState({openSearch:false})
        }

    }





    render() {

        const { title, links } = this.props;
        return (
            <nav className='navbar'>
                <div className='container navbar-container'>
                    <span className='navbar-title'>{title}</span>
                    <div className='navbar-dropdown-items'>
                        <NavbarIcon materialIconName='settings' clickAction={this.setMenuOpen} closeAction={this.setMenuClosed}/>
                        <NavbarIcon materialIconName='person' clickAction={this.setMenuOpen} closeAction={this.setMenuClosed}/>
                        <NavbarSeach clickAction={ this.handleSearchClick } openSearchBar={this.state.openSearch} updateSearchValue={this.updateSearchValue}/>
                    </div>
                </div>
                {this.state.openMenu ? <NavbarMenu title={this.state.navbarMenuTitle} /> : null}
            </nav>
        );
    }
}