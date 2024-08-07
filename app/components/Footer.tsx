import Socials from "./Socials";
import {useTranslations} from 'next-intl';

const Footer = ({footer_custom_classes = ""}: {footer_custom_classes?: String}) => {
  const t = useTranslations();

  return (
    <>
      <footer className={`${footer_custom_classes} border-t py-2`}>
        <div className="flex justify-between items-center">
          <div>
            <h6 className="text-sm text-gray-400">{t("common.footer.footerText")}</h6>
          </div>
          <Socials />
        </div>
      </footer>
    </>
  );
}

export default Footer;