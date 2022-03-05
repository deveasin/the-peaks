import './index.scss';
import placeholderLogo from '../../assets/images/placeholder-logo.png';
import { Link } from 'react-router-dom';
import { stripsHtmlTag } from '../../utils/helper';

const Card = ({content = {}, showTrailText = false, enbalePlaceholder = true, showThumbnail = true, size="large"}) => {
    const { fields, webTitle, id } = content,
          {thumbnail, trailText} = fields || {};

    const containerClassess = [
        'peaks-card',
        'peaks-card-' + size
    ]

    return (
        <Link to={`/single/${id}`} className={containerClassess.join(' ')} data-testid="card">
            {showThumbnail ? 
                (thumbnail ? <img className="peaks-card-thumbnail" src={thumbnail} alt="Card Thumbnail"/> : 
                (enbalePlaceholder ? <img className="peaks-card-thumbnail placeholder" src={placeholderLogo} alt="Card Placeholder"/> : ''))
                : ''
            }
            
            <div className={`peaks-card-content ${thumbnail || enbalePlaceholder? 'has-thumb' : 'no-thumb'}`}>
                {webTitle && <h5 className="peaks-card-content-title">{webTitle}</h5>}
                {(showTrailText && trailText) ? <p data-testid="trail-text" className="peaks-card-content-trail-text">{stripsHtmlTag(trailText)}</p> : ''}
            </div>
        </Link>
    )
}

export default Card;