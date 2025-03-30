import {useRef} from "react";
import "./styles/contact.css";

function Contact({contactRef}){
    return(
          <contact className="contacttop" ref={contactRef}>
        <div className="contactheaddiv">
            <h1 id="contact-me-head">Contact Me</h1>
            <p id="paracontact">Got a question? Send me a message and I'll get back soon. </p>
        </div>

        <div className="bigdivc" >
            <div className="div1contact">
                11
            </div>

            {/* comment */}
            <div className="div2contact">
                <div className="innercomment">
                    <div className="commenticon">
                    <i class="ri-chat-3-line"></i>
                        <h3>comments </h3>
                        <p id="bluestext">(1)</p>
                    </div> 
                    <hr id="linedesign"/>
                    {/* name */}
                    <div className="simplenamediv">
                        <label htmlFor="" id="namehead">Name *</label>
                        <input name="" id="textname" placeholder="Enter your name."></input>
                    </div>
                    {/* message */}
                    <div className="simplemessagediv">
                        <label htmlFor="">Message *</label>
                        <textarea name="" id="textmessage" placeholder="write your message here..."></textarea>
                    </div>
                    <div className="simplephotodiv">
                        <label htmlFor="">Profile Photo (optional)</label>
                        <input type="file"placeholder="hi"/>
                    </div>
                    <div className="postcomments">
                    <i class="ri-send-plane-fill"></i>Post Comment
                    </div>

                </div>
            </div>
        </div>
    </contact>
    );
}
export default Contact;