'use client';

import { useTranslations } from 'next-intl';
import Footer from '../../components/Footer';

const Contact = () => {
  const t = useTranslations();

  return (
    <>
      <div className="flex flex-col justify-between h-svh">
        <main className="pt-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="uppercase">{t('contact.title')}</span>{' '}
            <span className="text-2xl text-[var(--primary-color)]">
              [ Get_in_Touch ]
            </span>
          </h1>
          <section className="mb-10">
            <p>{t('contact.descriptions.description1')}</p>
            <p>{t('contact.descriptions.description2')}</p>
            <p>
              You can reach me through the contact form on this page, or by
              email at{' '}
              <a
                href="mailto:ngwesinsandar112@gmail.com"
                className="font-bold text-[var(--primary-color)] underline"
              >
                ngwesinsandar112@gmail.com
              </a>
              , or phone at{' '}
              <a
                href="tel:09757978569"
                className="underline font-bold text-[var(--primary-color)]"
              >
                09757-978-569
              </a>
              .
            </p>
            <p>{t('contact.descriptions.description4')}</p>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
