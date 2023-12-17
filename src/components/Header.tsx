import logo from "@assets/images/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

interface Props {
  pages: NavItem[];
}

const Header = ({ pages }: Props) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <div className=" md:h-24 shadow-lg  flex justify-between items-center max-md:flex-col gap-6 p-4">
        <div className="flex justify-between max-md:w-full items-center">
          <a href="/" className="btn btn-ghost h-fit">
            <img
              src={logo.src}
              alt="logo"
              width={500}
              className="max-md:w-40 w-52"
            />
          </a>

          {!showNav ? (
            <AiOutlineMenu
              className="max-md:block hidden text-5xl cursor-pointer"
              onClick={toggleNav}
            />
          ) : (
            <AiOutlineClose
              className="max-md:block hidden text-5xl cursor-pointer"
              onClick={toggleNav}
            />
          )}
        </div>
        <div
          className={`navbar w-fit bg-base-100 justify-end ${
            showNav ? "max-md:block" : "max-md:hidden"
          }`}
        >
          <ul
            className={`menu menu-horizontal px-1 gap-6 max-md:w-full text-xl max-md:flex-col`}
          >
            {pages.map((page, index) => (
              <li
                key={index}
                className={
                  page.name === "Join Today"
                    ? "bg-secondary text-white rounded-md"
                    : ""
                }
              >
                <a href={page.url}>{page.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
