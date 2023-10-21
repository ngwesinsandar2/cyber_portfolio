"use client";

import Footer from "../components/Footer";
import about_facts from "../../data/about_facts.json";
import tech_stacks from "../../data/tech_stacks.json";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import SubTitle from "../components/SubTitle";
import TimeLine from "../components/TimeLine";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <main className="pt-16">
        <h1 className="text-5xl font-bold mb-6">
          <span className="uppercase">{t("about.title")}</span>{" "}
          <span className="text-2xl text-[--primary-color]">
            [ {t("about.subTitle")} ]
          </span>
        </h1>
        <section className="mb-20">
          <SubTitle subTitle={t("about.myself.title")} />
          {/* <h2 className="text-4xl font-bold mb-6">{t("about.myself.title")}</h2> */}

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,_1rem)_1fr] gap-10 justify-center ">
            <div className="">
              <ul className="flex flex-col gap-6">
                {about_facts.map((af) => {
                  return (
                    <li key={af.id}>
                      <p className="text-xl">
                        <span className="uppercase">{af.fact_name} -&gt; </span>
                        <span className="font-bold text-[--primary-color]">
                          {af.fact_content}
                        </span>
                        <a
                          href="mailto:ngwesinsandar112@gmail.com"
                          className="font-bold text-[--primary-color]"
                        >
                          {af.fact_content2}
                        </a>
                        <a
                          href="tel:09757978569"
                          className="font-bold text-[--primary-color]"
                        >
                          {af.fact_content3}
                        </a>
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="w-[2px] h-full bg-gray-400"></div>

            <div className="">
              <p>
                My name is{" "}
                <span className="text-[--primary-color]">Ngwe Sin Sandar</span>{" "}
                and I&apos;m a front-end developer from Myanmar who is
                comfortable working with React and responsive web design to
                deliver exceptional customer experience. I&apos;m 18years old
                and I&apos;ve finished matriculation. I&apos;m available for
                freelance.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <SubTitle subTitle={t("about.techStack.title")} />
          <ul className="flex gap-10">
            {tech_stacks.map((ts) => {
              return (
                <li key={ts.id}>
                  <Image
                    src={ts.img}
                    alt={ts.tech_name}
                    width={80}
                    height={80}
                  />
                  <p className="text-xl text-center font-bold text-[--primary-color)]">
                    {ts.tech_name}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="pb-6">
          <SubTitle subTitle={t("about.experience.title")} />
          {/* <TimeLine /> */}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
