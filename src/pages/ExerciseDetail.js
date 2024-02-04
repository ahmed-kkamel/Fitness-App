import React, { useEffect, useState } from "react";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions, YoutubeOptions } from "../utils/fetchData";
const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setExerciseVideos] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchExersieData = async () => {
			const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
			const youtubeSearch =
				"https://youtube-search-and-download.p.rapidapi.com";

			const exerciseDetailData = await fetchData(
				`${exerciseDbUrl}/exercises/exercise/${id}`,
				exerciseOptions
			);
			setExerciseDetail(exerciseDetailData);
			const exerciseVideosData = await fetchData(
				`${youtubeSearch}/search?query=${exerciseDetailData.name}`,
				YoutubeOptions
			);
			setExerciseVideos(exerciseVideosData);
			// console.log(exerciseVideos);
		};
		fetchExersieData();
	}, [id]);
	return (
		<>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos
				exerciseVideos={exerciseVideos}
				name={exerciseDetail.name}
			/>
			{/* <SimilarExercises /> */}
		</>
	);
};

export default ExerciseDetail;
