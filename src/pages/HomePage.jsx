import trips from "../data/TravelData"
import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import { useState } from "react"

function HomePage() {

  const [tripList, setTripList] = useState(trips)

  return (
    <div className="container">
      <nav className="trasparente navbar justify-content-center justify-content-md-between p-3">
        <div>
          <h1 className=" py-3">Prossime partenze</h1>
        </div>
        <div>
          <SearchBar data={trips} setData={setTripList} search="destination" />
        </div>
      </nav>
      <div>
        {tripList.map(trip => (
          <div className="trasparente row justify-content-between my-3 p-3 align-items-center border rounded" key={trip.id}>
            <div className="col-6">
              <p className="fw-bold"><i className="bi bi-geo-alt-fill"></i> {trip.destination}</p>
              <p><i className="bi bi-calendar-date"></i> From{trip.startDate} To {trip.endDate}</p>
              <p><i><i className="bi bi-person-fill"></i> {trip.guides}</i></p>
            </div>
            <div className="col-6 text-end">
              <Link to={`/travel-page/${trip.id}`} className="btn">Visualizza Partecipanti</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
