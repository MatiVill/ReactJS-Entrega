const EjemploProps = ({mensaje, image}) => {

    return(
        <div>
            <h2>{mensaje}</h2>
            <img src={image} style={{width:"100px"}} alt="" />
        </div>
    )
}

export default EjemploProps