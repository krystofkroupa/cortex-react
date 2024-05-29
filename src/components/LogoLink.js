import {Link} from "react-router-dom";

export default function Logo({imageName, classname, logoClick}) {

    const path = require(`../assets/${imageName}`)

    return (
        <Link to={"/#main-page"}>
            <img className={classname} src={path}/>
        </Link>
    )
}