import Card from "./components/Card";
import Footer from "./components/Footer";
import "./styles.css"

export default function Alumni() {
  return (
    <>
      <h1 className="text-4xl font-light font-fraunces top-text mt-10 ml-10 mb-5 antialiased align-[stretch] ">
        They built this community.<br></br>Now they&apos;re
        <span className="text-[#4BAF0A] italic font-fraunces text-5xl [font-variation-settings:'WONK'_1,'opsz'_72]"> building the industry</span>
      </h1>
      <p className="text-[0.7rem] font-montserrat ml-10 text-[#FFFFFF80]">
        Every graduate of UI Visuals, wherever they&apos;ve landed. Reach out on{" "}
        <br></br>LinkedIn or Instagram if you&apos;d like to connect.
      </p>
        <div className="flex flex-wrap">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>

        <div>
            <Footer/>
        </div>
    </>
  );
}
