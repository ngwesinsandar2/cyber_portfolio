"use client";

import Footer from "@/app/components/Footer";
import projects from "../../../../data/projects.json";
import { ProjectInterface } from "@/app/interfaces/ProjectInterface";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import Image from "next/image";
import sourceCodeBorderImg from "@/public/assets/images/projects/sourceCodeBorder.svg";
import bgLineImg from "@/public/assets/images/projects/bgLine.svg";
import myMusicUIImg from "@/public/assets/images/projects/myMusicUI.png";
import ProjectCard from "@/app/components/Cards/ProjectCard";
import DemoandSourceButtons from "@/app/components/DemoandSourceButtons";

const ProjectDetails = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const projectDetails: ProjectInterface = projects.find(
    (project) => project.id === parseInt(slug)
  )!;

  return (
    <>
      <main className="py-16">
        <section className="relative bg-[--primary-color] text-[--grey-color] px-16 pt-16">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-5xl font-bold mb-4 uppercase">
                {projectDetails?.project_name}
              </h1>
              <p className="font-semibold mb-10">
                {projectDetails?.project_des}
              </p>
              <ul className="flex gap-6 mb-10">
                {projectDetails?.tech_stacks.map((tech_stack) => {
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
                          <p className="font-semibold">
                            {tech_stack.tech_name}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </ul>
              {/* <div className="flex gap-4">
                <a
                  target="_blank"
                  href={projectDetails.demo_link}
                  className="block text-center font-bold bg-black text-[--primary-color] w-[130px] h-[50px] py-3 subTitle relative before:block before:w-[20px] before:h-[2px] before:bg-[--primary-color] before:absolute before:top-1/2"
                >
                  see demo
                </a>
                <a
                  target="_blank"
                  href={projectDetails.source_code_link}
                  className="block text-center w-[130px] h-[50px] relative"
                >
                  <Image
                    src={sourceCodeBorderImg}
                    alt={"Source Code Border"}
                    width={130}
                    height={50}
                    className="object-cover"
                  />
                  <p className="font-bold w-full absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                    source code
                  </p>
                </a>
              </div> */}
              <DemoandSourceButtons projectDetails={projectDetails} />
            </div>
            <div className="justify-self-end">
              <Image
                src={projectDetails.img}
                alt={projectDetails.project_name}
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <Image
              src={bgLineImg}
              alt={"Source Code Border"}
              width={130}
              height={50}
              className="w-full h-full"
            />
          </div>
        </section>
        <section>
          <div className="px-16 pt-16">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <div className="mb-6">
                  <h3 className="text-[--primary-color] text-2xl font-semibold mb-4">
                    Features
                  </h3>
                  <ul className="list-disc pl-6">
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas laborum illum ea, modi reprehenderit vel repellat
                  beatae voluptatum? Mollitia sapiente reiciendis distinctio
                  quae consectetur dolor sit fugiat ratione ducimus adipisci!
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque maxime eius dicta illum et eos adipisci quidem libero?
                  Ut aspernatur autem illo dolorum modi rerum id facilis rem!
                  Cupiditate, animi. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Molestias sint laudantium officiis ullam
                  illum alias quod quasi nemo at ad? Corrupti repellat,
                  <br />
                  <br />
                  voluptate iste ea suscipit aperiam soluta aliquid nihil? Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
                  doloremque. Ea maxime itaque nobis, repellat officia magni
                  enim iusto? Deserunt autem aliquid ab veritatis! Ut
                  perspiciatis id unde praesentium! Nobis. Lorem, ipsum dolor
                  sit amet consectetur adipisicing elit. Itaque aliquam suscipit
                  et aspernatur. Enim magnam accusamus quasi delectus ipsa
                  eveniet architecto totam libero non possimus, eos consequuntur
                  modi hic quibusdam! Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Repudiandae fugiat, eaque veniam ipsum
                  facilis vero culpa soluta, aliquam eius corporis debitis amet
                  delectus dolorum doloribus blanditiis quod molestias veritatis
                  error. Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Dolorum ratione numquam quia et animi vero, aliquid at
                  molestias repudiandae ad rem culpa eos sint optio sapiente
                  laborum harum sequi dignissimos?
                </p>
              </div>
              <div>
                <h3></h3>
                <div>
                  <Image
                    src={myMusicUIImg}
                    alt={"Project Image"}
                    width={2000}
                    height={2000}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="px-16 pt-16">
            <h3 className="text-center text-[--primary-color] text-2xl font-semibold mb-4">
              Other Projects
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="">
                <ProjectCard projectDetails={projectDetails} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetails;
