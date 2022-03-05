import { useEffect, useCallback } from 'react';

const useSticky = (refEl, offset = 200) => {
    const isSticky = useCallback((e) => {
        if(!refEl.current) { return; }
        const scrollTop = window.scrollY;

        scrollTop > offset ? refEl.current.classList.add('is-sticky') : refEl.current.classList.remove('is-sticky');
    }, [refEl, offset]);

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, [isSticky]);

    return ''
}

export default useSticky;