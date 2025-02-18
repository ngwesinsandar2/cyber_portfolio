'use client';

import DemoandSourceButtons from '@/app/components/DemoandSourceButtons';
import Footer from '@/app/components/Footer';
import { ProjectInterface } from '@/app/interfaces/ProjectInterface';
import bgLineImg from '@/public/assets/images/projects/bgLine.svg';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@radix-ui/react-tooltip';
import Image from 'next/image';
import projects from '../../../../data/projects.json';

const ProjectDetails = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const projectDetails: ProjectInterface = projects.find(
    (project) => project.id === parseInt(slug)
  )!;

  return (
    <div className="flex flex-col justify-between h-svh">
      <main className="py-16">
        <section className="relative bg-[--primary-color] text-[--grey-color] px-6 md:px-16 pt-6 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
            <div>
              <h1 className="text-5xl font-bold mb-4 uppercase">
                {projectDetails?.project_name}
              </h1>
              <p className="font-semibold mb-10">
                {projectDetails?.project_des}
              </p>
              <ul className="flex gap-10 mb-10">
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
              alt={'Source Code Border'}
              width={130}
              height={50}
              className="w-full h-full"
            />
          </div>
        </section>
        <section>
          <div className="px-6 md:px-16 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="col-span-2">
                <div className="mb-6">
                  <h3 className="text-[--primary-color] text-2xl font-semibold mb-4">
                    Features
                  </h3>
                  <ul className="list-disc pl-6">
                    {Object.values(projectDetails.features).map((feature) => {
                      return <li key={feature}>{feature}</li>;
                    })}
                  </ul>
                </div>
                <p>{projectDetails.long_des}</p>
              </div>
              {/* <div>
                <Image
                  src={projectDetails.img}
                  alt={'Project Image'}
                  width={2000}
                  height={2000}
                  className="w-full h-full"
                />
              </div> */}
            </div>
          </div>
        </section>
        {/* <section>
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
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
