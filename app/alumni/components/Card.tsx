import { FaInstagram, FaLinkedin } from 'react-icons/fa6';

export default function Card() {
  return (
    <div className="w-2xs border border-[#FFFFFF14] rounded-xs p-4 m-4 ml-15">
      <div className="w-[7rem] h-[7rem] bg-[#42960a]"></div>

      <h2 className="block text-md font-semibold mb-2 font-montserrat mt-4">
        Bishal Saud
      </h2>
      <p className="text-xs text-gray-600 -mt-2 mb-3">Steering Leader</p>

      <div className="inline w-[7rem] h-[2rem] text-sm font-thin border border-[#444444] bg-[#FFFFFF14] rounded-xs pt-2 pb-2 pl-7 pr-7 mr-3 cursor-pointer hover:bg-[#4BAF0A] hover:text-white transition-colors duration-300">
    Instagram
      </div>
      <div className="inline w-[7rem] h-[2rem] text-sm font-thin border border-[#444444] bg-[#FFFFFF14] rounded-xs pt-2 pb-2 pl-7 pr-7 cursor-pointer hover:bg-[#4BAF0A] hover:text-white transition-colors duration-300">
    LinkedIn
      </div>
    </div>
  );
}
