import './index.scss';

const NoResultFound = (props) => {
    return (
        <div {...props}>
            <p className="peaks-no-result-found" >Sorry, no results found :(</p>
        </div>
    )
}

export default NoResultFound;