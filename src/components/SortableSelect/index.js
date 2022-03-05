import {useState, useMemo, useCallback, memo} from 'react';
import './index.scss';
import arrowUp from '../../assets/images/arrow-up.png';
import arrowDown from '../../assets/images/arrow-down.png';
import useClickOutside from '../../Hooks/useClickOutside';

const SortableSelect = ({setOrderby, orderBy, option = []}) => {
    const [value, setValue] = useState(orderBy || 'newest');
    const [isClickOutside] = useClickOutside('.peaks-select-header');

    const options = useMemo(() => {
        if(option.length) {
            return option;
        }
        return [
            {
                value: 'newest',
                label: "Newest First"
            },
            {
                value: 'oldest',
                label: "Oldest First"
            },
        ]
    }, [option]);

    const findOptionLabel = useCallback(() => {
        let findOption = options.find(option => option.value === value);
        if(findOption) {
            return findOption.label;
        }
        return null;
    }, [options, value])

    const handleClick = useCallback((selectOptionValue) => {
        setOrderby(selectOptionValue);
        setValue(selectOptionValue);
    }, []);

    return (
        <div data-testid="sortable-select" className={`peaks-select-wrapper ${isClickOutside === false ? 'expanded' : ''}`}>
            <div data-testid="sortable-header" className="peaks-select-header">
                {findOptionLabel()} 
                <img className="peaks-select-header-icon" src={isClickOutside === false  ? arrowUp : arrowDown} alt="select arrow icon" />
            </div>

            <ul className="peaks-select-list">
                {options.map(option => (
                    <li onClick={() => handleClick(option.value)} key={option.value} className={`peaks-select-list-item ${option.value == value ? 'ative' : ''}`} data-value={option.value}>{option.label}</li>
                ))}
            </ul>
        </div>
    )
}

export default memo(SortableSelect);