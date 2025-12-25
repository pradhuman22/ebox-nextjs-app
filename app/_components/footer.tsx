import Link from "next/link";
import { footerMenus, socialBtn } from "@/constant";

const Footer = () => {
  return (
    <footer>
      <nav className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center justify-center gap-4 border-t py-5 md:flex-row md:justify-between">
          <div className="flex items-center gap-6 text-sm font-light md:text-base">
            {footerMenus.map((menu) => (
              <Link key={menu.url} href={menu.url}>
                {menu.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {socialBtn.map((social) => (
              <Link
                href={social.url}
                key={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="size-4" />
                <span className="sr-only">{social.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
