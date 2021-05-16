import React, { Component } from 'react'
import { Button } from "react-bootstrap";

export class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count:0,
      memoryId:null
    };
  }
  componentDidMount(){
    console.log("componentDidMount()")
    let memory =setInterval(() => {
      this.increment()
    }, 1000);
    this.setState({memoryId:memory})
  }
  componentDidUpdate(){
    console.log("componentDidUpdate()")
  }
  increment = () =>{
    this.setState({ count:this.state.count+1  });
  }
  componentWillUnmount(){
    console.log("componentWillUnmount()")
    clearInterval(this.state.memoryId)
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <div className="part1">
        <img className="photo" src={this.props.profilePerson.imgSrc} alt="" />
        <h6 >
          87 <br /> Publications{" "}
        </h6>{" "}
        <h6>
          4761 <br />
          Abonnés{" "}
        </h6>{" "}
        <h6>
          4206 <br /> Abonnements{" "}
        </h6>
      </div>
      <div className="part2">
        <h4>
          {this.props.profilePerson.fullName}
          <Button variant="primary" >
            S'abonner
          </Button>
        </h4>
        <h6 style={{ color: "#ACACAC",marginRight:'70px' }}>{this.props.profilePerson.profession}</h6>
        <h6 >{this.props.profilePerson.bio}</h6> 
      </div>
      <div className=" part3">
        <div className=" part31">
          <h6>
            <svg
              aria-label="Publications"
              className="_8-yf5 "
              fill="#262626"
              height="18"
              viewBox="0 0 48 48"
              width="18"
            >
              <path
                clipRule="evenodd"
                d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                fillRule="evenodd"
              ></path>
            </svg>
            PUBLICATIONS
          </h6>
          <h6>
            <svg
              aria-label="Reels"
              className="_8-yf5 "
              fill="#262626"
              height="18"
              viewBox="0 0 48 48"
              width="18"
            >
              <path d="M31.5 28.2l-11.2-6.5c-.5-.3-1-.3-1.5 0-.5.2-.8.7-.8 1.3v13c0 .5.3 1 .8 1.3.2.1.5.2.7.2.3 0 .5-.1.8-.2l11.2-6.5c.5-.3.7-.8.7-1.3s-.3-1-.7-1.3zM43.9 4c-2.5-2.4-5.5-4-12.2-4H16.2C9.6 0 6.6 1.6 4 4.1 1.6 6.6 0 9.6 0 16.2v15.5c0 6.6 1.6 9.7 4.1 12.2 2.5 2.4 5.5 4 12.2 4h15.5c6.6 0 9.7-1.6 12.2-4.1 2.4-2.5 4-5.5 4-12.2V16.2c0-6.6-1.6-9.6-4.1-12.2zM31.8 3c6.3 0 8.4 1.6 10 3.2 1.2 1.2 2.3 2.7 2.9 5.8h-9.3l-5.1-9h1.5zM16.2 3h10.5l5.1 9h-12l-5.1-9h1.5zm-10 3.2C7.3 5.1 8.7 4 11.5 3.4l4.9 8.6H3.3C3.9 8.9 5 7.4 6.2 6.2zM45 31.8c0 6.3-1.6 8.4-3.2 10-1.6 1.6-3.8 3.2-10 3.2H16.2c-6.3 0-8.4-1.6-10-3.2C4.6 40.2 3 38 3 31.8V15h42v16.8z"></path>
            </svg>
            REELS
          </h6>
          <h6>
            <svg
              aria-label="Publications"
              className="_8-yf5 "
              fill="#262626"
              height="18"
              viewBox="0 0 48 48"
              width="18"
            >
              <path d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"></path>
            </svg>
            IGTV
          </h6>
          <h6>
            <svg
              aria-label="Identifié(e)"
              className="_8-yf5 "
              fill="#262626"
              height="18"
              viewBox="0 0 48 48"
              width="18"
            >
              <path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></path>
            </svg>
            IDENTIFIE
          </h6>
        </div>
      </div>
      <div className="container">
        <div
          className="part41"
        >
          <img
            src="https://i.pinimg.com/originals/ee/82/2a/ee822ab2fdf6de4d10f10de8648e522b.jpg"
            alt=""
            height="300"
            width="300"
          />
          <img
            src="https://yt3.ggpht.com/ytc/AAUvwngFkC6RO5FpDLOLwTujUKI0naFV0TpayKg-mjWtug=s900-c-k-c0x00ffffff-no-rj"
            alt=""
            height="300"
            width="300"
          />
          <img
            src="https://i.pinimg.com/originals/e3/4e/b1/e34eb1ad3756bdeb7e0f81d2f78238ee.jpg"
            alt=""
            height="300"
            width="300"
          />
        </div>
        <div className="part42">
          <img
            src="https://i.pinimg.com/originals/73/43/b3/7343b342ad8cf845c7da45c052fde4d2.jpg"
            alt=""
            height="300"
            width="300"
          />
          <img
            src="https://celebrity.tn/wp-content/uploads/2019/02/yousr.fg_-1024x1024.jpg"
            alt=""
            height="300"
            width="300"
          />
          <img
            src="https://i.pinimg.com/originals/c9/4f/e3/c94fe31f5751ef08f364c0ec1e2b6064.jpg"
            alt=""
            height="300"
            width="300"
          />
        </div>
      </div>
      </div>
    )
  }
}

export default Profile
