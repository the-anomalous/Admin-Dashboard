import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./pages/layout.page";
import { Dashboard } from "./scenes";
import { setTheme } from "./features";

const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const currentTheme = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		if (currentTheme) {
			dispatch(setTheme("dark"));
		} else {
			dispatch(setTheme("light"));
		}
	}, [dispatch]);

	return (
		<div className="bg-background-default h-screen">
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Navigate to="/dashboard" replace />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
