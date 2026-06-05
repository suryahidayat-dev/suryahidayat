import Contact from "../Contact";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-4">
        <Contact />
        <p className="text-gray-500">
          © {currentYear} Surya Satria Hidayat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
