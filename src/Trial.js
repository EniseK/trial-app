import React from "react";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";

export default function Trial(props) {
	function handleResponse(response) {
		alert(`The weather in ${props.city} is ${response.data.main.temp}°C`);
	}

	let apiKey = "055aa66e068d66b797d53ba8e4aaef23";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

	axios.get(apiUrl).then(handleResponse);

	return (
		<div>
			<a href="/" target="_blank" rel="noreferrer">
				link
			</a>{" "}
			<br /> <br />
			<SpinnerCircular />;
		</div>
	);
}
