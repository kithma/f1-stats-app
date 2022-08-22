import "./Footer.css";

const Footer = () => {
	return (
		<div data-testid="footer-container" className="footer-wrapper">
			<div className="footer-wrapper__text-container">
				<img src="/assets/icons/racingCar.svg" className="footer-wrapper__text-container__image" />
				<p data-testid="github" className="footer-wrapper__text-container__text">
					Github Repo:{" "}
					<a
						data-testid="github-url"
						href="https://github.com/kithma/f1-stats-app"
						target="_blank"
						rel="noreferrer"
					>
						https://github.com/kithma/f1-stats-app
					</a>
				</p>
				<p data-testid="api" className="footer-wrapper__text-container__text">
					API Doc:{" "}
					<a data-testid="api-url" href="http://ergast.com/mrd" target="_blank" rel="noreferrer">
						http://ergast.com/mrd
					</a>
				</p>
			</div>
		</div>
	);
};

export default Footer;
