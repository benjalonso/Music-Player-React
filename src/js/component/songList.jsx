import React, { useRef } from "react";

const SongList = ({ songs }) => {
	// const [selectedSong, setSelectedSong] = useState(null);
	const refSong = useRef(null);
	// const selectSong = () => {};
	const setSong = (link) => {
		refSong.src = `https://assets.breatheco.de/apis/sound/${link}`;
	};

	// const pauseSong = (song) => {
	// 	song.play();
	// };

	return (
		<>
			<ul className="list-group">
				{songs.length > 0 ? (
					songs.map(({ name, url }, index) => {
						return (
							<>
								<li
									onClick={setSong(url)}
									key={index}
									className="listOfSongs list-group-item list-group-item-action">
									{name}
								</li>
								<audio
									ref={(r) => (refSong = r)}
									autoPlay
									className="barraControl"
								/>
							</>
						);
					})
				) : (
					<div
						class="spinner-border text-success mx-auto my-5"
						role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				)}
			</ul>
			<i class="fa-solid fa-circle-play playTop"></i>
			<div className=" barraControl container-fluid row fixed-bottom ">
				<i class="iconos col-3 fas fa-caret-square-left"></i>
				<i class="iconos col-3 fas fa-play "></i>
				<i class="iconos col-3 fas fa-caret-square-right"></i>
			</div>
		</>
	);
};

export default SongList;
