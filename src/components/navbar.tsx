import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography, Avatar,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {LINKED_IN_LINK, RESUME_LINK} from "@/util/globals";
import {DocumentIcon} from "@heroicons/react/20/solid";

const NAV_MENU = [
  {
    name: "Home",
    icon: RectangleStackIcon,
  },
  {
    name: "Resume/CV",
    icon: DocumentIcon,
    href: RESUME_LINK,
  },
  // {
  //   name: "Docs",
  //   icon: CommandLineIcon,
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  // },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Typography as={'a'} href={'/'} style={{cursor: 'pointer'}} color="blue-gray" className="text-lg font-bold">
          &lt;Eriel Mejias/&gt;
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <a href={LINKED_IN_LINK}  target="_blank" rel="noopener noreferrer">
            <img
              className="h-8 w-full object-cover object-center"
              src="/logos/linkedin.png"
              alt="LinkedIn Logo"
            />
          </a>
          <a href={'https://github.com/erielmejias99'} target="_blank" rel="noopener noreferrer">
            <img
              className="h-9 w-full object-cover object-center"
              src="/logos/github.webp"
              alt="GitHub Logo"
            />
          </a>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <img
              className="h-20 w-full object-cover object-center"
              src="/logos/linkedin.png"
              alt="LinkedIn Logo"
            />
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
