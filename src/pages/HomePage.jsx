import trips from "../data/TravelData"
import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import { useState } from "react"

function HomePage() {

  const [tripList, setTripList] = useState(trips)

  return (
    <div className="container-fluid ">
      <nav className="navbar bg-body-tertiary py-4">
        <div className="container-fluid">
          <h1 className="text-primary py-3">Elenco dei viaggi:</h1>
          <SearchBar data={trips} setData={setTripList} search="destination" />
        </div>
      </nav>
      <ul>
        {tripList.map(trip => (
          <li className="d-flex justify-content-between my-3 p-3 align-items-center text-bg-light border rounded" key={trip.id}>
            <span className="fw-bold"><i className="bi bi-geo-alt-fill"></i> {trip.destination}</span>
            <span><i className="bi bi-calendar-date"></i> From{trip.startDate} To {trip.endDate}</span>
            <span><i><i className="bi bi-person-fill"></i> {trip.guides}</i></span>
            <Link to={`/travel-page/${trip.id}`} className="btn btn-primary">Visualizza Partecipanti</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
