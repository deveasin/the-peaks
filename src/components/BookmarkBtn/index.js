import { Link } from 'react-router-dom';
import BookmarkIcon from '../../assets/images/bookmark-icon.png';
import './index.scss'

const Bookmark = ({title="View BOOKMARK", handleBookmark = () => ''}) => {
    return (
        <Link onClick={handleBookmark} to="/bookmarks" className="peaks-bookmark">
            <img src={BookmarkIcon} alt="Bookmark Icon"/>
            {title}
        </Link>
    )
}

export default Bookmark;