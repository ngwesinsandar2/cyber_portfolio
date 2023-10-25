"use client";

import about_facts from "../../../data/about_facts.json";
import { useTranslation } from "react-i18next";
import SubTitle from "../../components/SubTitle";

const Myself = () => {
  const { t } = useTranslation();

  return (
    <section className="mb-20">
      <SubTitle subTitle={t("about.myself.title")} />

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
            <span className="text-[--primary-color]">Ngwe Sin Sandar</span> and
            I&apos;m a front-end developer from Myanmar who is comfortable
            working with React and responsive web design to deliver exceptional
            customer experience. I&apos;m 18years old and I&apos;ve finished
            matriculation. I&apos;m available for freelance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Myself;
