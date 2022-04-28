import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";

const SongList = ({ songs }) => {
	// const [selectedSong, setSelectedSong] = useState(null);
	let refSong = useRef(null);
	// const selectSong = () => {};
	const setSong = (link) => {
		refSong.src = `https://assets.breatheco.de/apis/sound/${link}`;
		refSong.play();
	};
	const playSong = () => {
		refSong.play();
	};
	const pauseSong = () => {
		refSong.pause();
	};
	const nextSong = (index) => {
		refSong.src[index] + 1;
	};
	return (
		<>
			<ol className="list-group">
				{songs.length > 0 ? (
					songs.map(({ name, url }, index) => {
						return (
							<li
								onClick={() => setSong(url)}
								key={index}
								className="listOfSongs list-group-item list-group-item-action">
								{name}
							</li>
						);
					})
				) : (
					<div
						className="spinner-border text-success mx-auto my-5"
						role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				)}
			</ol>

			<i className="fa-solid fa-circle-play playTop"></i>
			<div className=" barraControl container-fluid row fixed-bottom ">
				<i className="iconos col-3 fas fa-caret-square-left"></i>
				<i className="iconos col-3 fas fa-play " onClick={playSong}></i>
				<i
					className="iconos col-3 fas fa-pause "
					onClick={pauseSong}></i>
				<i
					className="iconos col-3 fas fa-caret-square-right"
					onClick={nextSong}></i>
			</div>
			<audio ref={(r) => (refSong = r)} className="barraControl" />
		</>
	);
};

export default SongList;
