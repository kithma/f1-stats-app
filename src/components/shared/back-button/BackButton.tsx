import { Link } from "react-router-dom";
import "./BackButton.css";

interface Props {
	navigateTo: string;
}

// Reusable button to navigate to a given path
const BackButton = ({ navigateTo }: Props) => {
	return (
		<div className="back-button-wrapper">
			<Link data-testid="link" to={navigateTo}>
				<div className="back-button-wrapper__button">
					<img
						className="back-button-wrapper__button--arrow-head"
						src={"/assets/icons/arrowHead.svg"}
						alt="back-button"
					/>
					<p data-testid="button-text" className="back-button-wrapper__button--text">
						Back
					</p>
				</div>
			</Link>
		</div>
	);
};

export default BackButton;
