'use client';

import about_facts from '../../../data/about_facts.json';
import { useTranslations } from 'next-intl';
import SubTitle from '../../components/SubTitle';
import { useMemo } from 'react';
import { AboutFactInterface } from '@/app/interfaces/AboutInterface';

// {
//   "id": 3,
//   "fact_name": "Email",
//   "fact_content": "ngwesinsandandar112@gmail.com",
//   "fact_value": "ngwesinsandandar112@gmail.com",
//   "fact_type": "email"
// },
// {
//   "id": 4,
//   "fact_name": "Phone No",
//   "fact_content": "09757-978-569",
//   "fact_value": "09757978569",
//   "fact_type": "phno"
// }

const FactItem = ({ af }: { af: AboutFactInterface }) => {
  const aboutfactcontent = useMemo(() => {
    switch (af.fact_type) {
      case 'text':
        return (
          <p className="font-bold text-[--primary-color]">{af.fact_content}</p>
        );
      case 'email':
        return (
          <a
            href={`mailto:${af.fact_value}`}
            className="font-bold text-[--primary-color] underline"
          >
            {af.fact_content}
          </a>
        );
      case 'phno':
        return (
          <a
            href={`tel:${af.fact_value}`}
            className="font-bold text-[--primary-color] underline"
          >
            {af.fact_content}
          </a>
        );

      default:
        <></>;
        break;
    }
  }, [af]);

  return (
    <li key={af.id}>
      <div className="text-xl grid grid-cols-12">
        <p>{af.fact_name}</p>
        <p className="col-span-5 text-right">-&gt;</p>
        <div className="col-span-6 text-right">{aboutfactcontent}</div>
      </div>
    </li>
  );
};

const Myself = () => {
  const t = useTranslations();

  return (
    <section className="mb-16">
      <SubTitle subTitle={t('about.myself.title')} />

      <div className="">
        <ul className="flex flex-col gap-6">
          {about_facts.map((af) => {
            return <FactItem af={af} />;
          })}
        </ul>

        <div className="w-full h-[1px] bg-gray-400 my-4"></div>

        <div className="flex flex-col gap-2">
          <p>
            Passionate and dedicated programmer with 3 years of experience in
            frontend development.
          </p>
          <p>
            I have experience in frontend development and did some experiments
            in backend development, allowing me to create comprehensive and
            seamless applications. My expertise includes working with
            JavaScript, as well as frameworks like React and Vue.
          </p>
          <p>
            One of the aspects I enjoy most about programming is
            problem-solving. I thrive on tackling complex challenges and finding
            creative solutions that improve functionality and user experience.
            My analytical mindset and attention to detail enable me to identify
            and resolve issues quickly, ensuring that the software I develop is
            robust and reliable.
          </p>
          <p>
            In addition to my technical skills, I am a strong communicator and
            collaborator. I work well in team environments, contributing my
            expertise and learning from others to achieve common goals. I
            believe in continuous learning and stay updated with the latest
            industry trends and advancements to keep my skills sharp and
            relevant.
          </p>
          <p>
            Outside of work, I am an avid tech enthusiast, always exploring new
            tools and technologies to expand my knowledge. I also enjoy
            participating in coding competitions and hackathons, where I can
            challenge myself and connect with other like-minded individuals. (I
            haven't been participated in any of hackathons but I have
            participated in startup competitions.)
          </p>
          <p>
            As a programmer, my ultimate goal is to leverage technology to
            create meaningful and impactful solutions that drive progress and
            innovation. I am excited about the future of programming and look
            forward to contributing to the ever-evolving tech landscape.
          </p>
          <p className="text-[var(--primary-color)]">
            *I'm very flexsible with tech stacks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Myself;
