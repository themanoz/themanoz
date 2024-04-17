import maroon from "@/assets/maroon.png";
import { CardBody, CardContainer, CardItem } from "@/components/Card";
// import MotionDiv from "@/components/motion-div";

export default function Projects() {
  return (
    <section>
      <h1 className="text-center text-3xl">Projects</h1>
      <div>
        <div>
          <CardContainer>
            <CardBody>
              <CardItem>
                <img
                  src={maroon}
                  alt="photo"
                  className="w-full h-full rounded-lg"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
          <div className="px-12 space-y-3">
            <h1 className="text-xl font-semibold">Maroon Marketing Agency</h1>
            <p className="w-[400px] text-slate-400">
              Maroon Marketing Agency is a digital marketing agency that offers
              a suite of marketing services to help brands grow their business.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center px-12 py-10">
        <CardContainer>
        <img src={maroon} alt="photo" className="w-5/12 rounded-lg" />
        </CardContainer>
        <div className="px-12 space-y-3">
          <h1 className="text-xl font-semibold">Maroon Marketing Agency</h1>
          <p className="w-[400px] text-slate-400">
            Maroon Marketing Agency is a digital marketing agency that offers a
            suite of marketing services to help brands grow their business.
          </p>
        </div>
      </div> */}
    </section>
  );
}
