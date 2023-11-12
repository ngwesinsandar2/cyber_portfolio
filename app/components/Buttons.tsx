interface ButtonInterface {
  content: string;
  handleClick?: () => void;
}

export const OutlineButton = ({ content, handleClick }: ButtonInterface) => {
  return (
    <>
      <button
        onClick={handleClick}
        className="font-bold px-6 py-2 border-2 border-[--primary-color] rounded-sm"
      >
        {content}
      </button>
    </>
  );
};

export const SolidButton = ({ content, handleClick }: ButtonInterface) => {
  return (
    <>
      <button onClick={handleClick} className="font-bold px-6 py-2 border-2 border-[--primary-color] rounded-sm bg-[--primary-color] text-[--grey-color]">
        {content}
      </button>
    </>
  );
};
