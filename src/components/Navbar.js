import React from "react"

import NavbarIcon from "./NavbarIcon.js"
import NavbarMenu from "./NavbarMenu.js"
import NavbarSeach from './NavbarSeach.js'

import './css/Navbar.css'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openMenu: false,
            openSearch: false,
            navbarMenuTitle: '',
        }

        this.startMenuTimeout = this.startMenuTimeout.bind(this)
        this.setMenuOpen = this.setMenuOpen.bind(this)
        this.setMenuClosed = this.setMenuClosed.bind(this)
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


    render() {

        const { title, links } = this.props;
        return (
            <nav className='navbar'>
                <div className='container navbar-container'>
                    <span className='navbar-title'>{title}</span>
                    <div className='navbar-dropdown-items'>
                        <NavbarIcon materialIconName='settings' clickAction={this.setMenuOpen} closeAction={this.setMenuClosed}/>
                        <NavbarIcon materialIconName='person' clickAction={this.setMenuOpen} closeAction={this.setMenuClosed}/>
                        <NavbarSeach  />
                    </div>
                </div>
                {this.state.openMenu ? <NavbarMenu title={this.state.navbarMenuTitle} /> : null}
            </nav>
        );
    }
}