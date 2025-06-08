import { Outlet } from "react-router";

const Persist = () => {
	const persist: boolean = true;
	const isLoading: boolean = false;

	return !persist ? <Outlet /> : isLoading ? <div>Loading...</div> : <Outlet />;
};

export default Persist;
