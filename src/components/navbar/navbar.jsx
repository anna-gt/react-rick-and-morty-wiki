import React from 'react';
import { NavLink } from 'react-router-dom';
// import styles from './navbar.module.scss';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
				<div className="container">
					<NavLink to="/" className="navbar-brand fs-3 ubuntu">
						Rick & Morty <span className="text-primary">WiKi</span>
					</NavLink>
					<button
						className="navbar-toggler border-0"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="fas fa-bars open text-dark"></span>
						<span className="fas fa-times close text-dark"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNavAltMarkup"
					> <div className="navbar-nav fs-5">
							<NavLink to="/" className="nav-link" data-testid="characters-link">
								Characters
							</NavLink>
							<NavLink to="/episodes" className="nav-link">
								Episode
							</NavLink>
							<NavLink
								className="nav-link"
								to="/location" >Location</NavLink>
						</div>
					</div>
				</div>
		</nav>
			);
};

export default Navbar;