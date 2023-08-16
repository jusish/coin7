import logo from "../../assets/logoo 1.png";
import icon from "../../assets/formkit_down.png";
import MyModal from "../MyModal/MyModal";
import { useState } from "react";
import Accordion from "../Accordion/Accordion";
import { AccordionProps } from "../Accordion/AccordionTypes";

const index: React.FC = () => {
  const accordionData: AccordionProps = {
    title: "Accordion Title",
    desc: "Accordion Description",
    button: "Accordion Button",
    smalltext: "smalltext",
    list1: "List items...",
    list2: "List items...",
    list3: "List items...",
  };

  const [showMyModal, setShowMyModal] = useState(false);

  const handleOnClose = () => {
    setShowMyModal(false);
  };

  return (
    <>
      <div className="flex flex-col gap-14 justify-center">
        {/* navbar */}
        <div className="w-[96%] shadow-2xl flex flex-row justify-between p-3 rounded-full mx-9 max-md:mx-3 text-center items-center my-6">
          <img src={logo} alt="" />
          <ul className="flex flex-row gap-10 max-md:hidden">
            <li>
              <a href="/" className="hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Coupons
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Apps
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                My Favorite
              </a>
            </li>
          </ul>
          <div className="cursor-pointer">
            <p
              className="flex flex-row items-center"
              onClick={() => setShowMyModal(true)}
            >
              <span className=" text-gray-400 max-md:hidden">
                Shipping Country:
              </span>{" "}
              Germany <img src={icon} alt="" className="h-[10px]" />
            </p>
          </div>
        </div>

        {/* categories */}

        <div className="xl:mx-[8rem] flex flex-col gap-10 sm:mx-[6rem] max-sm:mx-6 max-lg:text-sm max-md:text-xs">
          <Accordion
            title="20% RABATT"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            button="Gutschein Anzeigen"
            smalltext="Gultig bis: 23.08.22023"
            list1="Gutscheinert: 20%"
            list2="Gultig Bis: 27.08.2023"
            list3="Git Fur:Lorem Ipsum is simply dummy text of the printing and typesetting industry.%"
          />

          <Accordion
            title="20% RABATT"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            button="Gutschein Anzeigen"
            smalltext="Gultig bis: 23.08.22023"
            list1="Gutscheinert: 20%"
            list2="Gultig Bis: 27.08.2023"
            list3="Git Fur:Lorem Ipsum is simply dummy text of the printing and typesetting industry.%"
          />

          <Accordion
            title="20% RABATT"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            button="Gutschein Anzeigen"
            smalltext="Gultig bis: 23.08.22023"
            list1="Gutscheinert: 20%"
            list2="Gultig Bis: 27.08.2023"
            list3="Git Fur:Lorem Ipsum is simply dummy text of the printing and typesetting industry.%"
          />

          <Accordion
            title="20% RABATT"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            button="Gutschein Anzeigen"
            smalltext="Gultig bis: 23.08.22023"
            list1="Gutscheinert: 20%"
            list2="Gultig Bis: 27.08.2023"
            list3="Git Fur:Lorem Ipsum is simply dummy text of the printing and typesetting industry.%"
          />
        </div>
      </div>
      {/*  modal */}
      <MyModal onClose={handleOnClose} visible={showMyModal} />
    </>
  );
};

export default index;
