import {useEffect, useState, useCallback} from 'react';
import SortBookmarkSection from "../../layouts/SortBookmarkSection";
import Articles from "../../layouts/Articles";
import Spacer from "../../components/Spacer";
import useApi from "../../Hooks/useApi";
import apiEndpoints from '../../utils/api-endpoints';
import SortableSelect from '../../components/SortableSelect';
import useObserver from '../../Hooks/useObserver';
import Loader from '../../components/Loader';
import './index.scss';

const Bookmark = () => {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const [queryParams, setQueryParams] = useState({
        'order-by': 'newest',
        'page': 1,
        'ids': bookmarks.join(',')
    });
    const params = new URLSearchParams(queryParams);
    
    const [result, loading, hasMore, resetResult] = useApi(apiEndpoints.bookmark + '&' + params.toString());
    const {loadData, lastElement} = useObserver(loading, hasMore);

    useEffect(() => {
        if(loadData === true) {
            setQueryParams(prevState => (
                {
                    ...prevState,
                    'page': prevState.page++
                }
            ));
        }
    }, [loadData]);

    const handleOrderBy = useCallback((value) => {
        resetResult();
        setQueryParams(prevState => (
            {
                ...prevState,
                'order-by': value,
                'page': 1
            }
        ));
    }, [resetResult])

    if(loading === true && queryParams.page === 1) {
        return <Loader />
    }

    return (
        <div className="container peaks-bookmark-page">
            <SortBookmarkSection  title={"All Bookmark"}><SortableSelect orderBy={queryParams['order-by']} setOrderby={handleOrderBy} /></SortBookmarkSection>

            <Articles ref={lastElement} result={result} column="column-3 column-md-2" />

            {loading === true && queryParams.page > 1 ? <Loader size="small" /> : ''}

            <Spacer size="105" />
        </div>
    )
}

export default Bookmark;