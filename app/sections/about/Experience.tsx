import SubTitle from "@/app/components/SubTitle";
import experiences from "../../../data/experiences.json";
import { useTranslations } from "next-intl";

const Experience = () => {
  const t = useTranslations();

  return (
    <section className="pb-6">
      <SubTitle subTitle={t("about.experience.title")} />
      <div className="grid grid-cols-3 gap-6 text-[--grey-color]">
        {experiences.map((experience) => {
          return (
            <div key={experience.id} className="flex flex-col justify-center bg-[--primary-color] w-full h-[100px] px-4 subTitle">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold">
                {experience.company_name}
              </h3>
              <p className="font-semibold">[{experience.start_year} -{" "}{experience.end_year}]</p>
              </div>
              <p className="font-semibold">{experience.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
