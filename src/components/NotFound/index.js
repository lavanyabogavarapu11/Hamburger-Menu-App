// Write your code here

import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="notfound-container">
    <Header />
    <div className="not-found-content-container">
      <div className="notfound-responsive-container">
        <img
          className="notfound-img"
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
        />

        <h1 className="error-heading">Lost Your Way</h1>

        <p className="description">
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </div>
    </div>
  </div>
)

export default NotFound
