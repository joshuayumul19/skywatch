import React from "react";
import { UilArrowUp, UilArrowDown, UilTemperatureHalf, UilTear, UilWind, UilSun, UilSunset } from "@iconscout/react-unicons";
import { getWeatherIcon } from "../helpers/weatherIconHelper";
import { unixTimestampToTime } from "../helpers/timeHelper";

function TemperatureAndDetails({ data }) {
	const weatherIcon = getWeatherIcon(data.weather[0].main);
	return (
		<>
			<div className="flex items-center justify-center py-6 text-xl text-white">
				<p className="capitalize">{data.weather[0].description}</p>
			</div>
			<div className=" flex items-center justify-between text-white py-3">
				<div>{weatherIcon}</div>
				<p className=" text-5xl">{data.main.temp}°</p>
				<div className=" flex flex-col space-y-2">
					<div className="flex font-light text-sm items-center ">
						<UilTemperatureHalf size={18} className="mr-1" />
						<span className="mr-2">Real Feel: </span>
						<span className="font-medium">{data.main.feels_like}°</span>
					</div>
					<div className="flex font-light text-sm items-center ">
						<UilTear size={18} className="mr-1" />
						<span className="mr-2">Humidity: </span>
						<span className="font-medium">{data.main.humidity}%</span>
					</div>
					<div className="flex font-light text-sm items-center">
						<UilWind size={18} className="mr-1" />
						<span className="mr-2">Wind Speed: </span>
						<span className="font-medium">{data.wind.speed} m/s</span>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center space-x-2 text-white text-sm py-3">
				<UilSun />
				<p className="font-light">
					Sunrise: <span className="font-medium ">{unixTimestampToTime(data.sys.sunrise)}</span>
				</p>
				<p className="font-light">|</p>
				<UilSunset />
				<p className="font-light">
					Sunset: <span className="font-medium ">{unixTimestampToTime(data.sys.sunset)}</span>
				</p>
				<p className="font-light">|</p>
				<UilArrowUp />
				<p className="font-light">
					Highest: <span className="font-medium ">{data.main.temp_max}°</span>
				</p>
				<p className="font-light">|</p>
				<UilArrowDown />
				<p className="font-light">
					Lowest: <span className="font-medium ">{data.main.temp_min}°</span>
				</p>
			</div>
		</>
	);
}

export default TemperatureAndDetails;
