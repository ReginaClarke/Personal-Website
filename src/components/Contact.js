import React from "react";

//https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = async (e) => {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form className="contactform" onSubmit={this.handleSubmit}>
        <h3 className="contactheader">Send Me a Message!</h3>
        <p>
          <label>
            Your Name:{" "}
            <input
              className="forminput"
              placeholder="Enter Your Name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{" "}
            <input
              className="forminput"
              placeholder="Enter Your Email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Message:
            <textarea
              className="formtextarea"
              placeholder="Enter Your Message"
              name="message"
              value={message}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <button className="projectbutton" type="submit">
            Send
          </button>
        </p>
      </form>
    );
  }
}

export default ContactForm;
