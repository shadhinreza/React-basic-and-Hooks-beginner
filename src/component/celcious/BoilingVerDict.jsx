
const BoilerVerdict = (props) => {
    let boilOrCool = props.celsius;
    if(boilOrCool>=100){
        return <p>Water is boil</p>
    }else{
        return <p>Water is not boil</p>
    }
}

export default BoilerVerdict;
