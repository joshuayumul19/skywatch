export function getWeatherForBackground(mainWeather) {
	switch (mainWeather) {
		case "Clouds":
			return "from-sky-500 to-sky-600";
		case "Haze":
			return "from-yellow-400 to-yellow-700";
		case "Rain":
			return "from-blue-600 to-gray-900";
		case "Clear":
			return "from-sky-400 to-sky-600";
		case "Drizzle":
			return "from-blue-900 to-cyan-500";
		case "Snow":
			return "from-gray-200 to-gray-500";
		case "Thunderstorm":
			return "from-blue-900 to-gray-900";
		case "Mist":
			return "from-blue-300 to-blue-500";
		case "Smoke":
			return "from-gray-300 to-gray-500";
		case "Fog":
			return "from-gray-300 to-gray-500";
		case "Sand":
			return "from-yellow-300 to-yellow-500";
		case "Ash":
			return "from-gray-300 to-red-500";
		case "Squall":
			return "from-teal-300 to-teal-500";
		case "Tornado":
			return "from-red-400 to-red-900";
		default:
			return null;
	}
}
