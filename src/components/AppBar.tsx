import "@fontsource/montserrat"; 
import "@fontsource/montserrat/400.css"; 
import "@fontsource/montserrat/400-italic.css";
import { ModeToggle } from "./mode-toggle";

export default function AppBar() {
  const links = ["About", "Projects", "Skills", "Socials"];
  return (
    <>
      <nav className="justify-centerpy-2 flex w-full select-none pt-6 md:px-28 md:pb-2">
        <div className="container flex flex-col items-center justify-between md:flex-row ">
          <div className="text-3xl font-semibold">
            <a href="/">MK .</a>
          </div>
          <div className="nav-links flex gap-x-8 text-lg md:text-lg ">
            {links.map((link) => (
              <span
                key={link}
                className="cursor-pointer"
                onClick={() => {
                  document
                    .getElementById(link)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span>
            ))}
          </div>
          <ModeToggle />
        </div>
      </nav>
    </>
  );
}
