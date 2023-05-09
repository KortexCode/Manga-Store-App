import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
	HiChevronDoubleLeft,
	HiChevronDoubleRight,
	HiChevronLeft,
	HiChevronRight,
} from 'react-icons/hi';
import '../styles/Pagination.scss';

type Page = {
	page: string;
};

function PaginationBottom() {
	const param: Page = useParams();
	let page = 1;
	if (param.page) {
		page = parseInt(param.page, 10);
	}
	const handlecrollTo = () => {
		window.scrollTo(0, 100);
	};
	return (
		<div className='Pagination'>
			<Link to='/page/1' onClick={handlecrollTo} className='Paginaton__link'>
				<button className='Pagination__btn' type='button'>
					<HiChevronDoubleLeft size={18} />
				</button>
			</Link>
			<Link
				to={`/page/${page - 1}`}
				onClick={handlecrollTo}
				className='Paginaton__link'
			>
				<button className='Pagination__btn' type='button'>
					<HiChevronLeft size={18} />
				</button>
			</Link>
			<Link
				to={`/page/${page + 1}`}
				onClick={handlecrollTo}
				className='Paginaton__link'
			>
				<button className='Pagination__btn' type='button'>
					<HiChevronRight size={18} />
				</button>
			</Link>
			<Link to='/page/2538' onClick={handlecrollTo} className='Paginaton__link'>
				<button className='Pagination__btn' type='button'>
					<HiChevronDoubleRight size={18} />
				</button>
			</Link>
		</div>
	);
}

export { PaginationBottom };
