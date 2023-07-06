import React from "react";
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";

function Footer() {
	return (
		<>
			<footer className="flex justify-center items-center mt-11 space-x-3">
				<p>Made with : </p>
				<BiLogoReact size={30} className="text-center" />
				<BiLogoTailwindCss size={30} />
			</footer>
		</>
	);
}

export default Footer;
