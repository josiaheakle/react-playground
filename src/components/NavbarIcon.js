import React from "react"



export default class NavbarIcon extends React.Component {

    constructor(props) {
        super(props)
    }

    

    render() {

        const { materialIconName, clickAction } = this.props;
        return( 
            <span className='icon-container' onClick={clickAction}>
                <i className='material-icons nav-icons'>{materialIconName}</i>
            </span>

        );
    }
}