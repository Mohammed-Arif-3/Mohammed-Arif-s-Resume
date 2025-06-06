import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImage from '../assests/img/contact-img.svg';

export const Contact = () => {
  const formIntialDetails = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formIntialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
  
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });
  
      const result = await response.json(); // 🔥 FIXED: Await the .json()
  
      setButtonText("Send");
      setFormDetails(formIntialDetails);
  
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully!" });
      } else {
        setStatus({ success: false, message: "Something went wrong. Try again later." });
      }
    } catch (err) {
      setStatus({ success: false, message: "Network error: Unable to send message." });
      setButtonText("Send");
    }
  };
  

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImage} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handlesubmit}>
              <Row>
                <Col sm={6} className='px-1'>
                  <input
                    type="text"
                    value={formDetails.firstname}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate('firstname', e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type="text"
                    value={formDetails.lastname}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate('lastname', e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col sm={12} className='px-1'>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                    required
                  ></textarea>
                  <button type='submit'><span>{buttonText}</span></button>
                </Col>
                {
                  status.message &&
                  <Col>
                    <p className={status.success === false ? 'danger' : 'success'}>
                      {status.message}
                    </p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
