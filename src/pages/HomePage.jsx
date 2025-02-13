import trips from "../data/TravelData"
import { Link } from "react-router-dom"

function HomePage() {

  return (
    <div className="container-fluid ">
      <ul>
        {trips.map(trip => (
          <li className="d-flex justify-content-between my-5" key={trip.id}>
            <span>{trip.destination}</span>
            <p>From {trip.startDate} To {trip.endDate}</p>
            <address><i>{trip.guides}</i></address>
            <Link to={`/travel-page/${trip.id}`} className="btn btn-primary">Visualizza Partecipanti</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
