import React from "react";
import chatGPT from "../assets/chatGPT.svg";
import upload from "../assets/upload.svg";
import Examples from "./Examples";

function Body() {
  return (
    <div className="body">
      <img src={chatGPT} alt="" />
      <div className="examplesHolder">
        <Examples></Examples>
        <Examples></Examples>
        <Examples></Examples>
        <Examples></Examples>
      </div>
      <div className="inputBox">
        <input type="text" placeholder="Message ChatGPT" />
        <img className="upload" src={upload} alt="" />
      </div>

      <div className="footer">
        ChatGPT can make mistakes. Check important info.
      </div>
    </div>
  );
}

export default Body;
