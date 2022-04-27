import React, { useState, useEffect } from "react";
import SongList from "./songList.jsx";
import Control from "./control.jsx";
//create your first component
const Screen = () => {
	const [songs, setSongs] = useState([]);
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
				<i className="fa-brands fa-spotify"></i> Music Player
			</h1>
			<div className="screen">
				<SongList songs={songs} onClick={"quizás te use"} />
				<Control />
			</div>
		</div>
	);
};

export default Screen;
