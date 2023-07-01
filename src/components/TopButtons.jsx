import React from "react";

function TopButtons() {
	const cities = [
		{
			id: 1,
			title: "Pampanga",
		},
		{
			id: 2,
			title: "Tokyo",
		},
		{
			id: 3,
			title: "Toronto",
		},
		{
			id: 4,
			title: "Paris",
		},
		{
			id: 5,
			title: "London",
		},
	];
	return (
		<div className="flex items-center justify-around my-6 ">
			{cities.map((city) => (
				<button
					key={city.id}
					className=" text-white text-lg font-medium cursor-pointer transition ease-out hover:scale-105"
				>
					{city.title}
				</button>
			))}
		</div>
	);
}

export default TopButtons;
