import React from 'react';
import imgLoading from '../assets/loadingManga.jpg';
import '../styles/Loading.scss';

function Loading(): JSX.Element {
	return (
		<div className='Loading Loading--animation'>
			<img src={imgLoading} alt='Carga' className='Loading__img' />
			<p className='Loading__text Loading__text--animation'>Loading. . . .</p>
		</div>
	);
}

export { Loading };
