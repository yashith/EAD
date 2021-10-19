import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap'
import axios from 'axios'
import './emp.css'

function Deptable() {
    const [dep, setdep] = useState([])
    let url = "localhost:8080"
    async function get() {


    }
    useEffect(() => {

        axios.get('http://localhost:8080/dep/getAll')
            .then(res => {

                setdep(res.data)
            })

    }, [])

    if (dep) {
        return (
            <>
                <div className='main'>
                    <Table>
                        <tr>
                            <th>Id</th>
                            <th>Department</th>
                            
                        </tr>
                        {dep.map(d => {
                            return (
                                <tr>
                                    <td key={d.dId}>{d.dId}</td>
                                    <td key={d.dname}>{d.dname}</td>
                                    <td>
                                        <ButtonGroup >
                                            <Button variant="danger">Delete</Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            )

                        })}
                        <Button className="addbtn" variant="success">Add</Button>

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
                            <th>Id</th>
                            <th>Department</th>
                            <th></th>
                        </tr>
                        <tr>
                        </tr>
                    </Table>
                </div>
            </>
        );
    }
}

export default Deptable;