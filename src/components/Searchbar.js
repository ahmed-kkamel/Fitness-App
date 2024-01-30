import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
const Searchbar = () => {
	const [search, setSearch] = useState("");
	const handleSearch = async () => {
		if (search) {
			const exersicesData = await fetchData(
				"https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
				exerciseOptions
			);
			console.log(exersicesData);
		}
	};
	// const handleSearch = async () => {
	// 	if (search) {
	// 		try {
	// 			const res = await fetch(
	// 				"https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
	// 				{
	// 					method: "GET",
	// 					headers: {
	// 						"X-RapidAPI-Key":
	// 							"0fad249527msh1c467e740e63b9ap1fe8a3jsnbd1275940d93",
	// 						"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	// 					},
	// 				}
	// 			);

	// 			if (!res.ok) {
	// 				throw new Error(`HTTP error! Status: ${res.status}`);
	// 			}

	// 			const data = await res.json();
	// 			console.log(data);
	// 		} catch (error) {
	// 			console.error("Error fetching data:", error);
	// 		}
	// 	}
	// };

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
		</Stack>
	);
};

export default Searchbar;
