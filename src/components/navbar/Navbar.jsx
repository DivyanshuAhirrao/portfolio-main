import Menu from "./Menu";
import { Button } from "flowbite-react";
import NavAvatar from "./NavAvatar";
import TemporaryDrawer from "./Sidebar";

const Navbar = () => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/7972814411`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <nav className="bg-gray-800 text-gray-200 flex justify-around items-center h-[11vh] w-[100%]">
      <aside className="xs:w-[75%] xs:relative xs:right-12 sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[30%] flex justify-start xs:pl-16 sm:pl-[60px] md:pl-[70px] lg:pl-[80px] xl:pl-[80px]">
        <NavAvatar />
        <h1 className="text-[16px] opacity-90 uppercase pt-3 pl-3 text-white font-mono font-semibold">Divyanshu Ahirrao</h1>
      </aside>
      <aside className="xs:w-[25%] xs:hidden sm:block sm:w-[80%] flex">
        <Menu />
        {/* <NavSearch /> */}
      </aside>
      <aside className="w-[20%] flex justify-end pr-2">
        <button onClick={handleClick} className="xs:hidden sm:block">
          <Button outline gradientDuoTone="tealToLime">
            Chat Now
          </Button>
        </button>
        <div className="xs:block sm:hidden scale-125 ">
          <TemporaryDrawer />
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
