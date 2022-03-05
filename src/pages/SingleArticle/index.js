import { useCallback, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiEndpoints from '../../utils/api-endpoints';
import useApi from '../../Hooks/useApi'
import Bookmark from '../../components/BookmarkBtn';
import BookmarkToast from '../../components/BookmarkToast';
import './index.scss';
import Loader from '../../components/Loader';
import NoResultFound from '../../components/NoResultFound';
import { formatedDate } from '../../utils/helper';

const SingleAritcle = () => {
    const [isBookmark, setIsBookmark] = useState(false);
    const [toast, setToast] = useState('');
    const params = useParams();
    const pathname = params['*'];

    const [result, loading] = useApi(apiEndpoints.single + '&ids=' + pathname);


    const handleBookmark = useCallback((e) => {
        e.preventDefault();
        var bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [],
            position = bookmarks.indexOf(pathname);


        if(position === -1 ) {
            bookmarks.push(pathname);
            setToast(true);
        } else {
            bookmarks.splice(position, 1);
            setToast(false);
        }

        setIsBookmark((prevState) => !prevState );

        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }, [pathname])

    useEffect(() => {
        window.scroll(0, 0); // scroll to top, when we visit single page, scroll stick to bottom, that's why moving it to top

        var bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [],
            position = bookmarks.indexOf(pathname);

        if(position === -1 ) {
            setIsBookmark(false);
        } else {
            setIsBookmark(true);
        }
    }, [pathname])


    if( loading === true ) {
        return <Loader />
    }

    if(!result.length) {
        return (
            <div className='container'><NoResultFound style={{padding: '100px 0'}} /></div>
        )
    }

    let {webPublicationDate, webTitle, fields} = result[0];
    let {headline, body} = fields || {}


    // eslint-disable-next-line no-lone-blocks
    {/* Did not find associated media element in the api, after adding the show-elements param in the api, that's why if there is any relebent image, brought them by pattern match */}
    const mediaPattern = /<figure .+?>.+?<\/figure>/gis;
    const media = [...new Set(body.matchAll(mediaPattern))].map(item => item[0]);

    return (
        <>
            <div className="container">
                <div className="peaks-single-article">

                        <div className={`peaks-single-article-header ${media.length ? 'has-thumb' : ''}`}>
                            <Bookmark title={isBookmark === true ? "Remove Bookmark" : "ADD BOOKMARK" } type="bookmark" handleBookmark={handleBookmark}/>

                            <Link to="/category/sport" className="peaks-single-article-date">{formatedDate(webPublicationDate)}</Link>
                            <Link to="/category/culture"><h1 className="peaks-single-article-title">{webTitle}</h1></Link>
                            {headline && <h2 className="peaks-single-article-headline">{headline}</h2>}
                            <hr className='peaks-single-article-separator' />
                        </div>
                        <div className="peaks-single-article-body">
                            {/* Did not find associated media element in the api, after adding the show-elements param in the api, that's why if there is any relebent image, brought them by pattern match. Example: https://prnt.sc/KUZazPyJqnpq */}
                            {media.length > 0 && <div className="peaks-single-thumbnail">
                                {media.map((item, index) => <div key={index} className="peaks-single-thumbnail-item" dangerouslySetInnerHTML={{__html:  item}}></div>)}
                            </div>}
    
                            <div className='peaks-single-article-content' dangerouslySetInnerHTML={{__html:  body.replace(mediaPattern, '')}}></div>
                        </div>

                    
                </div>
            </div>

            <BookmarkToast title={toast ? "Saved to bookmarks" : "removed from bookmarks"} type={toast} />
        </>
    )
}

export default SingleAritcle;