const Slider = (props) => {
    const sliderStyles = {
        backgroundImage: `url(${props.bgImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    return (
        <div className="c-item container-fluid mx-0 my-0 px-0 py-0"
             style={sliderStyles}>
            {props.children}
        </div>
    )
}

export default Slider;