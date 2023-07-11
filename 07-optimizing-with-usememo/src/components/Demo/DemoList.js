import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = ({ items, title }) => {
	const sortedList = useMemo(() => {
		console.log("items sorted");
		return items.sort((a, b) => b - a);
	}, [items]);
	console.log("demo running");

	return (
		<div className={classes.list}>
			<h2>{title}</h2>
			<ul>
				{sortedList.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default DemoList;
