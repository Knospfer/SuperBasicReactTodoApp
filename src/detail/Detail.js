import { useParams } from "react-router-dom";

export function Detail() {
  const { id } = useParams();

  return <p>DETAIL PAGE CON {id}</p>;
}
