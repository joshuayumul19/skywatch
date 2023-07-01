import React from "react";
import { UilSearch, UilLocationPoint, UilCelsius, UilFahrenheit } from "@iconscout/react-unicons";

function Inputs() {
	return (
		<>
			<div className=" flex justify-between my-6">
				<div className=" flex  w-3/4 items-center justify-center space-x-4">
					<input
						type="text"
						className=" text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize rounded-md"
						placeholder="Search City..."
					/>
					<UilSearch
						size={25}
						className=" text-white cursor-pointer transition ease-out hover:scale-125"
					/>
					<UilLocationPoint
						size={25}
						className=" text-white cursor-pointer transition ease-out hover:scale-125"
					/>
				</div>
				<div className=" flex w-1/4 items-center justify-center ">
					<button name="metric" className=" text-xl text-white font-light">
						<UilCelsius
							size={25}
							className=" text-white cursor-pointer transition ease-out hover:scale-125"
						/>
					</button>
					<p className=" text-white text-3xl font-light mx-2">l</p>
					<button name="imperial" className=" text-xl text-white font-light">
						<UilFahrenheit
							size={25}
							className=" text-white cursor-pointer transition ease-out hover:scale-125"
						/>
					</button>
				</div>
			</div>
		</>
	);
}

export default Inputs;
