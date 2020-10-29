import React from "react"

export default class NavbarMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props;

        return(
            <div className='navbar-menu'>
                <h1 className='navbar-menu-title'> {title} </h1>
            </div>
        );
    }

}

