import React, { useEffect, useState } from 'react';
import { MangaCard } from '../components/MangaCard';
import { Datum, Manga } from '../constants/mangas';
import colladImg from '../assets/collad_.jpg';
import '../styles/Home.scss';

function Home(): JSX.Element {
	const [mangaData, setMangaData] = useState<Manga | null>(null);
	console.log('render');
	useEffect(() => {
		async function query(): Promise<void> {
			const response = await fetch('https://api.jikan.moe/v4/manga');
			const resData: Manga = await response.json();
			console.log('res', resData);
			setMangaData(resData);
		}
		query();
	}, []);

	return (
		<main className='Home'>
			<section className='Home__title-section'>
				<img className='Home__title-section-img' src={colladImg} alt='' />
				<div className='overlay--gray-scale' />
				<div className='Home__title-container'>
					<h1 className='Home__title'>MANGA HAKKEN</h1>
					<p className='Home__title-message'>Look for your favorites mangas</p>
				</div>
			</section>
			<section className='Home__manga-section'>
				<div className='Home__manga-container'>
					{mangaData?.data.map(
						(item: Datum): JSX.Element => (
							<MangaCard key={item.title} item={item} />
						)
					)}
				</div>
			</section>
		</main>
	);
}

export { Home };
