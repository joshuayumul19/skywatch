import React, { useState, useEffect } from "react";

function TimeAndLocation({ data }) {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000); // Update the time every 1000ms (1 second)

		return () => {
			clearInterval(interval); // Clean up the interval when the component unmounts
		};
	}, []);

	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	};

	return (
		<>
			<div className="flex items-center justify-center my-6">
				<p className="text-white text-xl font-extralight">{currentTime.toLocaleString(undefined, options)}</p>
			</div>
			<div className="flex items-center justify-center my-3">
				<p className="text-white text-3xl font-medium">
					{data.name}, {data.sys.country}
				</p>
			</div>
		</>
	);
}

export default TimeAndLocation;
