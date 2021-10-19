import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import './emp.css'
function Emptable() {
    const [emp, setemp] = useState([])
    let url = "localhost:8080"
    const history = useHistory();
    async function get() {


    }
    useEffect(() => {

        axios.get('http://localhost:8080/emp/getAll')
            .then(res => {

                setemp(res.data)
            })

    }, [])

    function edit(eId,name, email, tel, dep, job) {
        history.push('/empedit/' + eId+'/'+name + '/' + email + '/' + tel + '/' + dep + '/' + job)
    }
    function deleteOne(id){
        axios.delete('http://localhost:8080/emp/delOne?id='+id)
        .then(res=>{
            if(res.status==200){
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted',
                  })
                window.location.reload();
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
                window.location.reload();
            }
        })
    }

    if (emp) {
        return (
            <>
                <div className='main'>
                    <Table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Tel.</th>
                        </tr>
                        {emp.map(em => {
                            return (
                                <tr>
                                    <td key={em.name}>{em.name}</td>
                                    <td key={em.email}>{em.email}</td>
                                    <td key={em.telno}>{em.telno}</td>
                                    <td>
                                        <ButtonGroup >
                                            <Button variant="primary" onClick={() => edit(em.eId,em.name, em.email, em.telno, em.job.jId, em.department.dId)}>Edit</Button>
                                            <Button variant="danger" onClick={()=>deleteOne(em.eId)}>Delete</Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            )

                        })}

                        <Button variant="success" onClick={()=>edit()}>Add</Button>
                    </Table>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className='main'>
                    <Table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Tel.</th>
                        </tr>
                        <tr>
                        </tr>
                    </Table>
                </div>
            </>
        );
    }
}

export default Emptable

