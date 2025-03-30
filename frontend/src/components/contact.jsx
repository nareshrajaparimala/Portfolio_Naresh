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
             {/* get in touch */}
            {/* first contact */}
            <div className="div1contact">
                <div className="getintouchhead">
                    <h3 id="getintouchsent">Get in Touch</h3>
                    <div className="sharicon">
                        <i class="ri-share-line"></i>
                    </div>
                </div>
                <p id="paraforgetintouch">Have something to discuss? Send me a message and let's talk. </p>
                    <input type="text" placeholder="Your Name." id="sendername"/>
                    <input type="text" placeholder="Your Email." id="sendermail"/>
                    <textarea name="" id="sendermessage" placeholder="Your Message.."></textarea>
                    <div className="postcontact">
                        <i class="ri-send-plane-fill"></i>Send Message
                    </div>

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
        {/* copywrites */}
        <div className="divcopywright">
            @ 2025 ,All Rights Reserved Naresh.R
        </div>
    </contact>
    );
}
export default Contact;