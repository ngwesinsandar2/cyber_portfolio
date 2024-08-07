import Navbar from "./Navbar/Navbar";

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