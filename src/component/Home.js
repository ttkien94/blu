import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home ">
        <div className="banner">
          <img
            src="./img/home/banner1.jpg"
            class="img-responsive"
            alt="Image"
          />
          <div className="content">
            <h2 className="hello">
              HELLO!<span> STRANGER!</span>
            </h2>
            <h1>I'm BLU</h1>
            <div className="multiltext">
              <span>Freelance </span>
              <ul>
                <li>FrontEnd & WebDesigner & Developer</li>
                <li>Multimedia Designer</li>
                <li>A & RManager</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" about row area-pt">
          <div class=" aboutleft">
            <img
              src="./img/home/banner6.jpg"
              class="img-responsive aboutimg aboutimg-1"
              alt="Image"
            />
            <img
              src="./img/home/banner8.jpg"
              class="img-responsive aboutimg aboutimg-2"
              alt="Image"
            />
            {/* aboutimg-3 là hình hiển thị sau khi hover */}
            <img
              src="./img/home/banner8.jpg"
              class="img-responsive aboutimg aboutimg-3"
              alt="Image"
            />
            {/* hình nhỏ */}
            <img
              src="./img/home/banner8.jpg"
              class="img-responsive aboutimg aboutimg-4"
              alt="Image"
            />
          </div>
          <div class="aboutright">
            <span>
              <b>Giới Thiệu</b>
            </span>
            <h2>Xin Chào Mình Là Blu Ngáo Ngơ hea hae</h2>
            <div className="row">
              <div className="col-md-4">
                <button
                  type="button"
                  class="btn btn-large btn-block btn-default aboutbutton"
                >
                  <span>Contact Me</span>
                  <span>Contact Me</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
