type SubTitleType = {
  subTitle: string;
};

const SubTitle = (props: SubTitleType) => {
  return (
    <div className="bg-[--primary-color] inline-block px-4 mb-8 subTitle">
      <h2 className="text-2xl leading-[1.8rem] text-[--grey-color] font-bold">{props.subTitle}</h2>
    </div>
  );
};

export default SubTitle;
