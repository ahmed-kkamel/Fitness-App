import { Box } from "@mui/material";
import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Searchbar from "../components/Searchbar";
import Exercises from "../components/Exercises";

const Home = () => {
	const [exercises, setExercises] = useState([]);
	const [bodyPart, setBodyPart] = useState("all");
	return (
		<Box>
			<HeroBanner />
			<Searchbar
				exercises={exercises}
				setExercises={setExercises}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
			/>
			<Exercises
				exercises={exercises}
				setExercises={setExercises}
				bodyPart={bodyPart}
			/>
		</Box>
	);
};

export default Home;
