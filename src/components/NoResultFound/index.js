import './index.scss';

const NoResultFound = (props) => {
    return (
        <div data-testid="no-result-found" {...props}>
            <p className="peaks-no-result-found" >Sorry, no results found :(</p>
        </div>
    )
}

export default NoResultFound;