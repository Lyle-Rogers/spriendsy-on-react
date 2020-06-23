import {faCannabis, faJedi, faUserEdit} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faCannabis, faJedi, faUserEdit);  
};

export default Icons;