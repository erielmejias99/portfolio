import { Typography } from "@material-tailwind/react";
import {GITHUB_LINK, LINKED_IN_LINK, RESUME_LINK} from "@/util/globals";

const LINKS = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: RESUME_LINK,
    label: "Resume/CV",
    target: "_blank",
  },
  {
    href: LINKED_IN_LINK,
    label: "LinkedIn",
    target: "_blank",
  },
  {
    href: GITHUB_LINK,
    label: "GitHub",
    target: "_blank",
  }
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Made with{" "}&hearts; by Eriel Mejias
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link, index) => (
              <li key={`${index}-${link.href}`}>
                <Typography
                  as="a"
                  href={link.href}
                  target={link.target ?? '_self' }
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Typography>
              </li>
            ))}
            {/*<Button color="gray">subscribe</Button>*/}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
