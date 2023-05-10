import React, { useContext } from 'react';
import { HiShoppingCart, HiHome, HiUserGroup } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
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
		to: '/',
	},
	{
		name: 'About Us',
		to: '/',
	},
];

function Header(): JSX.Element {
	const { dataManga } = useContext(AppContext);
	console.log(dataManga);
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
					<Search />
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
						<div className='shopping-cart__count' />
					</Link>
				</div>
			</nav>
		</header>
	);
}

export { Header };
