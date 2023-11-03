import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        ).then((res) => res.json());
        console.log('response', response);
        setData(response);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="titleBct">Task of BCT</h1>
            <table className="parenTable">
                <tr>
                    <th className="userId">User Id</th>
                    <th className="idheading">ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                <tbody>
                    {data.map((item) => (
                        <tr className="bodyTable">
                            <td className="userId">{item.userId}</td>
                            <td className="idheading">{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
