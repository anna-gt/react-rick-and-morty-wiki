import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './navbar'
import '@testing-library/jest-dom';
import { renderWithRouter } from '../../tests/helpers/renderWithRouter';

describe('NAVBAR TESTS', () => {
	test('test characters link', async () => {
		const user = userEvent.setup()
		render(renderWithRouter(<Navbar />));
		const charactersLink = screen.getByTestId('characters-link')
		await user.click(charactersLink);
		expect(screen.getByTestId('characters-page')).toBeInTheDocument()
	});
	
});
