import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./User/userContext";
import { Navbar, Nav, NavbarBrand } from 'reactstrap';
import './NavBar.css';

/**
 * NavBar component links to Companies, Jobs, Home
 *
 * Props: logout()
 * State: none
 *
 * App-> NavBar-> Links & NavLinks
 */

function NavBar({ logout }) {
    const { user } = useContext(userContext);
    return (
        <Navbar className='Navigation'>
			<NavbarBrand href='/'>Jobly</NavbarBrand>

			{user ? (
				<Nav>
					<NavLink
						to='/companies'
						className={'Navigation-item'}>
						Companies
					</NavLink>
					<NavLink
						to='/jobs'
						className={'Navigation-item'}>
						Jobs
					</NavLink>
					<NavLink
						to='/profile'
						className={'Navigation-item'}>
						Profile
					</NavLink>
					<NavLink
						id='Navigation-logout'
						onClick={logout}
						className={'Navigation-item'}>
						Log out {user.username}
					</NavLink>
				</Nav>
			) : (
				<Nav>
					<NavLink
						to='/login'
						className={'Navigation-item'}>
						Login
					</NavLink>
					<NavLink
						to='/signup'
						className={'Navigation-item'}>
						Sign Up
					</NavLink>
				</Nav>
			)}
		</Navbar>
    );
}


export default NavBar;