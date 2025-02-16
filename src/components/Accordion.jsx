import { useState } from "react"
const Accordion = (props) => {
  const { firstName, lastName, taxCode, phone, email, emergencyContact, gender } = props.data
  const [isOpen, setIsOpen] = useState(false)

  const handlerClick = () => {

    setIsOpen(!isOpen)
  }

  return (
    <>

      <div className="accordion-item my-3 p-4">
        <h2 className="accordion-header">
          <button onClick={handlerClick} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            <div className="d-flex w-100 justify-content-between">
              <span>{firstName} {lastName}</span>
              <span>{isOpen ? <i className="bi bi-dash"></i> : <i className="bi bi-plus"></i>}</span>
            </div>
          </button>
        </h2>
        {isOpen && <div className="accordion-body">
          <p><span className="info">Genere:</span> <span>{gender}</span></p>
          <p><span className="info">Codice fiscale:</span> <span>{taxCode}</span></p>
          <p><span className="info">Numero di telefono:</span> <span>{phone}</span></p>
          <p><span className="info">Indirizzo di posta elettronica: </span><span>{email}</span></p>
          <p><span className="info">Contatto di emergenza:</span> <span>{emergencyContact}</span></p>
        </div>}
      </div >


    </>

  )
}

export default Accordion
