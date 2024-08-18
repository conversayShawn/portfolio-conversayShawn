import React, { useState } from "react";
import "../../styles/contact/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    isSpeakingEngagement: "no",
    date: "",
    moreInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      isSpeakingEngagement: e.target.value,
      date: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: update to add form logic
    console.log("Form data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name: (required)
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email: (required)
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Subject: (required)
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </label>

      <div className="speaking-engagement">
        <label>Is this a speaking engagement?</label>
        <div className="radio-group">
          Yes
          <input
            type="radio"
            name="isSpeakingEngagement"
            value="yes"
            checked={formData.isSpeakingEngagement === "yes"}
            onChange={handleRadioChange}
          />
          No
          <input
            type="radio"
            name="isSpeakingEngagement"
            value="no"
            checked={formData.isSpeakingEngagement === "no"}
            onChange={handleRadioChange}
          />
        </div>
      </div>

      {formData.isSpeakingEngagement === "yes" && (
        <label>
          Date: (required)
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
      )}

      <label>
        More Information: (required)
        <textarea
          name="moreInfo"
          value={formData.moreInfo}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
