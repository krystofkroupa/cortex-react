import {Link} from "react-router-dom";

export default function Logo({imageName, classname}) {

    const path = require(`../assets/${imageName}`)

    return (
        <Link to={"/"}>
            <img className={classname} src={path}/>
        </Link>
    )
}