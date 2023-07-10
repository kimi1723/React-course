import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = ({ children, onClick }) => {
	const closeCartHandler = () => {
		onClick(closeCartHandler);
	};
	const portalElement = document.querySelector("#overlays");

	return (
		<>
			{ReactDOM.createPortal(
				<div className={classes.backdrop} onClick={closeCartHandler}></div>,
				portalElement,
			)}

			{ReactDOM.createPortal(
				<div className={classes.modal}>{children}</div>,
				portalElement,
			)}
		</>
	);
};

export default Modal;
