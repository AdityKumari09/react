function Chai({flavour, name}){ // here wrapping flavours inside {} to use js destructing property 

    return (
        // <h2>Hello {flavours.flavour} chai.</h2>
        <h2>Hello {name} your {flavour} chai is ready.</h2>
    )
}

export default Chai