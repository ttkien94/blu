import React, { Component } from 'react';

class Taskbar extends Component {
    render() {
        return (
            <div className="taskbar">
                <div className="avatar">
                    <img src="img/taskbar/avatar.jpeg" class="img-responsive" alt="Image" />
                </div>
                <ul>
                    <li className="liabout">
                        {/* <a href=""> */}
                            <div className="taskbaricon">
                            <i className="fa fa-address-card"></i>
                            <i className="fa fa-address-card"></i>
                            </div>
                            <span className="about">About</span>
                        {/* </a> */}
                    </li>
                    <li className="liabout">
                        <a href="">
                            <div className="taskbaricon">
                            <i class="fa fa-briefcase"></i>
                            <i class="fa fa-briefcase"></i>
                            </div>
                            <span className="portfolio">Portfolio</span>
                        </a>
                    </li>
                    <li className="liabout">
                        <a href="">
                            <div className="taskbaricon">
                            <i class="fa fa-phone"></i>
                            <i class="fa fa-phone"></i>
                        </div>
                            <span className="contact">Contact</span>
                        </a>
                    </li>
                </ul>

                <div className="followme">
                    <p >FOLLOWE ME</p>
                </div>
                <div>
                <ul className="socialmedia">
                    <li>
                        <i class="fa fa-facebook "></i>
                        <i class="fa fa-facebook "></i>
                    </li>
                    <li>
                        <i class="fa fa-instagram"></i>
                        <i class="fa fa-instagram"></i>
                    </li>
                </ul>
                </div>
            </div>
        );
    }
}

export default Taskbar;