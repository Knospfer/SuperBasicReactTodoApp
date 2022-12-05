import "./ListTile.css";

export function ListTile(props) {
  return (
    <div className="list-tile">
      <input type="checkbox"></input>
      <div className="content">
        <p className="name"> {props.name}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
