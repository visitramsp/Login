import React, { useEffect, useRef, useState } from 'react'
import Dashboard from './Dashboard'
import '../style/table.css'


const Table = () => {

    const box1=useRef()
    const box2=useRef()

    const [collection, setCollection] = useState([])
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [date,setDate]=useState("")
    const [userId,setUserId]=useState(null)

    const showData = () => {
        const url = 'https://63ee44a75e9f1583bdbfa17d.mockapi.io/blogs/blogs'
        fetch(url).then((response) => (
            response.json()
        )).then((data) =>
            setCollection(data)
        ).catch((err) =>
            console.log("error")
        )
    }

    const deleteData = (id) => {
        if (window.confirm("you want to sure delete this record")) {
            const url = `https://63ee44a75e9f1583bdbfa17d.mockapi.io/blogs/blogs/${id}`
            fetch(url, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "DELETE"
            }).then((response) =>
                response.json()
            ).then((data) =>
                // alert("data delete success fully")
                window.location.reload()
                // console.log()
            ).catch((err) =>
                console.log("errr")
            )
        }
    }


 const updatedData=(id)=>{
    // console.log(id)
    const upEltement=collection[id-1]
    console.log(upEltement)
    setUserId(id)
    setName(upEltement.name)
    setEmail(upEltement.email)
    setDate(upEltement.date)
    setPassword(upEltement.password)
    box1.current.style.display="none"
    box2.current.style.display="block"
 }




    const updateItems=()=>{
        const user = {
            name: name,
            email: email,
            date:date,
            password: password
          }
          
          const url=`https://63ee44a75e9f1583bdbfa17d.mockapi.io/blogs/blogs/${userId}`
      
          fetch(url,{
            headers:{
              "Content-Type":"application/json"
            },
            method:"PUT",
            body:JSON.stringify(user)
          }).then((response)=>{
            return response.json()
          }).then((data)=>{
            console.log("data updated success")
            setPassword('')
            setEmail('')
            setName('')
            setDate("")
            box1.current.style.display="block"
            box2.current.style.display="none"
            window.location.reload()
          }).catch((err)=>{
            console.log("error")
          })
    }
    console.log(collection)
    useEffect(() => {
        showData()
        box1.current.style.display="block"
        box2.current.style.display="none"
    }, [])
    return (
        <div>
            <Dashboard />
            <div className='container'>
                <div className='row' ref={box1}>
                    <div className='col-12'>
                        <div className=' py-5 text-success'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>name</th>
                                        <th>email</th>
                                        <th>Date</th>
                                        <th>password</th>
                                        <th>Delete</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        collection.map((elem, index) => {
                                            return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{elem.name}</td>
                                                    <td>{elem.email}</td>
                                                    <td>{elem.date}</td>
                                                    <td>{elem.password}</td>
                                                    <td>
                                                        <button className='btn btn-outline-danger' onClick={() => { deleteData(elem.id) }}>delete</button>
                                                    </td>
                                                    <td className='btn btn-outline-success px-3' onClick={() => { updatedData(elem.id) }}>edit</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='row py-4' style={{marginTop:"100px"}} ref={box2}>
                    <div className='col-4 mx-auto updateTable'>
                        <div class="row g-3 align-items-center p-3">
                            <h4 className='text-center text-white text-decoration-underline'>Update data</h4>
                            <div class="">
                                <label for="inputName" className="text-white col-form-label">Name</label>
                                <input type="text" id="inputName" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Name' class="form-control" style={{ width: "380px" }} aria-describedby="passwordHelpInline" />
                            </div>
                            <div class="">
                                <label for="inputEmail" className="text-white col-form-label">Email</label>
                                <input type="email" id="inputEmail" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Name' class="form-control" style={{ width: "380px" }} aria-describedby="passwordHelpInline" />
                            </div>
                            <div class="">
                                <label for="inputDate" className="text-white col-form-label">Date</label>
                                <input type="text" id="inputDate" value={date} onChange={(e)=>{setDate(e.target.value)}} placeholder='Enter Name' class="form-control" style={{ width: "380px" }} aria-describedby="passwordHelpInline" />
                            </div>
                            <div class="">
                                <label for="inputPassword" className="text-white col-form-label">Password</label>
                                <input type="password" id="inputPassword" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Name' class="form-control" style={{ width: "380px" }} aria-describedby="passwordHelpInline" />
                            </div>
                            <div>
                                <button className='btn btn-outline-light' onClick={updateItems}>update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Table
