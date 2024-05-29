//READ ME: KEEP THIS PAGE COMMENTED WHEN DNOT RUNNING THE APP. EMAILJS HAS A 200 EMAIL QUOTA PER MONTH.

import React, { useState, useEffect } from "react";
import "./email.css";
import emailjs from "@emailjs/browser";

function EmailForm() {
  const [email, setEmail] = useState(localStorage.getItem("savedEmail") || "");
  const [message, setMessage] = useState(
    localStorage.getItem("savedMessage") || "",
  );

  // Store user's email and message in local storage
  useEffect(() => {
    localStorage.setItem("savedEmail", email);
    localStorage.setItem("savedMessage", message);
  }, [email, message]);

  useEffect(() => {
    const interval = setInterval(() => {
      //Getting current time (hours and minutes)
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();

      // Check if current time is scheduled send time
      if (currentHour === 10 && currentMinute === 58) {
        sendEmail(); // Call function to send email if time is matched
      }
    }, 30000); // Check every 60000 milliseconds

    return () => clearInterval(interval);
  }, []);

  // // Function to send email to user
  // const sendEmail = () => {
  //   emailjs
  //     .sendForm("service_yekynmh", "template_xbabcda", "#myForm", {
  //       publicKey: "ljZnFdgpXGVUbkM0v",
  //     })
  //     .then((response) => {
  //       console.log("Email sent!", response);
  //     })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //     });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    // Creating a form to collect user's email and message
    <form id="myForm" onSubmit={handleSubmit}>
      <label>
        Enter your email
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="user_email"
        />
      </label>
      <label>
        Enter practice message
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          name="message"
        ></textarea>
      </label>
    </form>
  );
}

export default EmailForm;
