import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import trips from "../data/TravelData"
import Accordion from "../components/Accordion"

function TravelPage() {

  const { id } = useParams()
  const travel = trips.find(trip => trip.id === id)
  const partecipants = travel.participants
  const [searchData, setSearchData] = useState('')
  const [partecipantsList, setPartecipantsList] = useState(partecipants)


  console.log(searchData);



  const fetchData = () => {
    const filteredPartecipants = partecipants.filter((partecipant) => {
      return `${partecipant.firstName} ${partecipant.lastName}`.toLowerCase().includes(searchData.toLowerCase())
    })

    setPartecipantsList(filteredPartecipants)
  }

  const handleSearch = (e) => {
    setSearchData(e.target.value)
    fetchData()
  }

  const resetSearchData = () => {
    fetchData()
    setPartecipantsList(partecipants)
    setSearchData('')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (



    <div className="container-fluid">
      {/* <h1 className="text-primary py-3">Elenco partecipanti al viaggio : {travel.destination}</h1> */}
      <nav className="navbar bg-body-tertiary py-4">
        <div className="container-fluid">
          <h1 className="text-primary py-3">Elenco partecipanti al viaggio : {travel.destination}</h1>
          <div className="d-flex" role="search"  >
            <input className="form-control me-2" type="search" placeholder="Cerca un partecipante" aria-label="Search" value={searchData} onChange={handleSearch} />
            <button className="btn btn-outline-danger" onClick={resetSearchData}><i class="bi bi-x-lg"></i></button>
          </div>
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
