import { ProjectInterface } from "@/app/interfaces/ProjectInterface";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const ProjectCard = ({
  projectDetails,
}: {
  projectDetails: ProjectInterface;
}) => {
  return (
    <div className="">
      <div className="flex justify-center pt-6 px-6 w-full bg-gradient-to-b from-[#292B38] to-[#0C0C12]">
        <Image
          src={projectDetails.img}
          alt={projectDetails.project_name}
          width={350}
          height={200}
          className=" w-[200px] h-full"
        />
      </div>
      <div className="bg-[--primary-color] p-6 cyberCard text-[--grey-color]">
        <h3 className="text-2xl font-bold">{projectDetails.project_name}</h3>
        <p className="font-semibold">{projectDetails.project_des}</p>
        <div className="flex justify-end">
          <Link
            href={`/projects/${projectDetails.id}`}
            className="flex items-center"
          >
            <p className="font-bold underline">More Details</p>
            <IoIosArrowForward size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
