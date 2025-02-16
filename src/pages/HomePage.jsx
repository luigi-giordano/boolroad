import trips from "../data/TravelData"
import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import scrollToTop from "../functions/ScrollToTop"
import { useState } from "react"
function HomePage() {

  const [tripList, setTripList] = useState(trips)

  return (
    <div className="container">

      {/* navbar */}
      <nav className="navbar custom-navbar align-items-center justify-content-center justify-content-md-between p-4">
        <div className="section-title mb-md-0 text-center">
          <h1 >Prossime partenze</h1>
        </div>
        <div className="">
          <SearchBar data={trips} setData={setTripList} searchKey1="destination" />
        </div>
      </nav>


      <div className="main-content">
        {tripList.map(trip => (
          <div className="custom-card d-flex justify-content-between align-items-center my-3 py-3 p-4" key={trip.id}>
            <div className="col-6">
              <p className="fw-bold"><i className="bi bi-geo-alt-fill"></i> {trip.destination}</p>
              <p><i className="bi bi-airplane-fill"></i> {trip.startDate} </p>
              <p><i className="bi bi-house-fill"></i> {trip.endDate}</p>
              <p><i><i className="bi bi-person-fill"></i> {trip.guides}</i></p>
            </div>
            <div className="col-6 text-end">
              <Link to={`/travel-page/${trip.id}`} className="btn btn-custom" onClick={scrollToTop}>Visualizza Partecipanti</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
