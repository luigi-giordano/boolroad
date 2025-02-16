import { Link } from "react-router-dom"
function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Scroll morbido
    });
  };


  return (
    <header>
      <div className="logo">
        <Link to="#"><img src="/img/logo.png" alt="logo" onClick={scrollToTop} /></Link>
      </div>
    </header>

  )
}

export default Header
