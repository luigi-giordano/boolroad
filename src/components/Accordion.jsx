import { useState } from "react"
const Accordion = (props) => {
  const { firstName, lastName, taxCode, phone, email, emergencyContact, gender } = props.data
  const [isOpen, setIsOpen] = useState(false)

  const handlerClick = () => {

    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button onClick={handlerClick} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <span className="fw-bold">{firstName} {lastName}</span>
            </button>
          </h2>
          {isOpen && <div>
            <p>Genere: {gender}</p>
            <p>Codice fiscale:{taxCode}</p>
            <p>Numero di telefono: {phone}</p>
            <p>Indirizzo di posta elettronica: {email}</p>
            <p>Contatto di emergenza: {emergencyContact}</p>
          </div>}
        </div>

      </div>
    </div>

  )
}

export default Accordion
