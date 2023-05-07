import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import '../styles/Header.scss';

function Header(): JSX.Element {
	return (
		<header className='Header'>
			<nav className='nav-bar'>
				<span className='nav-bar__title'>Hakken</span>
				<div className='nav-bar__items-conatiner'>
					<ul className='nav-bar__items'>
						<li>Home</li>
						<li>Contact</li>
						<li>About us</li>
					</ul>
					<span className='nav-bar__shopping-cart'>
						<HiShoppingCart size={28} />
						<div className='shopping-cart__count' />
					</span>
				</div>
			</nav>
		</header>
	);
}

export { Header };
