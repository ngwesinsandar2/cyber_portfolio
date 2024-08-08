'use client';

import tech_stacks from '../../../data/tech_stacks.json';
import Image from 'next/image';
import SubTitle from '../../components/SubTitle';
import { useTranslations } from 'next-intl';

const TechStacks = () => {
  const t = useTranslations();

  return (
    <section className="pb-6">
      <SubTitle subTitle={t('about.techStack.title')} />
      <ul className="flex gap-10">
        {tech_stacks.map((ts) => {
          return (
            <li key={ts.id}>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={ts.img}
                  alt={ts.tech_name}
                  width={40}
                  height={40}
                />
                <p className="text-center font-bold text-[--primary-color)]">
                  {ts.tech_name}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TechStacks;
