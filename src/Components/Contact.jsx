import "./Contact.css";
import { AppLinks } from "./ContactComponents/AppLinks";

function Contact() {
  return (
    <div className="contact-root">
      <AppLinks
        title="Company"
        contents={[
          { value: "About Us", href: "#" },
          { value: "Contact Us", href: "#" },
          { value: "Careers", href: "#" },
          { value: "Team", href: "#" },
          { value: "Blog", href: "#" },
          { value: "Press", href: "#" },
        ]}
      />
      <AppLinks
        title="Product"
        contents={[
          { value: "Features", href: "#" },
          { value: "Pricing", href: "#" },
          { value: "Security", href: "#" },
          { value: "Vendors", href: "#" },
        ]}
      />
      <AppLinks
        title="Resources"
        contents={[
          { value: "Support", href: "#" },
          { value: "Request a Demo", href: "#" },
          { value: "Sitemap", href: "#" },
          { value: "FAQ", href: "#" },
          { value: "Bug Report", href: "#" },
        ]}
      />
      <AppLinks
        isSocialLinks
        title="Follow"
        contents={[
          { value: "./image/twitter.png", href: "#" },
          { value: "./image/facebook.png", href: "#" },
          { value: "./image/linkedin-big-logo.png", href: "#" },
        ]}
      />
      <div className="flex-1">
        <AppLinks
          title="Get in Touch"
          contents={[
            {
              value:
                "Keep up on our always evolving products and more new features. Enter your e-mail and subscribe to our newsletter",
              href: "#",
            },
          ]}
        />
        <p className="contact-input">
          <input
            type="email"
            name="contact"
            id="contact"
            placeholder="Enter your email address"
          />
          <button>
            <img src="../image/button-arrow.png" alt="Button arrow" />
          </button>
        </p>
      </div>
    </div>
  );
}

export { Contact };
