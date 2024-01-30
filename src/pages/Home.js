import { Box } from "@mui/material";
import React from "react";
import HeroBanner from "../components/HeroBanner";
import Searchbar from "../components/Searchbar";
import Exercises from "../components/Exercises";

const Home = () => {
	return (
		<Box>
			<HeroBanner />
			<Searchbar />
			<Exercises />
		</Box>
	);
};

export default Home;
