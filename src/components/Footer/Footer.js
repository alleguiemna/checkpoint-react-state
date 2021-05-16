import React from "react";
import { Navbar } from "react-bootstrap";
import { Home, Search, ShoppingBag, Video } from "react-feather";

const Footer = () => {
  return (
    <div className="">
      <Navbar bg="light" className="navbar" >
        <Home /> <Search /> <Video /> <ShoppingBag />{" "}
        <img
          className="p-2 col-example text-left"
          src="https://celebrity.tn/wp-content/uploads/2019/02/noura-samet-1024x1024.jpg"
          alt="description"
          height="60px"
          width="60px"
          style={{ borderRadius: "50%" }}
        />
      </Navbar>
      
    </div>
  );
};

export default Footer;