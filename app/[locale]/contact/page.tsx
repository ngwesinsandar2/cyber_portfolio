"use client";

import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <>
      <main className="pt-16">
        <h1 className="text-5xl font-bold mb-6"><span className="uppercase">Contact</span> <span className="text-2xl text-[var(--primary-color)]">[ Get_in_Touch ]</span></h1>
        <section className="mb-10">
          <p>Thank you for visiting my portfolio.</p>
          <p>If you have any questions, comments, or inquiries, please don&apos;t hesitate to contact me.</p>
          <p>You can reach me through the contact form on this page, or by email at <a href="mailto:ngwesinsandar112@gmail.com" className="font-bold text-[var(--primary-color)]">ngwesinsandar112@gmail.com</a>, or phone at <a href="tel:09757978569" className="font-bold text-[var(--primary-color)]">09757-978-569</a>.</p>
          <p>I strive to respond to all messages as quickly as possible and look forward to hearing from you.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
