interface ButtonInterface {
  content: string;
  handleClick?: () => void;
}

interface LinkButtonInterface extends ButtonInterface {
  linkHref?: string;
  download?: boolean;
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
      <button
        onClick={handleClick}
        className="font-bold px-6 py-2 border-2 border-[--primary-color] rounded-sm bg-[--primary-color] text-[--grey-color]"
      >
        {content}
      </button>
    </>
  );
};

export const LinkOutlineButton = ({
  content,
  handleClick,
  linkHref
}: LinkButtonInterface) => {
  return (
    <>
      <a
        href={linkHref}
        onClick={handleClick}
        className="font-bold px-6 py-2 border-2 border-[--primary-color] rounded-sm"
      >
        {content}
      </a>
    </>
  );
};

export const LinkSolidButton = ({
  content,
  linkHref,
  ...props
}: LinkButtonInterface) => {
  return (
    <>
      <a
        href={linkHref}
        className="font-bold px-6 py-2 border-2 border-[--primary-color] rounded-sm bg-[--primary-color] text-[--grey-color]"
        {...props}
      >
        {content}
      </a>
    </>
  );
};
