import trips from "../data/TravelData"
import { Link } from "react-router-dom"

function HomePage() {

  return (
    <div className="container-fluid ">
      <h1 className="text-center text-primary py-3"> Elenco dei viaggi</h1>
      <ul>
        {trips.map(trip => (
          <li className="d-flex justify-content-between my-3 p-3 align-items-center text-bg-light border rounded" key={trip.id}>
            <span className="fw-bold"><i class="bi bi-geo-alt-fill"></i> {trip.destination}</span>
            <span><i class="bi bi-calendar-date"></i> From{trip.startDate} To {trip.endDate}</span>
            <span><i><i class="bi bi-person-fill"></i> {trip.guides}</i></span>
            <Link to={`/travel-page/${trip.id}`} className="btn btn-primary">Visualizza Partecipanti</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
