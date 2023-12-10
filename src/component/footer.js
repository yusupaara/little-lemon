import React from "react";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contacts = [
  { icon: faLocationDot, text: "123 Main St, Anytown USA" },
  { icon: faPhone, text: "(312) 593-2744" },
  { icon: faEnvelope, text: "customer@littlelemon.com" },
];

const socmeds = [
  { icon: faFacebook, link: "facebook.com" },
  { icon: faTwitter, link: "twitter.com" },
  { icon: faInstagram, link: "instagram.com" },
  { icon: faYoutube, link: "youtube.com" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="font-bold text-2xl mb-2">Little Lemon</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quisquam.
            </p>
            <div className="flex items-center">
              {contacts.map((contact) => (
                <div key={contact.icon} className="mr-4">
                  <FontAwesomeIcon icon={contact.icon} />
                  <p className="text-sm">{contact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
