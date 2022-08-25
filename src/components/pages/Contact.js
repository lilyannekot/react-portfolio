import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text"></input>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text"></input>
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea rows="5"></textarea>
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}
