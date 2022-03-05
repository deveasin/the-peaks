import { useEffect, useState, useRef, useCallback } from 'react';
import SearchIcon from '../../assets/images/search-icon.png';
import useClickOutside from '../../Hooks/useClickOutside';
import { useNavigate, useLocation  } from "react-router-dom";
import './index.scss';


const SearchBox = (props) => {
    const [isClickedOutside] = useClickOutside('.peaks-search-box-label');
    const [inputValue, setInputValue] = useState('');
    const searchInput = useRef();
    const location = useLocation();
    const navigate = useNavigate();

    const handleChange = useCallback((e) => {
        let value = e.target.value;
        
        setInputValue(value);

        
        navigate('/search/'+ value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(location.pathname.includes('/search/')) {
            setInputValue(location.pathname.split('/search/')[1]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if(isClickedOutside === false) {
            searchInput.current.focus();
        }
    }, [isClickedOutside])

    return (
        <div className="peaks-search-box text-right">
            <label data-testid="label" className={`peaks-search-box-label ${(isClickedOutside === false || inputValue.length > 0) ? 'active' : ''}`}> 
                <button className='peaks-search-box-button'><img src={SearchIcon} alt="Search Icon" /></button>
                <input value={inputValue} ref={searchInput} className='peaks-search-box-input' onChange={handleChange} type="search" placeholder='Search all news' />
            </label>
        </div>
    )
};

export default SearchBox;