import React, { useState, useEffect } from "react";
import SongList from "./songList.jsx";
//create your first component
const Screen = () => {
	const [songs, setSongs] = useState([]);
	// Funcion para buscar los datos de la API
	const getData = (urlFetch) => {
		fetch(urlFetch)
			.then((response) => response.json())
			.then((data) => setSongs(data));
	};
	useEffect(() => {
		getData("https://assets.breatheco.de/apis/sound/songs");
	}, []);

	return (
		<div className="container-fluid">
			<h1>
				<i className="fa-brands fa-spotify fa-beat"></i> Music Player
			</h1>
			<div className="screen">
				<i class="fa-solid fa-circle-play playTop"></i>
				<SongList songs={songs} />
			</div>
		</div>
	);
};

export default Screen;
