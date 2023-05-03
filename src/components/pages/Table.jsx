import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'



const Table = () => {

    const [collection, setCollection] = useState([])

    const showData = () => {
        const url = 'http://localhost:7080/user'
        fetch(url).then((response) => (
            response.json()
        )).then((data) =>
            setCollection(data.data)
        ).catch((err) =>
            console.log("error")
        )
    }
    console.log(collection)
    useEffect(() => {
        showData()
    }, [])
    return (
        <div>
            <Dashboard />
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className=' py-5 text-success'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>name</th>
                                        <th>email</th>
                                        <th>Date</th>
                                        <th>password</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        collection.map((elem) => {
                                            return (
                                                <tr>
                                                    <td>{elem.name}</td>
                                                    <td>{elem.email}</td>
                                                    <td>{elem.date}</td>
                                                    <td>{elem.password}</td>
                                                    <td>Action</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Table
