import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const errorToast = (message: string) => {
	return toast.error(message, {
		position: toast.POSITION.BOTTOM_RIGHT,
	});
};
