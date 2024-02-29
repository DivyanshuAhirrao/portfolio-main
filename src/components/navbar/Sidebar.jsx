import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import travel from "../media/Animation - 1709053313382.json";
import Lottie from "react-lottie";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import connect from "../media/connect.json";
import FormDialog from "./Subscribe";
import { GoProjectSymlink } from "react-icons/go";
import { TiHomeOutline } from "react-icons/ti";
import { IoIosContacts } from "react-icons/io";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: connect,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: travel,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/7972814411`;
    window.open(whatsappUrl, "_blank");
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <section className="pt-8 flex flex-col gap-4">
        <h1 className="text-center font-bold text-gray-500">
          {" "}
          ------CONNECT NOW------{" "}
        </h1>
        <div className="pt-2 flex w-[100%] gap-4 px-7 text-[18px]">
          <aside className="w-[18%]">
            <ImWhatsapp className="text-[20px]" />
          </aside>
          <aside className="w-[70%] tracking-wider">
            <button onClick={handleClick}>ChatNow</button>
          </aside>
        </div>
        <div className="flex w-[100%] gap-4 px-7 text-[18px]">
          <aside className="w-[18%]">
            <FaInstagram className="text-[20px]" />
          </aside>
          <aside className="w-[82%] tracking-wider">
            <a href="https://www.instagram.com/iam.divyanshu?igsh=MWZIZDc2N2hmZXRyYw==">
              Instagram
            </a>
          </aside>
        </div>
        <div className="flex w-[100%] gap-4 px-7 text-[18px]">
          <aside className="w-[18%]">
            <FaLinkedin className="text-[20px]" />
          </aside>
          <aside className="w-[70%] tracking-wider">
            <a href="https://www.linkedin.com/in/divyanshu-ahirrao-038537245/">
              LinkedIn
            </a>
          </aside>
        </div>
      </section>
      <Divider />
      <section className="pt-12 flex flex-col gap-4">
        <h1 className="text-center font-bold text-gray-500">
          ------NAVIGATE------
        </h1>
        <div className="pt-2 flex w-[100%] gap-6 px-7 text-[18px]">
          <aside className="w-[18%]">
            <TiHomeOutline className="text-[20px]" />
          </aside>
          <aside className="w-[70%] tracking-wider">
            <a href="#home">Home</a>
          </aside>
        </div>
        <div className="pt-2 flex w-[100%] gap-6 px-7 text-[18px]">
          <aside className="w-[18%]">
            <GoProjectSymlink className="text-[20px]" />
          </aside>
          <aside className="w-[70%] tracking-wider">
            <a href="#projects">Projects</a>
          </aside>
        </div>
        <div className="pt-2 flex w-[100%] gap-6 px-7 text-[18px]">
          <aside className="w-[18%]">
            <IoIosContacts className="text-[20px]" />
          </aside>
          <aside className="w-[70%] tracking-wider">
            <a href="#contacts">Contacts</a>
          </aside>
        </div>
      </section>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{ color: "white" }}>
        <MenuOpenIcon />
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className="h-[100vh] flex flex-col justify-between">
          <div className="pb-2">{DrawerList}</div>
          <button className="w-[100%] m-auto relative top-[15%]">
            <FormDialog />
          </button>
          <div className="w-[100%] pb-2">
            <Lottie options={defaultOptions} width={250} />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
