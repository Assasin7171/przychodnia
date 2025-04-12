const Slider = (props) => {
    return (
        <div className="slider" style={{backgroundImage: `url(${props.bgImage})`}}>
            {props.children}
        </div>
    )
}

export default Slider;