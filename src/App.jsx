import React from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";

const App = () => {
	return (
		<>
			<div className="mx-auto max-w-screen-md mt-4 py-5 px-20 bg-gradient-to-br from-cyan-600 to-blue-700 h-fit shadow-xl shadow-gray-400 rounded">
				<TopButtons />
				<Inputs />
				<TimeAndLocation />
				<TemperatureAndDetails />
				<Forecast title="hourly forecast" />
				<Forecast title="daily forecast" />
			</div>
		</>
	);
};

export default App;
