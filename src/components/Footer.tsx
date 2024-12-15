import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const links = [
  { href: "https://x.com", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://www.linkedin.com", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://www.github.com", icon: <FaGithub />, label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="relative w-screen bg-gradient-to-r from-violet-400 to-violet-300 py-8 text-black">
      <div className="container mx-auto grid gap-8 px-6 md:grid-cols-3 md:px-8">
        {/* Left Section */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <h3 className="font-general text-lg font-semibold">
            Connect With Me
          </h3>
          <div className="flex gap-6">
            {links.map((link, index) => (
              <a
                href={link.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={link.label}
              >
                <div className="absolute -inset-2 rounded-full bg-violet-200 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                <div className="relative text-xl transition-transform duration-300 ease-out group-hover:scale-110">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-center font-general text-sm">
            &copy; Nova 2024. All rights reserved.
          </p>
          <p className="text-center font-general text-sm">
            Rebuilt by{" "}
            <a className="font-bold underline" href="https://samyakpiya.com">
              Samyak
            </a>
            .
          </p>
          <div className="h-px w-16 bg-black/20" />
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center space-y-4 md:items-end">
          <nav className="flex flex-col items-center space-y-2 md:items-end">
            <a
              href="#privacy-policy"
              className="group relative text-sm font-medium"
            >
              <span className="relative">
                Privacy Policy
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
            <a href="#terms" className="group relative text-sm font-medium">
              <span className="relative">
                Terms of Service
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
