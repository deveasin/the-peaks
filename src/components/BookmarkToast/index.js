import './index.scss';
import ToastIcon from '../../assets/images/bookmark-icon.png';
import { useEffect, useState } from 'react';

const BookmarkToast = ({title = "", type}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if(type === "") { return ; }
        
        setShow(true);
        setTimeout(() => {
            setShow(prev => !prev);
        }, 1000)
        
    }, [type])

    let containerClass = [
        'peaks-bookmark-toast',
        `peaks-bookmark-toast-type-${type ? "success" : 'danger'}`,
        `peaks-bookmark-toast-${show ? "show": 'hide'}`
    ]

    return (
        <div data-testid="bookmark-toast" className={containerClass.join(' ')}>
            <img className='peaks-bookmark-toast-icon' src={ToastIcon} alt="Toast Icon" />
            {title}
        </div>
    )
}

export default BookmarkToast;