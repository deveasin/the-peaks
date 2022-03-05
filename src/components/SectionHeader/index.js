import './index.scss'
const SectionHeader = ({title = '', ...props}) => {
    return <h3 className="peaks-section-header" {...props}>{title}</h3>
}

export default SectionHeader;