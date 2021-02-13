import { useEffect } from 'react';

const useOutsideClick = (
	ref: React.RefObject<any>,
	callback: CallableFunction
): void => {
	const handleClick = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	});
};

export default useOutsideClick;
