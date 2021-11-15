import Signup from "./Signup";
import Welcome from "./Welcome";

const Gretting = (props) =>{
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <Welcome />
    }else{
        return <Signup />
    }
}


  export default Gretting;