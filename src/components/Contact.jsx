import React from "react";
import {FiSend} from 'react-icons/fi'
const Contact = () => {
  return (
    <div name="contact" className="bg-[#f1f5f9] text-[#0f172a] py-[5rem]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-600">
            Contact
          </p>{" "}
          <p className="py-4">
            Submit the form below or email me - athenkosivinqi25@gmail.com
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            method="POST"
            action="https://getform.io/f/e0327937-c36b-46d2-9551-62cf6cc1b467"
            className="flex flex-col max-w-[600px] w-full"
          >
            <input
              className="bg-[#ccd6f6] p-2"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="my-4 p-2 bg-[#ccd6f6]"
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="bg-[#ccd6f6] p-2"
              name="message"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className="bg-teal-600 hover:border-teal-600 text-white border-2 hover:bg-teal-900 hover:border-teal-900 px-4 py-3 my-8 mx-auto flex items-center rounded">
              Send <FiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
