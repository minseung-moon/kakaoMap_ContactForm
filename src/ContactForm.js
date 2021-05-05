import React from "react";
// npm install node-sass
import "./ContactForm.scss";

export default function ContactForm() {
  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <form action="#">
            <h2>Contact Us</h2>
            <input
              type="text"
              name="name"
              className="field"
              placeholder="성함을 입력해주세요"
            />
            <input
              type="email"
              name="email"
              className="field"
              placeholder="이메일을 입력해주세요"
            />
            <input
              type="text"
              name="phone"
              className="field"
              placeholder="전화번호를 입력해주세요"
            />
            <textarea
              name="message"
              className="field area"
              placeholder="내용을 입력해주세요"
            ></textarea>
            <button type="submit" className="btn">
              전송
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
