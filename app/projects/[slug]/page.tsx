"use client";

import Footer from "@/app/components/Footer";
import projects from "../../../data/projects.json";
import { ProjectType } from "@/app/types/ProjectType";
import { LinkOutlineButton, LinkSolidButton } from "@/app/components/Buttons";

const ProjectDetails = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const projectDetails: ProjectType = projects.find(
    (project) => project.id === parseInt(slug)
  )!;

  return (
    <>
      <main className="pt-16">
        <h1 className="text-5xl font-bold mb-6">
          <span className="uppercase">{projectDetails?.project_name}</span>{" "}
          {/* <span className="text-2xl text-[var(--primary-color)]">
            [ My_Proud_Children ]
          </span> */}
        </h1>
        <section className=" mb-10">
          <div className="flex gap-4">
          <LinkSolidButton content="See Demo" linkHref={projectDetails?.demo_link} />
          <LinkOutlineButton content="Source Code" linkHref={projectDetails?.source_code_link} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetails;
