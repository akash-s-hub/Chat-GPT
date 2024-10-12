import React from "react";
import newChatIcon from "../assets/newChatIcon.svg";
import dropdown from "../assets/dropdown.svg";
import Button from "./Button";

function Header() {
  return (
    <header>
      <div className="textHolder">
        <img src={newChatIcon} alt="" />
        <div className="text">
          ChatGPT 4o mini <img src={dropdown} alt="" />
        </div>
      </div>

      <div className="btnHolder">
        <Button bg={"white"} color={"black"}>
          Log In
        </Button>
        <Button bg={"black"} color={"white"}>
          Sign Up
        </Button>
      </div>
    </header>
  );
}

export default Header;
