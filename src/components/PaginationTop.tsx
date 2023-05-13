import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import {
	HiChevronDoubleLeft,
	HiChevronDoubleRight,
	HiChevronLeft,
	HiChevronRight,
} from 'react-icons/hi';
import '../styles/Pagination.scss';

type Props = {
	loading: boolean;
	handleLoadingState: (arg: boolean) => void;
};
type Page = {
	page: string;
};

function PaginationTop(props: Props) {
	const { loading, handleLoadingState } = props;
	const history = useHistory();
	const param: Page = useParams();
	let page = 1;
	if (param.page) {
		page = parseInt(param.page, 10);
	}
	const onChangePagePrev = () => {
		if (!loading && page > 1) {
			handleLoadingState(true);
			history.push(`/page/${page - 1}`);
		}
	};
	const onChangePagePost = () => {
		if (!loading) {
			handleLoadingState(true);
			history.push(`/page/${page + 1}`);
		}
	};
	return (
		<div className='Pagination'>
			<Link to='/page/1' className='Paginaton__link'>
				<button className='Pagination__btn' type='button'>
					<HiChevronDoubleLeft size={18} />
				</button>
			</Link>

			<button
				className='Pagination__btn btn--next'
				type='button'
				onClick={onChangePagePrev}
			>
				<HiChevronLeft size={18} />
			</button>

			<p className='Pagination__page-counter'>
				<span>Page</span> {page} <span>of</span> 2640
			</p>

			<button
				className='Pagination__btn'
				type='button'
				onClick={onChangePagePost}
			>
				<HiChevronRight size={18} />
			</button>

			<Link to='/page/2538' className='Paginaton__link'>
				<button className='Pagination__btn' type='button'>
					<HiChevronDoubleRight size={18} />
				</button>
			</Link>
		</div>
	);
}

export { PaginationTop };
