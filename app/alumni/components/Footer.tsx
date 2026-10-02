import Image from "next/image";

export default function Footer() {
  return (
    <>
      <h1 className="text-8xl font-fraunces font-light opacity-10 mx-8 my-25">
        Leading Through Visuals.
      </h1>

      <div className="w-xs opacity-70 font-montserrat text-sm mx-8 inline-block float-left mr-50">
        <Image src="/logo.png" alt="UI Visuals Logo" width={80} height={80} />
        <p>
          A creative community at Herald College Kathmandu, under Herald
          Devcorps where design-minded students come together to learn, and
          build through the power of visuals.
        </p>
      </div>

      <div className="flex flex-wrap">
        <div className="font-montserrat text-xs">
          <h3 className="opacity-50">Explore</h3>
          <ul className="mt-5 text-3xs">
            <li className="my-4">
              <a
                href=""
                className="hover:text-[#4BAF0A] duration-500 ease-in-out"
              >
                Story
              </a>
            </li>
            <li className="my-4">
              <a
                href=""
                className="hover:text-[#4BAF0A] duration-500 ease-in-out"
              >
                Blogs
              </a>
            </li>
            <li className="my-4">
              <a
                href=""
                className="hover:text-[#4BAF0A] duration-500 ease-in-out"
              >
                Initiatives
              </a>
            </li>
          </ul>
        </div>

        <div className="font-montserrat text-xs ml-30">
          <h3 className="opacity-50 text-3xs">Community</h3>
          <ul className="mt-5 ">
            <li className="my-4">
              <a
                href=""
                className="hover:text-[#4BAF0A] duration-500 ease-in-out"
              >
                People
              </a>
            </li>
            <li className="my-4">
              <a
                href=""
                className="hover:text-[#4BAF0A] duration-500 ease-in-out"
              >
                Alumni
              </a>
            </li>
          </ul>
        </div>

        <div className="font-montserrat text-xs ml-30">
          <h3 className="opacity-50 text-3xs">Connect</h3>
          <ul className="mt-5 ">
            <li className="my-4 ">
              <a
                href=""
                className="hover:text-[#4BAF0A] duration-500 ease-in-out"
              >
                Instagram
              </a>
            </li>
            <li className="my-4">
              <a
                href=""
                className="hover:text-[#4BAF0A] duration-500 ease-in-out"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full my-10 justify-items-stretch inline-block">
        <hr className="my-10 opacity-10"></hr>
        <p className="text-xs opacity-50 inline-block">
          &copy; {new Date().getFullYear()} UI Visuals. All rights reserved.
        </p>
        <p className="text-xs opacity-50 float-right">
          Built by Students of Herald College Kathmandu, Members of UI Visuals.
        </p>
      </div>
    </>
  );
}
