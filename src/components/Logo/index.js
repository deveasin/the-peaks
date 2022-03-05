import LogoImg from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Logo = () => (
    <Link to="/">
        <img className="peaks-logo" src={LogoImg} alt="The Peaks Logo" />
    </Link>
)

export default Logo;