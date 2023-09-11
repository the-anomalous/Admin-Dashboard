import { MdSettings, MdOutlineDarkMode, MdMenu } from "react-icons/md";

const Navbar = () => {
	return (
		<nav className="flex justify-between flex-row p-10">
			<MdMenu className="" style={{ fontSize: "2.8rem" }} />
			<div className="relative bg-white text-white"></div>
			<div className="flex flex-row gap-12" style={{ fontSize: "2.8rem" }}>
				<MdOutlineDarkMode className="cursor-pointer" />
				<MdSettings />
			</div>
		</nav>
	);
};

export default Navbar;
