import {useRef} from 'react';
import useSticky from '../../Hooks/useSticky';
import Logo from '../../components/Logo';
import SearchBox from '../../components/SearchBox';
import './index.scss';

const Header = () => {
    const headerEl = useRef(null);
    useSticky(headerEl, 100);

    return (
        <>
            <header className="peaks-header" ref={headerEl}>
                <div className="container">
                    <div className="row peaks-header-row align-items-center">
                        {/* Main Logo */}
                        <div className="col">
                            <Logo />
                        </div>

                        {/* Search Box */}
                        <div className='col align-self-end'>
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </header>
            <div className='peaks-header-spacer'></div>
        </>
    )
}
export default Header;