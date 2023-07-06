import React, { useState, useEffect } from "react";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import { fetchWeatherData } from "./services/weatherService"; // Import the fetchWeatherData function
import Loader from "./helpers/Loader";
import { getWeatherForBackground } from "./helpers/weatherForBackground";
import Footer from "./components/Footer";

const App = () => {
	const [data, setData] = useState(null);
	const [location, setLocation] = useState("angeles city");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		// Reset error state on each location change
		setError(false);

		// Fetch weather data when the location changes
		fetchWeatherData(location)
			.then((responseData) => {
				setData(responseData);
				setLoading(false);
			})
			.catch((error) => {
				// Handle error and set error state
				console.error("Error fetching weather data:", error);
				setError(true);
				setLoading(false);
			});
	}, [location]);

	if (loading) {
		return (
			<div className="mt-[200px]">
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div>
				<Loader />
				<h1 className="text-2 mx-auto w-1/2 text-center mt-[100px]">Place Not Found! Refresh the Page and Try Again.</h1>
			</div>
		);
	}

	if (!data) {
		return null;
	}
	const weatherForBackground = getWeatherForBackground(data.weather[0].main);
	return (
		<>
			<div className={`mx-auto max-w-screen-md mt-4 py-5 px-20 bg-gradient-to-br ${weatherForBackground} h-fit shadow-xl shadow-gray-400 rounded`}>
				<Inputs setLocation={setLocation} />
				<TimeAndLocation data={data} />
				<TemperatureAndDetails data={data} />
			</div>
			<Footer />
		</>
	);
};

export default App;
