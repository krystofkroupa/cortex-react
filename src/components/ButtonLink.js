import {Link} from 'react-router-dom'

export default function ButtonLink({title, link}) {
    return (
        <Link to={link}>
            <button>
                {title}
            </button>
        </Link>
    )
}