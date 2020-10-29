import React from "react"

export default class NavbarSearch extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {clickAction, } = this.props
        return( 
            <span className='search-container' onClick={clickAction}>
                <button className='nav-icons'><i className='material-icons'>search</i></button>
            </span>
        );
    }


}