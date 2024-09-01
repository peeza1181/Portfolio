import React from "react";
import Swal from "sweetalert2";

export const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "58ca8048-63e6-4c9c-ac2e-850be1c91b7c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-white text-black flex justify-center items-center p-4"
    >
      <form
        onSubmit={onSubmit}
        action=""
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Contact
          </p>
          <p className="py-4">
            // Submit the form below or shoot me an email
          </p>
        </div>
        <label>Full Name</label>
        <input
          className="bg-pink-100 p-2 mb-5"
          type="text"
          placeholder="Enter your name"
          name="name"
          required
        />

        <label>Email Address</label>
        <input
          className="p-2 bg-pink-100 mb-5"
          type="email"
          placeholder="Enter your email"
          name="email"
          required
        />

        <label>Your Message</label>
        <textarea
          className="bg-pink-100 p-2 min-h-64 max-h-80"
          name="message"
          rows="10"
          placeholder="Enter your message"
          required
        ></textarea>
        <button className="mt-5 mx-auto p-3 rounded-[10px] border-2 border-black hover:border-2 hover:bg-black hover:text-white duration-700 ">
          Send Message
        </button>
      </form>
    </div>
  );
};
