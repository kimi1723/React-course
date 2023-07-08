import classes from "./Modal.module.css";

const Modal = ({ children, onClick }) => {
	const closeCartHandler = () => {
		onClick(closeCartHandler);
	};
	return (
		<>
			<div className={classes.backdrop} onClick={closeCartHandler}></div>
			<div className={classes.modal}>{children}</div>
		</>
	);
};

export default Modal;
