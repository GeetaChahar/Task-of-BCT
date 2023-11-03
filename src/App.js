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
            <h2>Task of BCT</h2>
            <table>
                <tr>
                    <th>User Id</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                <tbody>
                    {data.map((item) => (
                        <tr>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
