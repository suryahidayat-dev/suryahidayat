import { FaGithub, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/suryasatriah/",
      color: "bg-blue-600",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/suryahidayat-dev",
      color: "bg-gray-800",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/suryasatriah/",
      color: "bg-pink-600",
    },
    {
      name: "Gmail",
      icon: FaGoogle,
      href: "mailto:hello.suryahidayat@gmail.com",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="flex gap-4 animate-in fade-in zoom-in duration-500 ease-out">
      {socialLinks.map((social, index) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          // Adding a staggered delay based on the index
          className={`flex items-center justify-center w-12 h-12 rounded-full ${social.color} text-white transition-all duration-300 hover:scale-110`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <social.icon size={22} />
        </a>
      ))}
    </div>
  );
};

export default Contact;
