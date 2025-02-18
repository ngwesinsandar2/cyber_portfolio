import SubTitle from '@/app/components/SubTitle';
import experiences from '../../../data/experiences.json';
import { useTranslations } from 'next-intl';

const Experience = () => {
  const t = useTranslations();

  return (
    <section className="pb-6">
      <SubTitle subTitle={t('about.experience.title')} />
      <div className="flex flex-col gap-10">
        {experiences.map((experience) => {
          return (
            <div
              key={experience.id}
              className="border-b border-b-[--primary-color] pb-4"
            >
              <div className="mb-2 bg-[--primary-color] text-[--grey-color] inline-block px-2 py-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold inline-block">
                    {experience.company_name}
                  </h3>
                  <p className="font-semibold inline-block">
                    [{experience.start_year} - {experience.end_year}]
                  </p>
                </div>
              </div>
              <ul className='list-disc pl-5'>
                {Object.values(experience.description_list).map((val) => {
                  return <li key={val} className='text-white font-semibold'>{val}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
