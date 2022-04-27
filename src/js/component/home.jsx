import React, { useState, useEffect } from "react";
import Screen from "./screen.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Screen />
		</div>
	);
};

export default Home;
