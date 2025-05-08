import "./Contact.css";
import ContactContents from "./ContactComponents/ContactContents";
import TwitterIcon from "../Images/icons8-x-30.png";
import FacebookIcon from "../Images/icons8-facebook-50.png";
import LinkedInIcon from "../Images/icons8-linkedin-50.png";
import Inputs from "./HeroComponents/Inputs";

const Contact = () => {
  const contentsArray1 = [
    "About Us",
    "Contact Us",
    "Team",
    "Careers",
    "Blog",
    "Press",
  ];
  const contentsArray2 = ["Features", "Pricing", "Security", "Vendors"];
  const contentsArray3 = [
    "Support",
    "Request a Demo",
    "Sitemap",
    "FAQ",
    "Bug Report",
  ];
  const contentsArray4 = [
    [TwitterIcon, "Twitter logo"],
    [FacebookIcon, "Facebook logo"],
    [LinkedInIcon, "LinkedIn logo"],
  ];
  const contentsArray5 = [
    [
      "Keep up on our always evolving products and more new features",
      "Enter your e-mail and subscribe to our newsletter",
    ],
  ];

  const arrayContent1 = contentsArray1.map((content) => {
    return (
      <p key={contentsArray1.indexOf(content)}>
        <a href="#">{content}</a>
      </p>
    );
  });
  const arrayContent2 = contentsArray2.map((content) => {
    return (
      <p key={contentsArray2.indexOf(content)}>
        <a href="#">{content}</a>
      </p>
    );
  });
  const arrayContent3 = contentsArray3.map((content) => {
    return (
      <p key={contentsArray3.indexOf(content)}>
        <a href="#">{content}</a>
      </p>
    );
  });
  const arrayContent4 = contentsArray4.map((content) => {
    return (
      <a href="#" key={contentsArray4.indexOf(content)}>
        <img src={content[0]} alt={content[1]} />
      </a>
    );
  });
  const arrayContent5 = contentsArray5.map((content) => {
    return (
      <div
        className="contact-input-container"
        key={contentsArray5.indexOf(content)}
      >
        <p>
          {content[0]}
          <span>{content[1]}</span>
        </p>
        <Inputs placeholder="Enter your email address" />
      </div>
    );
  });

  const contactArray = [
    {
      id: 1,
      title: "Company",
      contents: arrayContent1,
    },
    {
      id: 2,
      title: "Product",
      contents: arrayContent2,
    },
    {
      id: 3,
      title: "Resources",
      contents: arrayContent3,
    },
    {
      id: 4,
      title: "Follow",
      contents: arrayContent4,
    },
    {
      id: 5,
      title: "Get in Touch",
      contents: arrayContent5,
    },
  ];

  const contactTitle = contactArray.map((item) => {
    return (
      <ContactContents
        key={item.id}
        title={item.title}
        contents={item.contents}
      />
    );
  });

  return <div className="contact-root">{contactTitle}</div>;
};

export default Contact;
