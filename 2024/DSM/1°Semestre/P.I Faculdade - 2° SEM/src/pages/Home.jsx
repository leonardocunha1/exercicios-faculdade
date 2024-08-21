import Herosvg from "@/ui/Herosvg";
import ImageHero from "../../public/images/burgers/bg-hero.png";

function Home() {
  return (
    <>
      <section className="relative h-full bg-stone-900 px-4 lg:px-14">
        <div className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center gap-5 lg:flex-row lg:justify-around">
          <div className="lg:-mt-20">
            <h1
              style={{ fontFamily: "Calistoga" }}
              className="-mt-10 mb-5 flex flex-col text-center text-6xl font-bold text-primary-50 sm:mt-0 lg:text-start lg:text-[100px] xl:text-[120px]"
            >
              Diiner&apos;s <span className="">Burgers</span>
            </h1>
            <h3 className="text-center text-2xl font-semibold text-primary-500 lg:text-start">
              Soboreie o inexplicável
            </h3>
          </div>
          <img
            src={ImageHero}
            alt=""
            className="h-80 sm:h-96 lg:h-[500px] xl:h-[550px]"
          />
        </div>
        <Herosvg />
      </section>
    </>
  );
}

export default Home;
