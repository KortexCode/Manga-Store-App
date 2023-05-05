import React from 'react';
import '../styles/Header.scss';

function Header(): JSX.Element {
	return (
		<header className='Header'>
			<nav className='Header__nav'>
				<span className='Header__title'>Manga Hakken</span>
				<ul>
					<li>Caterory</li>
				</ul>
				<div>
					<p>Checkout</p>
				</div>
			</nav>
		</header>
	);
}

export { Header };
