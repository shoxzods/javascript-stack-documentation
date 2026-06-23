import { useParams } from "react-router-dom";

export default function One() {
    const { id } = useParams();
    return (
        <p> student: { id }</p>
    )
}