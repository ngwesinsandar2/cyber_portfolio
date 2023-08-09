import Socials from "./Socials";

const Footer = ({footer_custom_classes = ""}: {footer_custom_classes?: String}) => {
  return (
    <>
      <footer className={`${footer_custom_classes} border-t py-2`}>
        <div className="flex justify-between items-center">
          <div>
            <h6 className="text-sm text-gray-400">All right serves - 2023 by Ngwe Sin Sandar</h6>
          </div>
          <Socials />
        </div>
      </footer>
    </>
  );
}

export default Footer;