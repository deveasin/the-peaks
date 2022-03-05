import './index.scss';

const Loader = ({size = 'large'}) => {

    const containerClass = [
        'peaks-loader',
        'peaks-loader-' + size
    ];

    return (
        <div className={containerClass.join(' ')}>
            <div className="peaks-loader-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader;