import React from "react";
import {
	UilArrowUp,
	UilArrowDown,
	UilTemperatureHalf,
	UilTear,
	UilWind,
	UilSun,
	UilSunset,
} from "@iconscout/react-unicons";
function TemperatureAndDetails() {
	return (
		<>
			<div className="flex items-center justify-center py-6 text-xl text-cyan-300">
				<p>Clear</p>
			</div>
			<div className=" flex items-center justify-between text-white py-3">
				<img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className="w-20" />
				<p className=" text-5xl">34°</p>
				<div className=" flex flex-col space-y-2">
					<div className="flex font-light text-sm items-center ">
						<UilTemperatureHalf size={18} className="mr-1" />
						<span className="mr-2">Real Feel: </span>
						<span className="font-medium">35°</span>
					</div>
					<div className="flex font-light text-sm items-center ">
						<UilTear size={18} className="mr-1" />
						<span className="mr-2">Humidity: </span>
						<span className="font-medium">43%</span>
					</div>
					<div className="flex font-light text-sm items-center">
						<UilWind size={18} className="mr-1" />
						<span className="mr-2">Wind Speed: </span>
						<span className="font-medium">3 km/h</span>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center space-x-2 text-white text-sm py-3">
				<UilSun />
				<p className="font-light">
					Sunrise: <span className="font-medium ">4:00 AM</span>
				</p>
				<p className="font-light">|</p>
				<UilSunset />
				<p className="font-light">
					Sunset: <span className="font-medium ">6:00 PM</span>
				</p>
				<p className="font-light">|</p>
				<UilArrowUp />
				<p className="font-light">
					Highest: <span className="font-medium ">55°</span>
				</p>
				<p className="font-light">|</p>
				<UilArrowDown />
				<p className="font-light">
					Lowest: <span className="font-medium ">25°</span>
				</p>
			</div>
		</>
	);
}

export default TemperatureAndDetails;
