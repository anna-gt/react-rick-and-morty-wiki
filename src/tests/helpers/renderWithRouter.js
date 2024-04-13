import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../components/router/AppRouter";

export const renderWithRouter = (component, initialRoute = '/') => {
	return (
			<MemoryRouter initialEntries={[initialRoute]}>
					<AppRouter />
					{component}
			</MemoryRouter>
	)
}