import React, { useContext } from 'react';
import { HiShoppingCart, HiHome, HiUserGroup } from 'react-icons/hi';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Search } from './Search';
import logoHankken from '../assets/kawaii.jpg';
import '../styles/Header.scss';

type NavMenu = Navlink[];
type Navlink = {
	name: string;
	to: string;
};

const navlink: NavMenu = [
	{
		name: 'Home',
		to: '/page/1',
	},
	{
		name: 'About Us',
		to: '/page/1',
	},
];

function Header(): JSX.Element {
	const { cart, handleToSearch } = useContext(AppContext);
	const { pathname } = useLocation();
	// Verificando locación para renderizar barra de búsqueda
	let close = true;
	if (pathname === '/checkout') close = false;
	if (pathname === '/checkout/information') close = false;
	if (pathname === '/checkout/payment') close = false;
	if (pathname === '/checkout/success') close = false;

	return (
		<header className='Header'>
			<nav className='nav-bar'>
				<div className='nav-bar__logo'>
					<img src={logoHankken} alt='logo' />
					<span className='nav-bar__title'>Hakken</span>
				</div>
				<div className='nav-bar__items-conatiner'>
					<div className='nav-bar__mobile-items'>
						<Link className='nav-bar__icon' to='/'>
							<HiHome size={20} />
						</Link>
						<Link className='nav-bar__icon' to='/'>
							<HiUserGroup size={20} />
						</Link>
					</div>
					{close && <Search handleToSearch={handleToSearch} />}
					<ul className='nav-bar__items'>
						{navlink.map(link => (
							<li key={link.name}>
								<NavLink className='nav-bar__navlink' to={`${link.to}`}>
									{link.name}
								</NavLink>
							</li>
						))}
					</ul>
					<Link to='/checkout' className='nav-bar__shopping-cart'>
						<HiShoppingCart size={28} />
						{cart.length > 0 && (
							<div className='shopping-cart__count'>{cart.length}</div>
						)}
					</Link>
				</div>
			</nav>
		</header>
	);
}

export { Header };
