function useObserver(url: string): IntersectionObserver {
	const observer = new IntersectionObserver(entries => {
		entries
			.filter(entry => entry.isIntersecting)
			.forEach(foxImg => {
				const src: string = url;

				foxImg.target.setAttribute('src', src);

				observer.unobserve(foxImg.target);
			});
	});

	return observer;
}

export { useObserver };
