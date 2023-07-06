import { useRef } from "react";
import classes from "./Input.module.css";

const Input = ({ id, type, label, onChange }) => {
	const amountInputRef = useRef();

	const amountHandler = () => {
		onChange(amountInputRef.current.value);
	};

	return (
		<div className={classes.input}>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type={type}
				onChange={amountHandler}
				ref={amountInputRef}
			/>
		</div>
	);
};

export default Input;
