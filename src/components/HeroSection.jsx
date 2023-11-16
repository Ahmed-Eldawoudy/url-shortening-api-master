import { projectImages } from "../images/projectImages";
//
export default function HeroSection() {
  return (
    <div className="container flex flex-col-reverse items-center justify-center gap-0 px-3 py-8 max-sm:gap-12 md:flex-row md:py-24">
      <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
        <h1 className="text-5xl font-bold text-darkViolet md:text-6xl">
          More than just shorter links
        </h1>
        <p className="w-9/12 text-gray-200 max-md:mx-auto">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn-cta rounded-full text-lg">Get Started</button>
      </div>
      <div className="w-full md:w-1/2">
        <img src={projectImages.workingIllust} alt="working-Illustration" />
      </div>
    </div>
  );
}
