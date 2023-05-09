import React from 'react';
import { useParams } from 'react-router-dom';
import { MangaCard } from '../components/MangaCard';
import { PaginationTop } from '../components/PaginationTop';
import { PaginationBottom } from '../components/PaginationBottom';
import { Datum } from '../constants/types/mangas';
import { useInitialState } from '../hooks/useInitialState';
import colladImg from '../assets/collad_.jpg';
import '../styles/Home.scss';

type Page = {
	page: string;
};

function Home(): JSX.Element {
	const param: Page = useParams();
	let Api = '';
	if (param.page) {
		Api = `https://api.jikan.moe/v4/manga?page=${parseInt(param.page, 10)}`;
	} else {
		Api = `https://api.jikan.moe/v4/manga?page=1`;
	}
	const { dataManga } = useInitialState(Api);
	console.log('first', dataManga);

	return (
		<section className='Home'>
			<section className='Home__title-section'>
				<img className='Home__title-section-img' src={colladImg} alt='' />
				<div className='overlay--gray-scale' />
				<div className='Home__title-container'>
					<h1 className='Home__title'>MANGA HAKKEN</h1>
					<p className='Home__title-message'>Look for your favorites mangas</p>
				</div>
			</section>
			<PaginationTop />
			<section className='Home__manga-section'>
				<div className='Home__manga-container'>
					{dataManga?.data
						.filter((item: Datum) => {
							const censored = item.genres.some((gen): boolean => {
								if (gen.name === 'Hentai') return true;
								if (gen.name === 'Boys Love') return true;
								if (gen.name === 'Girls Love') return true;
								if (gen.name === 'Erotica') return true;
								if (gen.name === 'Ecchi') return true;
								return false;
							});
							return !censored;
						})
						.map(
							(itemManga): JSX.Element => (
								<MangaCard key={itemManga.title} item={itemManga} />
							)
						)}
				</div>
			</section>
			<PaginationBottom />
		</section>
	);
}

export { Home };
