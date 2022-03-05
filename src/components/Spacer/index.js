const Spacer = ({size}) => {
    const styles = {
        height: `${size}px`
    }
    
    return <div data-testid="spacer" style={styles}></div> // It will add the height, so that we can achive the space
}

export default Spacer;