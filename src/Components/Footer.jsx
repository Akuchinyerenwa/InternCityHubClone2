import "./Footer.css";

const Footer = () => {
  const linksArray = [
    "Terms of Use",
    "Privacy Policy",
    "akuchill@assignment.com",
    "+234 812 345 6789",
  ];

  const footerLinks = linksArray.map((link) => {
    return (
      <a href="#" key={linksArray.indexOf(link)}>
        {link}
      </a>
    );
  });

  return (
    <div className="footer-root">
      <p>&copy; AkuChill Assignment(Cohort1). All rights Reserved</p>
      <div className="footer-links-container">{footerLinks}</div>
    </div>
  );
};

export default Footer;
