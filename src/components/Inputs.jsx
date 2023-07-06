import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";

function Inputs({ setLocation }) {
	const [inputValue, setInputValue] = useState("");
	const [animate, setAnimate] = useState(false);
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue !== "") {
			setLocation(inputValue);
			setInputValue("");
		} else {
			setAnimate(true);
			setTimeout(() => {
				setAnimate(false);
			}, 500);
		}
	};

	return (
		<form className={`${animate ? "animate-bounce" : "animate-none"}`}>
			<div className="flex justify-center my-6">
				<div className="flex w-3/4 items-center justify-center space-x-4">
					<input value={inputValue} onChange={handleInputChange} type="text" className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize rounded-md" placeholder="Search City or Country" />
					<button onClick={handleSubmit}>
						<UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" />
					</button>
				</div>
			</div>
		</form>
	);
}

export default Inputs;
