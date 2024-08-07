"use client";

import {useTranslations} from 'next-intl';
import Footer from "../components/Footer";
import Myself from "../sections/about/Myself";
import TechStacks from "../sections/about/TechStacks";
import Experience from "../sections/about/Experience";

const About = () => {
  const t = useTranslations();

  return (
    <>
      <main className="pt-16">
        <h1 className="text-5xl font-bold mb-6">
          <span className="uppercase">{t("about.title")}</span>{" "}
          <span className="text-2xl text-[--primary-color]">
            [ {t("about.subTitle")} ]
          </span>
        </h1>
        <Myself />
        <TechStacks />
        <Experience />
      </main>

      <Footer />
    </>
  );
};

export default About;
