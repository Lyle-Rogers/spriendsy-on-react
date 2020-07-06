import {faCannabis, faJedi, faUserEdit, faPlaceOfWorship, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faCannabis, faJedi, faUserEdit, faPlaceOfWorship, faSignOutAlt, );  
};

export default Icons;