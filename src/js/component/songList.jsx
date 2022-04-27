import React from "react";
import Control from "./control.jsx";

const SongList = ({ songs, onClick }) => {
	return (
		<ul className="list-group">
			{songs.length > 0 ? (
				songs.map(({ name, url }, index, play, pause) => {
					return (
						<>
							<li
								onClick={onClick}
								key={index}
								className="listOfSongs list-group-item list-group-item-action">
								{name}
							</li>
							<audio
								className="barraControl"
								src={
									"https://assets.breatheco.de/apis/sound/" +
									url
								}></audio>
						</>
					);
				})
			) : (
				<li>
					<div>Cargando...</div>
				</li>
			)}
		</ul>
	);
};

export default SongList;
