import { Link } from "react-router-dom"
import scrollToTop from "../functions/ScrollToTop";
function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="#"><img src="/img/logo.png" alt="logo" onClick={scrollToTop} /></Link>
      </div>
    </header>

  )
}

export default Header
