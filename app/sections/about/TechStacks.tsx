"use client";

import tech_stacks from "../../../data/tech_stacks.json";
import Image from "next/image";
import SubTitle from "../../components/SubTitle";
import {useTranslations} from 'next-intl';

const TechStacks = () => {
  const t = useTranslations();

  return (
    <section className="mb-20">
      <SubTitle subTitle={t("about.techStack.title")} />
      <ul className="flex gap-10">
        {tech_stacks.map((ts) => {
          return (
            <li key={ts.id}>
              <Image src={ts.img} alt={ts.tech_name} width={80} height={80} />
              <p className="text-xl text-center font-bold text-[--primary-color)]">
                {ts.tech_name}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TechStacks;
