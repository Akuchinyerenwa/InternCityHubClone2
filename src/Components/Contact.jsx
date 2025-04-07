import "./Contact.css";
import { DummyContact } from "./ContactComponents/DummyContact";



function Contact() {
  function ConpanyList() {
    return (
      <div>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Press</a></li>
      </div>
    )
  }

  return (
    <div className="contact-root">
      <DummyContact title="Company" contents={ConpanyList()} />
      <DummyContact title="Product" contents={ConpanyList()} />
      <DummyContact title="Resources" contents={ConpanyList()} />
      <DummyContact title="Follow" contents={ConpanyList()} />
      <DummyContact title="Get in Touch" contents={ConpanyList()} />
    </div>
  )
}

export {Contact};