import Image from "next/image";

type Members = {
  name: string;
  role: string;
  image: string;
  instagram: string;
  linkedin: string;
};

export default function Card({
  name,
  role,
  image,
  instagram,
  linkedin,
}: Members) {
  return (
    <div className="w-[22rem] border border-[#FFFFFF14] rounded-xs p-4 mx-4 my-10 grow max-w-[28rem]">
      <div className="w-[7rem] h-[7rem] border-[#FFFFFF] relative">
        <Image src={image} alt={name} fill />
      </div>

      <h2 className="block text-md font-semibold mb-2 font-montserrat mt-4">
        {name}
      </h2>
      <p className="text-xs text-gray-600 -mt-2 mb-3">{role}</p>

      <div className="inline w-[7rem] h-[2rem] text-sm font-thin border border-[#444444] bg-[#FFFFFF14] rounded-xs py-2 px-7 mr-3 cursor-pointer hover:bg-[#4BAF0A] hover:text-white transition-colors duration-300">
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
      <div className="inline w-[7rem] h-[2rem] text-sm font-thin border border-[#444444] bg-[#FFFFFF14] rounded-xs py-2 px-7 cursor-pointer hover:bg-[#4BAF0A] hover:text-white transition-colors duration-300">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
