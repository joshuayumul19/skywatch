import axios from "axios";

const APIKey = "2be4b587049ba82a9c1aaf184f0ae1f6";

export const fetchWeatherData = async (location) => {
	try {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}&units=metric`;
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error("Error fetching weather data:", error);
		throw error;
	}
};
