import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20 text-sm ">
      <div className="flex flex-col md:flex-row justify-around gap-4 max-w-7xl mx-auto py-8 px-4">
        <div>
          <p className="flex font-semibold text-lg justify-center  ">Phone</p>
          <a href="tel:+380936557900" className="text-base font-medium">
            +380-93-655-79-00
          </a>
        </div>
        <div>
          <div className="flex gap-1 items-center justify-center">
            <Mail size={20} strokeWidth={2} />
            <p className="font-semibold text-lg ">Email </p>
          </div>

          <a
            href="mailto:kostiv.maksym.work@gmail.com"
            className="text-base font-medium"
          >
            kostiv.maksym.work@gmail.com
          </a>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-lg">Follow me</p>
          <div className="flex flex-row gap-4">
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/maksym-kostiv-b80bb5258/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} strokeWidth={2} />
            </a>
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/thd_mks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} strokeWidth={2} />
            </a>
            <a
              aria-label="GitHub"
              href="https://github.com/kostivkostiv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} strokeWidth={2} />
            </a>
          </div>
        </div>
          <div>
            <p className="text-center text-xs text-gray-500 mt-4">
            © {new Date().getFullYear()} by Maksym Kostiv
            </p>
          </div>
      </div>
    </footer>
  );
}
