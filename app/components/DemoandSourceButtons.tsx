import Image from "next/image";
import { ProjectInterface } from "../interfaces/ProjectInterface";
import sourceCodeBorderImg from "@/public/assets/images/projects/sourceCodeBorder.svg";

const DemoandSourceButtons = ({
  projectDetails,
  bgColor = "bg-black",
  textColor = "text-[--primary-color]",
  beforeBgColor = "before:bg-[--primary-color]",
}: {
  projectDetails: ProjectInterface;
  bgColor?: string;
  textColor?: string;
  beforeBgColor?: string;
}) => {
  return (
    <div className="flex gap-4">
      <a
        target="_blank"
        href={projectDetails.demo_link}
        className={`block text-center font-bold ${bgColor} ${textColor} w-[130px] h-[50px] py-3 subTitle relative before:block before:w-[20px] before:h-[2px] ${beforeBgColor} before:absolute before:top-1/2`}
      >
        see demo
      </a>
      <a
        target="_blank"
        href={projectDetails.source_code_link}
        className={`cyberCard block text-center w-[130px] h-[50px] relative`}
      >
        <Image
          src={sourceCodeBorderImg}
          alt={"Source Code Border"}
          width={130}
          height={50}
        />
        <p
          className={`font-bold w-full absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          source code
        </p>
      </a>
    </div>
  );
};

export default DemoandSourceButtons;
