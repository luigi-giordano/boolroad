import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import trips from "../data/TravelData"
import Accordion from "../components/Accordion"
import SearchBar from "../components/SearchBar"

function TravelPage() {

  const { id } = useParams()
  const travel = trips.find(trip => trip.id === id)
  const partecipants = travel.participants
  const [partecipantsList, setPartecipantsList] = useState(partecipants)

  return (



    <div className="container-fluid">
      {/* <h1 className="text-primary py-3">Elenco partecipanti al viaggio : {travel.destination}</h1> */}
      <nav className="navbar bg-body-tertiary py-4">
        <div className="container-fluid">
          <h1 className="text-primary py-3">Elenco partecipanti al viaggio : {travel.destination}</h1>
          <SearchBar data={partecipants} setData={setPartecipantsList} search="firstName" />
        </div>
      </nav>

      {partecipantsList.map(partecipant => (

        <Accordion key={partecipant.id} data={partecipant} />

      ))}

      <Link to="/" className="btn btn-primary m-5">Torna all'elenco dei viaggi</Link>
    </div>
  )
}

export default TravelPage
