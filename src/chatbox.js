import React, { useState } from "react";
import styled from "styled-components";
import { clear } from "material-icons";
import { tag_faces } from "material-icons";
import Picker from "emoji-picker-react";

const Container = styled.div`
.chat-popup{
  display: none;
  position:fixed;
  bottom:0;
  right:16px;
}
.open-button{
    background-color:#555;
    color:white;
    border:none;
    cursor:pointer;
    position:fixed;
    bottom:23px;
    right:28px;
    width:280px;
    height:50px;
}
.area{
    position:relative;
    bottom:-440px;
    width:60%;
    padding:0px;
    border:none;
    outline:none;
    margin: auto;
    margin-left:5px;
    min-height:20px;
    resize:none;
}

.form-container{
    max-width:700px;
    min-Height:500px;
    padding:10px;
    background-color:white;
    
}
 .cancel{
    position:relative;
    border: 0px;
    background-color: #00FFFF;
    top:-45px;
    left:42px;
    outline:none;
 }

.cancel:hover {
    cursor: pointer;
}

.closebtn{
    background-color:#00FFFF;
    width:300px;
    height:40px;
    
}
.hr{
    position: relative;
     bottom: -450px;
     width:300px;
     height:2px;
     background-color:silver;
}
#emoji-picker{
    position: fixed; 
    display: none;
    top:200px;
}
.emoji{
    
}
`;

const Chatbox = () => {
  const [message, setMessage] = useState("");
  

const EmojiClicked = (event , emojiObject)=>{
    setMessage(message + emojiObject.emoji );
}


  function openForm() {
    document.getElementById("openchat").style.display = "block";
  }
  function closeForm() {
    document.getElementById("openchat").style.display = "none";
  }
  return (
    <Container>
      <div>
        <button className="open-button" onClick={openForm}>
          chat
        </button>
        <div className="chat-popup container" id="openchat">
          <div className="closebtn"></div>
          <form className="form-container">
          <div id="emoji-picker">
          <Picker onEmojiClick={EmojiClicked} />
        </div>
            <div className="hr"></div>
              <i onClick={(e)=>{
e.target.backgroundColor = 
e.target.backgroundColor ===  "white"
? "white" : "#ffffff";
let ele = document.getElementById("emoji-picker");
ele.style.display = 
ele.style.display === "block" ? "none" : "block";
              }}
              style={{
              
                backgroundColor: "white",
                textAlign: "center",
                position:"relative",
                bottom:"-450px",
                width:"auto",
                padding: "0px",
                cursor:"pointer",
              }}
              className="material-icons">tag_faces</i>
             
            <input
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              align="center"
              className="area"
              placeholder="Type your message..."
              name="message"
              required
            ></input>
            <button type="button" className="cancel" onClick={closeForm}>
              <i className="material-icons">clear</i>
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};
export default Chatbox;
