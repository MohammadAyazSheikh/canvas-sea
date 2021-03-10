import React, { Component } from 'react';
import '../styles/home.css'

let width = window.innerWidth;


export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {

            scalle: 1
        }


        this.updateSize = this.updateSize.bind(this);
        this.scrollAnimation = this.scrollAnimation.bind(this);
        this.myRef = React.createRef();
    }


    scrollAnimation() {

        var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        let val = scrollpercent + 1;
        console.log(scrollpercent + 1)

        this.myRef.current.style.transform = `scale(${val <= 1.5 ? val : 1})`;

        if (val < 1.07) {
            this.myRef.current.style.color = 'white';
        }
        else if (val < 1.1) {
            this.myRef.current.style.color = 'black';
        }


        // let topPosition = this.myRef.current.getBoundingClientRect().top;
        // let bottomPosition = this.myRef.current.getBoundingClientRect().bottom;

        // const scrollPosition = window.innerHeight + window.scrollY;
        // console.log("bottom " + bottomPosition)
        // console.log("top " + topPosition)
        // console.log("hight " + scrollPosition)

        // if (bottomPosition < scrollPosition && topPosition > 0) {


        //     this.setState({ flag: true });
        // }
        // else {
        //     this.setState({ flag: false });
        // }



    }


    updateSize() {
        width = window.innerWidth;
        if (width <= 600) {

        }
        else {

        }
    }


    componentDidMount() {

        window.addEventListener('resize', this.updateSize);
        window.addEventListener('scroll', this.scrollAnimation);

    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize);
        window.removeEventListener('scroll', this.scrollAnimation);
    }

    render() {


        return (
            <div>

                <div className='backImageDiv'>
                    <img src="assets/headerimg2.jpg" alt="back image" width="100%" height="100%"  />
                    <h1 className='headingHeader' ref={this.myRef}  >A collection of creative work</h1>
                </div>
                <div style={{ zIndex: 100 }}>
                    <div style={{ width: '100%', height: '300px', backgroundColor: 'grey' }}></div>
                    <div style={{ width: '100%', height: '400px', backgroundColor: 'yellow' }}></div>
                    <div style={{ width: '100%', height: '200px', backgroundColor: 'orange' }}></div>
                </div>


            </div>




        );
    }
}
