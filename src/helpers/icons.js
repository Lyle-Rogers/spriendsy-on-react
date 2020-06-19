import {faCannabis, faJedi, faCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faCannabis, faJedi, faCircle);  
};

export default Icons;