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



    <div className="container">

      <nav className="navbar custom-navbar justify-content-center justify-content-lg-between p-4">
        <div>
          <h1 className="section-title text-center">Partecipanti al viaggio : {travel.destination}</h1>
        </div>
        <div>
          <SearchBar data={partecipants} setData={setPartecipantsList} searchKey1="firstName" searchKey2="lastName" />
        </div>

      </nav>

      <div className="main-content">
        <div className="custom-accordion">
          {partecipantsList.map(partecipant => (
            <Accordion key={partecipant.id} data={partecipant} />
          ))}
        </div>
        <Link to="/" className="btn btn-custom m-5">Torna all'elenco dei viaggi</Link>
      </div>
    </div >
  )
}

export default TravelPage
