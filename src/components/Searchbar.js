import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
const Searchbar = () => {
	const [search, setSearch] = useState("");
	const [exercises, setExercises] = useState([]);
	const [bodyParts, setBodyParts] = useState([]);

	useEffect(() => {
		const fetchDataExercises = async () => {
			const bodyPartsData = await fetchData(
				"https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
				exerciseOptions
			);
			setBodyParts(["all", ...bodyPartsData]);
		};
	}, []);

	const handleSearch = async () => {
		if (search) {
			const exersicesData = await fetchData(
				"https://exercisedb.p.rapidapi.com/exercises",
				exerciseOptions
			);
			const serarchedExersises = exersicesData.filter(
				(exrcise) =>
					exrcise.name.toLowerCase().includes(search) ||
					exrcise.target.toLowerCase().includes(search) ||
					exrcise.bodyPart.toLowerCase().includes(search) ||
					exrcise.equipment.toLowerCase().includes(search)
			);
			setSearch("");
			setExercises(serarchedExersises);
		}
	};

	return (
		<Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
			<Typography
				fontWeight={700}
				sx={{ fontSize: { lg: "44px", xs: "30px" } }}
				mb="49px"
				textAlign="center"
			>
				Awesome Exercises You <br /> Should Know
			</Typography>
			<Box position="relative" mb="72px">
				<TextField
					height="76px"
					sx={{
						input: { fontWeight: "700", border: "none", borderRadius: "4px" },
						width: { lg: "1170px", xs: "350px" },
						backgroundColor: "#fff",
						borderRadius: "40px",
					}}
					placeholder="Search Exercises"
					type="text"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value.toLowerCase());
					}}
				/>
				<Button
					className="search-btn"
					sx={{
						bgcolor: "#FF2625",
						color: "#fff",
						textTransform: "none",
						width: { lg: "173px", xs: "80px" },
						height: "56px",
						position: "absolute",
						right: "0px",
						fontSize: { lg: "20px", xs: "14px" },
					}}
					onClick={handleSearch}
				>
					Search
				</Button>
			</Box>
			<Box sx={{ position: "relative", width: "100%", p: "20px" }}>
				<HorizontalScrollbar
					data={bodyParts}
					bodyParts
					setBodyPart={setBodyParts}
					bodyPart={bodyParts}
				/>
			</Box>
		</Stack>
	);
};

export default Searchbar;
