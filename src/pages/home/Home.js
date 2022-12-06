import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FabButton } from "./components/fab-button/FabButton";
import { ListTile } from "./components/list-tile/ListTile";
import "./Home.css";

export function Home() {
  const navigate = useNavigate();
  const items = useSelector((state) => state.todoList);

  return (
    <div className="page">
      <div className="title-wrapper">
        <h1 className="title">ToDo App</h1>
      </div>
      <div className="task-wrapper">
        {items.map((i) => (
          <ListTile
            name={i.name}
            description={i.description}
            key={i.id}
            id={i.id}
          />
        ))}
      </div>
      <div className="fab-wrapper">
        <FabButton onPress={() => navigate("/detail")} />
      </div>
    </div>
  );
}
