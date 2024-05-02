import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="border-t w-full px-6 lg:px-20 py-4 text-zinc-500">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between w-full">
        <div className="flex flex-row items-center justify-between space-x-4">
          <Button size={"sm"} variant={"link"} asChild>
            <a href={"https://github.com/themanoz"} target="_blank">
              GitHub
            </a>
          </Button>
          <Button size={"sm"} variant={"link"} asChild>
            <a href={"https://twitter.com/the_manoz"} target="_blank">
              Twitter/X
            </a>
          </Button>
        </div>

        <div className="text-sm">
          © 2024 Manoj Kumar. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;