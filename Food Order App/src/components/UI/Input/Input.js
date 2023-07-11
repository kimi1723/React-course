import { useRef } from "react";
import classes from "./Input.module.css";

const Input = ({ id, type, label, onChange, value }) => {
	const amountInputRef = useRef();

	return (
		<div className={classes.input}>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type={type}
				onChange={() => onChange(amountInputRef.current.value)}
				ref={amountInputRef}
				value={value}
				min="1"
				max="5"
			/>
		</div>
	);
};

export default Input;
