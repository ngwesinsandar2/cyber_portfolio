import Footer from "../components/Footer";
import projects from "../../data/projects.json";
import Image from "next/image";
import { OutlineButton, SolidButton } from "../components/Buttons";

const Projects = () => {
  return (
    <>
      <main className="pt-16">
        <h1 className="text-5xl font-bold mb-6"><span className="uppercase">Projects</span> <span className="text-2xl text-[var(--primary-color)]">[ My_Proud_Children ]</span></h1>
        <section className=" mb-10">
          <ul className="flex flex-col gap-10">
            {
              projects.map(project => {
                return (
                  <li key={project.id} className="flex gap-6 px-6 py-4 border border-[var(--primary-color)] rounded-sm">
                    <Image
                      src={project.img}
                      alt={project.project_name}
                      width={500}
                      height={500}
                      className="rounded-sm object-cover"
                    />
                    <div className="flex flex-col justify-between">
                      <h3 className="text-2xl text-[var(--primary-color)]">{project.project_name}</h3>
                      <p>{project.project_des}</p>
                      <div className="flex gap-6">
                        <OutlineButton content="Source Code" />
                        <SolidButton content="See Demo" />
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Projects;