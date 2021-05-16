import React from "react";
import { Form, FormControl, Navbar } from "react-bootstrap";
import { Heart, Home, Send, Compass } from "react-feather";

//

const Header = () => {
  return (
    <div className="row">
      <Navbar bg="light" className="d-flex justify-content-around">
        <img
          className=""
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
          
        />{" "}
        <Form inline>
          <FormControl type="text" placeholder="Search" mx="20px 50px"className="mr-sm-2" />
        </Form>
        <Home />
        <Send className="" />
        <Compass />
        <Heart  className="" />
        <img
          className=""
          src="https://celebrity.tn/wp-content/uploads/2019/02/noura-samet-1024x1024.jpg"
          alt="description"
          height="60px"
          width="60px"
          style={{ borderRadius: "50%"}}
        
        />
      </Navbar>
      <span className=" border-bottom border-gray"></span>
    </div>
  );
};

export default Header;