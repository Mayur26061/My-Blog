import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>Requested page doesn't exist...</p>
            <p>Go back to  <Link to="/">HomePage</Link></p>
        </div>);
}

export default NotFound;