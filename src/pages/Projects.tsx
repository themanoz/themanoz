import maroon from "@/assets/maroon.png";
import { CardContainer } from "@/components/Card";

export default function Projects() {
  return (
    <section>
      <h1 className="text-center text-3xl">Projects</h1>
      <div>
        <div className="flex flex-col lg:flex-row justify-center">
          <CardContainer className="border border-slate-200 rounded-lg shadow-lg dark:border-none">
            <div>
              <img
                src={maroon}
                alt="photo"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              />
            </div>
          </CardContainer>
          <div className="px-0 lg:px-12 flex justify-center pt-0 lg:pt-24">
            <div className="space-y-3">
              <h1 className="text-xl font-semibold">Maroon Marketing Agency</h1>
              <p className="w-[425px] text-slate-400">
                Maroon Marketing Agency is a digital marketing agency that
                offers a suite of marketing services to help brands grow their
                business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
