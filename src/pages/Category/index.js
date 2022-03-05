import {useEffect, useState, useCallback} from 'react';
import SortBookmarkSection from "../../layouts/SortBookmarkSection";
import Articles from "../../layouts/Articles";
import Spacer from "../../components/Spacer";
import useApi from "../../Hooks/useApi";
import { categoryEndpoint } from '../../utils/api-endpoints';
import SortableSelect from '../../components/SortableSelect'
import { useParams } from "react-router-dom";
import useObserver from '../../Hooks/useObserver';
import Loader from '../../components/Loader';

const Category = () => {
    const {name} = useParams();
    const [queryParams, setQueryParams] = useState({
        'order-by': 'newest',
        'page': 1,
        'section': name
    });
    const params = new URLSearchParams(queryParams);
    
    const [result, loading, hasMore, resetResult] = useApi(categoryEndpoint + '&' + params.toString());
    const {loadData, lastElement} = useObserver(loading, hasMore);
   

    useEffect(() => {
        resetResult();

        setQueryParams(prevState => (
            {
                ...prevState,
                'section': name,
                'page': 1
            }
        ));
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

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
        <div className="container">
            <SortBookmarkSection  title={name}><SortableSelect orderBy={queryParams['order-by']} setOrderby={handleOrderBy} /></SortBookmarkSection>

            <Articles ref={lastElement} result={result} column="column-3 column-md-2" />

            {loading === true && queryParams.page > 1 ? <Loader size="small" /> : ''}

            <Spacer size="105" />
        </div>
    )
}

export default Category;