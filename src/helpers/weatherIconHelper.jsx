import { UilClouds, UilWindSun, UilCloudShowersHeavy, UilCloudSun, UilCloudDrizzle, UilCloudMeatball, UilThunderstorm, UilWindy, UilEyeSlash, UilMountains, UilCloudWind, UilTornado, UilImageBlock } from "@iconscout/react-unicons";

export function getWeatherIcon(mainWeather) {
	switch (mainWeather) {
		case "Clouds":
			return <UilClouds size={150} />;
		case "Haze":
			return <UilWindSun size={150} />;
		case "Rain":
			return <UilCloudShowersHeavy size={150} />;
		case "Clear":
			return <UilCloudSun size={150} />;
		case "Drizzle":
			return <UilCloudDrizzle size={150} />;
		case "Snow":
			return <UilCloudMeatball size={150} />;
		case "Thunderstorm":
			return <UilThunderstorm size={150} />;
		case "Mist":
			return <UilWindy size={150} />;
		case "Smoke":
			return <UilImageBlock size={150} />;
		case "Dust":
			return <UilImageBlock size={150} />;
		case "Fog":
			return <UilEyeSlash size={150} />;
		case "Sand":
			return <UilImageBlock size={150} />;
		case "Ash":
			return <UilMountains size={150} />;
		case "Squall":
			return <UilCloudWind size={150} />;
		case "Tornado":
			return <UilTornado size={150} />;
		default:
			return null;
	}
}
