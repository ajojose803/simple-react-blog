import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page your looking for is on a vacation</p>
            <Link id="link" to ="/">Back to home</Link>
        </div>
    );
}
 
export default NotFound;