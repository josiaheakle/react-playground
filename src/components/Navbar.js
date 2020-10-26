import React from "react"

import './css/Navbar.css'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        // this.createLinkButtons = this.createLinkButtons.bind(this);
        this.createLinkButtons = this.createLinkButtons.bind(this);
        this.createLinkButtons();
    }


    

    createLinkButtons = () => {
        return (
            <div>
                {this.props.links.map((link, index) => {
                    console.log(`${link.name}: ${link.url}`)
                    return (<a key={index} href={link.url}> {link.name} </a>);
                })}
            </div>
        );
    }

    render() {

        const { title, links } = this.props;
        return (
            <nav className='navbar'>
                <div className='container navbar-container'>
                    <span className='navbar-title'>{title}</span>
                    <div className='navbar-dropdown-items'>
                        <span>one</span>
                        <span>two</span>
                        <span>three</span>

                    </div>
                </div>
            </nav>
        );
    }
}