import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Contact() {
  //this will fetch the content from the contact page.
  const [page, setPage] = useState({});
  const [inserts, setInserts] = useState({
    fname: "",
    lname: "",
    email: "",
    notes: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3030/api/contacts/create", {
      method: "POST", //POST And PUT are the http methods. Usually we use GET
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inserts),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {});

    setInserts({
      fname: "",
      lname: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInserts((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  useEffect(() => {
    fetch("http://localhost:3030/api/pages/contact")
      .then((response) => response.json())
      .then((page) => {
        setPage(page);
      });
  }, []);

  return (
    <>
      <h1>{page.name}</h1>
      <h5>{page.quote}</h5>
      <div className="container contact-container">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={handleSubmit} name="Sent" id="contactForm">
              <label>First Name</label>
              <input
                name="fname"
                value={inserts.fname}
                onChange={handleChange}
                type="text"
                className="fname"
                id="fname"
                required
                placeholder="Enter First Name"
              />
              <br></br>
              <label>Last Name</label>
              <input
                name="lname"
                value={inserts.lname}
                onChange={handleChange}
                type="text"
                className="lname"
                id="lname"
                required
                placeholder="Enter Last Name"
              />
              <br></br>
              <label>Email</label>
              <input
                name="email"
                value={inserts.email}
                onChange={handleChange}
                type="email"
                className="email"
                id="email"
                required
                placeholder="Enter Email"
              />
              <br></br>
              <label>What's On Your Mind? </label>
              <textarea
                name="notes"
                value={inserts.notes}
                onChange={handleChange}
                type="text"
                className="notes"
                id="notes"
                placeholder="Message"
              />
              <br></br>
              <button>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
