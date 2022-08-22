import { ReactNode } from "react";
import Footer from "../footer/Footer";
import { ToastContainer } from "react-toastify";

import "./MainLayout.css";

interface Props {
	children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
	return (
		<div className="main-layout-wrapper">
			<div className="main-layout-wrapper__layout">{children}</div>
			<ToastContainer />
			<Footer />
		</div>
	);
};

export default MainLayout;
