import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./ListTile.css";

export function ListTile(props) {
  const navigate = useNavigate();
  const [showActions, showActionsState] = useState(false);

  return (
    <div
      onClick={() => navigate(`/detail/${props.id}`)}
      className="list-tile"
      onMouseEnter={() => showActionsState(true)}
      onMouseLeave={() => showActionsState(false)}
    >
      <input type="checkbox"></input>
      <div className="content">
        <p className="name"> {props.name}</p>
        <p className="description">{props.description}</p>
      </div>
      {showActions && (
        <>
          <AiOutlineEdit fontSize={"24px"} color={"white"} opacity={0.65} />
          <AiOutlineDelete opacity={0.8} fontSize={"24px"} color={"#ff4164"} />
        </>
      )}
    </div>
  );
}
