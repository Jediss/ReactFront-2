import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="container-fluid">
        {/* 404 Error Text */}
        <div className="text-center">
            <div className="error mx-auto" data-text={404}>404</div>
                <p className="lead text-gray-800 mb-5">Page Not Found</p>
                <p className="text-gray-500 mb-0">Wygląda na to, że znaleziono glitch w Matrixie..</p>
                <Link to="/">← Back to Dashboard</Link>
        </div>
    </div>

  )
}

export default NotFoundPage