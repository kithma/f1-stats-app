import "./Styles.css";

//Reusable loading screen
const Spinner = () => {
	return (
		<div data-testid="spinner" className="spinner-wrapper">
			<div className="spinner-wrapper__loader"></div>
		</div>
	);
};

export default Spinner;
