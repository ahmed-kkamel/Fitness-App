import React from "react";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
const ExerciseDetail = () => {
	return (
		<>
			<Detail />
			<ExerciseVideos />
			<SimilarExercises />
		</>
	);
};

export default ExerciseDetail;
