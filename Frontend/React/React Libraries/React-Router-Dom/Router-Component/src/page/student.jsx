import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function Student() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    function nextPage() {
        navigate( "/login" , {
            replace:true,
            state: {
                name:"Primov"
            }
        } )
    }

    return (
        <>
            <p>Student id: {id}</p>
            <p>Student age: {searchParams.get("age")}</p>
            <p>Student name: { searchParams.get("name") }</p>
            <button onClick={nextPage}>login</button>
        </>
    )
}