import BookmarkBtn from "../../components/BookmarkBtn";
import './index.scss'

const SortBookmarkSection = ({title, children}) => {
    return (
        <>
            <div className="peaks-sort-bookmark-section">
                {title && <h1 className="peaks-sort-bookmark-title">{title}</h1>}

                <BookmarkBtn/>

                {children}
            </div>
        </>
    )
}

export default SortBookmarkSection;