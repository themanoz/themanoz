import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Contact = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:manojkumarbonala3@gmail.com'; 
  };
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-48 min-h-full min-b" id="contact">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Contact
            </h2>
            <p className="mx-auto max-w-[650px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="space-y-4 items-center">
              <Button className="bg-white w-full text-black md:full lg:w-auto mt-4 md:mt-2" variant={"ghost"} onClick={handleContactClick}>
                {" "}
                Contact
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
