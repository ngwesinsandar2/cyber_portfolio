"use client";

import Footer from "../components/Footer";
import projects from "../../data/projects.json";
import Image from "next/image";
import { OutlineButton, SolidButton } from "../components/Buttons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import firstLineImg from "../../public/assets/images/projects/firstline.svg";
import secondLineImg from "../../public/assets/images/projects/secondline.svg";
import thirdLineImg from "../../public/assets/images/projects/thirdline.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Projects = () => {
  const router = useRouter();

  // const moreDetails = (id: number) => {
  //   router.push(`/projects/${id}`);
  // };

  return (
    <>
      <main className="pt-16">
        <h1 className="text-5xl font-bold mb-6">
          <span className="uppercase">Projects</span>{" "}
          <span className="text-2xl text-[var(--primary-color)]">
            [ My_Proud_Children ]
          </span>
        </h1>
        <section className=" mb-10">
          <ul className="flex flex-col gap-10">
            {projects.map((project) => {
              return (
                <li
                  key={project.id}
                  className="flex h-[400px] gap-6 px-6 py-4 bg-gradient-to-b from-[#292B38] to-[#0C0C12] rounded-sm relative"
                >
                  <Image
                    src={project.img}
                    alt={project.project_name}
                    width={400}
                    height={400}
                    className="object-cover absolute right-10"
                  />
                  <div className="absolute left-10 bottom-10 z-10">
                    <ul className="flex gap-6 mb-4">
                      {project?.tech_stacks.map((tech_stack) => {
                        return (
                          <TooltipProvider delayDuration={200}>
                            <Tooltip open>
                              <TooltipTrigger asChild>
                                <li>
                                  <Image
                                    src={tech_stack.tech_logo}
                                    alt={tech_stack.tech_name}
                                    width={30}
                                    height={30}
                                    className="object-cover"
                                  />
                                </li>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{tech_stack.tech_name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        );
                      })}
                    </ul>
                    <div className="bg-[--primary-color] w-[70%] py-6 px-8 subTitle text-black">
                      <h3 className="text-3xl font-bold">
                        {project.project_name}
                      </h3>
                      <p className="font-semibold">{project?.project_des}</p>
                      <div className="flex justify-end">
                        <Link
                          href={`/projects/${project?.id}`}
                          className="flex items-center"
                        >
                          <p className="font-bold underline">More Details</p>
                          <IoIosArrowForward size={22} />
                        </Link>
                      </div>
                    </div>
                    <div className="absolute left-20 -bottom-5 -z-[1]">
                      <Image
                        src={firstLineImg}
                        alt={"First Line"}
                        width={100}
                        height={100}
                        className=""
                      />
                    </div>
                    <div className="absolute right-0 bottom-8 -z-[1]">
                      <Image
                        src={secondLineImg}
                        alt={"Second Line"}
                        width={120}
                        height={120}
                        className=""
                      />
                    </div>
                    <div className="absolute right-0 -bottom-5 -z-[1]">
                      <Image
                        src={thirdLineImg}
                        alt={"Third Line"}
                        width={300}
                        height={300}
                        className=""
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Projects;
