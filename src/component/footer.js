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

const sitemaps = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Order Online", href: "/order" },
  { name: "Login", href: "/login" },
];
  

const contacts = [
  { icon: faLocationDot, text: "678 Pisa Ave, Chicago, IL 60611" },
  { icon: faPhone, text: "(312) 593-2744" },
  { icon: faEnvelope, text: "customer@littlelemon.com" },
];

const socmeds = [
  { icon: faFacebook, link: "https://facebook.com" },
  { icon: faTwitter, link: "https://twitter.com" },
  { icon: faInstagram, link: "https://instagram.com" },
  { icon: faYoutube, link: "https://youtube.com" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-tmgrey to-emerald-900 px-0 py-5 md:py-12">
      <div className="container py-5 px-12 my-0 mx-auto space-y-5 max-w-7xl sm:space-y-8 md:space-y-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:px-5 text-md font-semibold leading-6 text-white">
          {/* Logo */}
          <div className="col-span-1 pt-1">
            <img src="https://imagesave-splmdny.s3.ap-southeast-2.amazonaws.com/littlelemon-logo-mini.webp" alt="logo" className="h-48" />
          </div>
          {/* Sitemap */}
          <div className="col-span-1">
            <div className="space-y-5">
              <div className="font-bold">SITEMAP</div>
              <div className="space-y-1">
                {sitemaps.map((site) => (
                  <div className="hover:text-tmyellow text-gray-300">
                  <a key={site.name} href={site.href}>{site.name}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Contact */}
          <div className="pt-6 lg:pt-0 col-span-2 md:col-span-1 lg:col-span-2">
            <div className="space-y-5">
                <div className="font-bold">CONTACT US</div>
                <div className="space-y-1">
                  {contacts.map((contact) => (
                  <div key={contact.icon} className="flex space-x-5 items-center text-gray-300">
                    <FontAwesomeIcon icon={contact.icon} className="w-6 h-3" />
                    <p className="text-sm">{contact.text}</p>
                  </div>
                  ))}
                </div>
              </div>
          </div>
          {/* Connect */}
          <div className="pt-6 lg:pt-0 col-span-2 md:col-span-1 lg:col-span-2 lg:justify-self-end ">
          <div className="flex flex-col lg:items-end space-y-5">
            <div className="">CONNECT WITH US</div>
              <div className="flex space-x-5">
                {socmeds.map((socmed) => (
                  <a
                    key={socmed.icon}
                    href={socmed.link}
                    className="hover:text-tmyellow text-gray-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={socmed.icon} className="w-10 h-10" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;