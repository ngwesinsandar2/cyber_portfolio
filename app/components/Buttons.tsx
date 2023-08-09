interface ButtonInterface {
  content: string,
}

export const OutlineButton = ({content}: ButtonInterface) => {
  return ( 
    <>
      <button className="font-bold px-6 py-2 border-2 border-[var(--primary-color)] rounded-sm">{content}</button>
    </>
   );
}

export const SolidButton = ({content}: ButtonInterface) => {
  return ( 
    <>
      <button className="font-bold px-6 py-2 border-2 border-[var(--primary-color)] rounded-sm bg-[var(--primary-color)] text-[var(--grey-color)]">{content}</button>
    </>
   );
}