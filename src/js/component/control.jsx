import React, { useState, useEffect } from "react";

const Control = (onClick, play, pause, before, next) => {
	return (
		<>
			<div className=" barraControl container-fluid row">
				<i class="iconos col-3 fas fa-caret-square-left"></i>
				<i
					class="iconos col-3 fa-solid fa-circle-pause "
					id="pause"></i>
				<i class="iconos col-3 fas fa-play"></i>
				<i class="iconos col-3 fas fa-caret-square-right"></i>
			</div>
		</>
	);
};

export default Control;
