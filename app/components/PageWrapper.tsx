"use client";

import Navbar from "./Navbar/Navbar";
import "../../libs/localization/i18n";

const PageWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        {children}
      </div>
    </>
  );
}

export default PageWrapper;