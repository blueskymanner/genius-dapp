import Header from "./ui/Header";
import Navbar from "./ui/Navbar";

const SiteLayout = (props: any) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navbar />
      {props.children}
    </div>
  );
};

export default SiteLayout;
