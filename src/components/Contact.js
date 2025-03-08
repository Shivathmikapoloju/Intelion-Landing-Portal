import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-12 bg-blue-600 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      <p className="text-lg mb-4">Have questions? We’d love to hear from you!</p>
      <a href="mailto:info@intelion.com" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
        Email Us
      </a>
    </section>
  );
};

export default Contact;
