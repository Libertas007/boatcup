export const load: import('./$types').LayoutLoad = ({ url }) => {
	const { pathname } = url;

	return {
		pathname
	};
};
