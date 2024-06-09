import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ContactMeButton from "../components/ContactMeButton";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="mx-5 max-w-screen-xl xl:mx-auto">
        <Outlet />
      </div>
      <Footer />
      <ContactMeButton />
    </div>
  );
};

export default MainLayout;
