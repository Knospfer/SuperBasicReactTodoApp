import { ListTile } from "../list-tile/ListTile";
import "./Home.css";

export function Home() {
  const items = [
    {
      name: "Item 1",
      description: "Lorem ipsum dolor sit ament",
    },
    {
      name: "Item 2",
      description: "Lorem ipsum dolor sit ament",
    },
    {
      name: "Item 3",
      description: "Lorem ipsum dolor sit ament",
    },
  ];

  return (
    <div className="page">
      <div className="title-wrapper">
        <h1 className="title">ToDo App</h1>
      </div>
      <div className="task-wrapper">
        {items.map((i) => (
          <ListTile name={i.name} description={i.description} />
        ))}
      </div>
    </div>
  );
}
