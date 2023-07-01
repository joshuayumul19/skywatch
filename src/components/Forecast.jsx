import React from "react";

function Forecast({ title }) {
	return (
		<>
			<p className="text-white font-medium uppercase mt-7">{title}</p>
			<hr className="my-2" />
			<div className="flex items-center justify-between text-white">
				<div className="flex flex-col items-center justify-center">
					<p className="font-light text-sm">02:00 PM</p>
					<img src="http://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt="" />
					<p className="font-medium">22°</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<p className="font-light text-sm">02:00 PM</p>
					<img src="http://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt="" />
					<p className="font-medium">22°</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<p className="font-light text-sm">02:00 PM</p>
					<img src="http://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt="" />
					<p className="font-medium">22°</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<p className="font-light text-sm">02:00 PM</p>
					<img src="http://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt="" />
					<p className="font-medium">22°</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<p className="font-light text-sm">02:00 PM</p>
					<img src="http://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt="" />
					<p className="font-medium">22°</p>
				</div>
			</div>
		</>
	);
}

export default Forecast;
