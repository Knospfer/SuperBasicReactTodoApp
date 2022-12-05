import { useRef, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import "./Detail.css";

export function Detail() {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const [errorMessage, errorMessageState] = useState("");

  const validateForm = ($event) => {
    $event.preventDefault();

    const name = nameRef.current.value;
    const description = descriptionRef.current.value;

    if (!name || !description) return buildErrorMessage();

    //TODO: salva valore
  };

  const buildErrorMessage = () => {
    let message = "Missing required fields: ";
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    if (!name) message += "Name";
    if (!name && !description) message += ",";
    if (!description) message += "Description";

    errorMessageState(message);
  };

  return (
    <div className="detail-page">
      <div className="header">
        <div className="back-button" onClick={() => navigate(-1)}>
          <IoChevronBackOutline fontSize={24} />
        </div>
        <h1 className="detail-title">{id}</h1>
      </div>

      <form className="page-body" onSubmit={validateForm}>
        <input className="todo-input" placeholder="Name" ref={nameRef} />

        <input
          className="todo-input"
          placeholder="Description"
          ref={descriptionRef}
        />

        {!!errorMessage && <p className="error-message">{errorMessage}</p>}

        <button className="save-button">Save</button>
      </form>
    </div>
  );
}
