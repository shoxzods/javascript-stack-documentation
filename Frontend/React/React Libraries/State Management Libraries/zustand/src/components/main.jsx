import { useEffect } from "react";
import { userStore } from "../store/userStore";

const tableHeaders = [
        "id",
        "name",
        "username",
        "email",
        "phone",
        "website",
];


export default function Suspenses() {
    const fetching = userStore((state) => state.fetching);    
    const users = userStore( (state) => state.users );

    useEffect(() => {
        fetching();
    } ,  [])
        
    return (
        <div style={{marginTop:"10px"}}>
            <table border={1} style={{borderCollapse:"collapse"}}>
                <thead>
                    <tr>
                        { tableHeaders.map(
                            (item , index ) => <th style={{padding:"5px" , cursor:"pointer"}} key={index}>{item}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(
                            item => 
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.website}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}