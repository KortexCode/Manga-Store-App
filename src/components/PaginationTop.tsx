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

function PaginationTop() {
	const param: Page = useParams();
	let page = 1;
	if (param.page) {
		page = parseInt(param.page, 10);
	}
	return (
		<div className='Pagination'>
			<Link to='/page/1' className='Paginaton__link'>
				<button className='Pagination__btn' type='button'>
					<HiChevronDoubleLeft size={18} />
				</button>
			</Link>
			<Link to={`/page/${page - 1}`} className='Paginaton__link'>
				<button className='Pagination__btn btn--next' type='button'>
					<HiChevronLeft size={18} />
				</button>
			</Link>
			<p className='Pagination__page-counter'>
				<span>Page</span> {page} <span>of</span> 2640
			</p>
			<Link to={`/page/${page + 1}`} className='Paginaton__link'>
				<button className='Pagination__btn' type='button'>
					<HiChevronRight size={18} />
				</button>
			</Link>
			<Link to='/page/2538' className='Paginaton__link'>
				<button className='Pagination__btn' type='button'>
					<HiChevronDoubleRight size={18} />
				</button>
			</Link>
		</div>
	);
}

export { PaginationTop };
