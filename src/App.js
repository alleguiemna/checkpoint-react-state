import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Bio from "./components/Bio/Bio";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Button } from "react-bootstrap";
import "./App.css";

export class App extends Component {
  state = {
    person: {
      fullName: "ALLEGUI emna",
      bio: <Bio />,
      imgSrc:
        "https://celebrity.tn/wp-content/uploads/2019/02/noura-samet-1024x1024.jpg",
      profession: "Etudiante chez Go My Code",
    },
    isShow:false,
    memoryId:null
  };
  componentDidMount(){
    console.log("componentDidMount()")
    let memory=setInterval(() => {
      
    }, 1000);
    this.setState({memoryId:memory})
  }
  handleClick = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  componentWillUnmout(){
    console.log("componentWillUnmout()")
  }
  render() {
    return (
      <div>
        <Header />
        <div className="button">
        <Button  onClick={this.handleClick}>
          {this.state.isShow ? "Hide" : "Show"}
        </Button><br/>
        {this.state.isShow ? <Profile profilePerson={this.state.person}/> : "Click again"}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
