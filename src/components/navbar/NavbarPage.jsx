import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent  as ShoppingCart } from '../../assets/iconos/shoppingCart.svg';

const Nav = styled.nav`
	.navbar__link {
		color: black;
		margin-right: 3rem;
	}

	.navbar__link--active {
		text-decoration: underline;
	}

	.navbar__link--mr {
		margin-right: 0;
	}
`;

const NavbarPage = ({ products }) => (
	<Nav className="d-flex justify-content-center py-3 mb-4">
		<NavLink to='/home' className="navbar__link" activeClassName="navbar__link--active">Store</NavLink>
		<NavLink to='/about' className="navbar__link" activeClassName="navbar__link--active">About</NavLink>
		<NavLink to='/cart' className="navbar__link navbar__link--mr d-flex" activeClassName="navbar__link--active">
			<span className="mr-1 d-flex align-items-center"> <ShoppingCart /> </span> Cart ({products.length})
		</NavLink>
	</Nav>
)

NavbarPage.propTypes = {
	products: PropTypes.array, 
}

NavbarPage.defaultProps = {
	products: [], 
}

export default NavbarPage;