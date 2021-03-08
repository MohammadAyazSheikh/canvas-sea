import React, { Component } from 'react';
import { FiMenu } from 'react-icons/fi';
import '../styles/navStyle.css'

let width = window.innerWidth;
export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggleMenu: false,
            width: 600
        }

        this.toggle = this.toggle.bind(this)
        this.updateSize = this.updateSize.bind(this)
    }

    toggle() {
        console.log("invoke")
        let val = !this.state.toggleMenu
        this.setState({ toggleMenu: val })


    }


    updateSize() {
        width = window.innerWidth;
        if (width <= 600) {
            this.setState({ toggleMenu: true })
        }
        else {
            this.setState({ toggleMenu: false })
        }
    }


    componentDidMount() {

        window.addEventListener('resize', this.updateSize);
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize);
    }

    render() {


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

                <nav  >
                 <p className="navHeading"> Canvas Sea </p>
                    <ul className="navUl" style={{ display: this.state.toggleMenu ? 'none' : 'flex' }}>

                        <li className='navItems'><a href='#'>Home</a></li>
                        <li className='navItems'><a href='#'>About</a></li>
                        <li className='navItems'><a href='#'>Contact </a></li>
                    </ul>
                </nav>

                <div style={{ width: '100%', height: '600px', backgroundColor: 'red' }}>

                </div>

            </div >
        );
    }
}
