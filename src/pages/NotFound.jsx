import { Link } from "react-router-dom";

export default function NotFound(){
    return <div className="container err">
        <div className="wrap-err">
            <h1 className="title-error">
                Error 404 - Page not found
            </h1>
            <Link className="link-error" to="/">Go to main</Link>
        </div>
    </div>
}