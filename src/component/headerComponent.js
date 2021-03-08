import React, { Component } from 'react';
import { FiMenu } from 'react-icons/fi';
import '../styles/navStyle.css'

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggleMenu: 0
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        console.log("invoke")
       let val =  this.state.toggleMenu === 1? 0 : 1
        this.setState({ toggleMenu: val })
        console.log(this.state.toggleMenu)
    }


    render() {

        const hideMenu = this.state.toggleMenu ? "0px" : "150px"
        return (
            <div >
                <div className="header">
                    <div className='headingDiv' >
                        <p>Canvas Sea</p>
                    </div>

                    <div className="iconDiv"
                        onClick={this.toggle}  >
                        <button className="icon" >
                            <FiMenu size={30} />
                        </button>
                    </div>
                </div>
                <nav style={{ transform: `scaleY(${this.state.toggleMenu})`}} >
                    <ul className="navUl">
                        <li className='navItems'><a href='#'>Home</a></li>
                        <li className='navItems'><a href='#'>About</a></li>
                        <li className='navItems'><a href='#'>Contact </a></li>
                    </ul>
                </nav>

            </div >
        );
    }
}
