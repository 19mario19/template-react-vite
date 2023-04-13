import { Link, useLocation } from "react-router-dom"

function NotFound() {
    let location = useLocation()
  return (
    <div className="notFound">
        <h2>It looks like this [{location.pathname}] page does not exist!</h2>
      <Link to="/">Go back to main page!</Link>
    </div>
  )
}

export default NotFound
