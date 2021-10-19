import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap'
import axios from 'axios'
import './emp.css'
function Joblist() {
    const [job, setjob] = useState([])
    let url = "localhost:8080"
    async function get() {


    }
    useEffect(() => {

        axios.get('http://localhost:8080/job/getAll')
            .then(res => {

                setjob(res.data)
            })

    }, [])

    if (job) {
        return (
            <>
                <div className='main'>
                    <Table>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>

                        </tr>
                        {job.map(j => {
                            return (
                                <tr>
                                    <td key={j.jId}>{j.jId}</td>
                                    <td key={j.dname}>{j.title}</td>
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
                            <th>Title</th>
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
export default Joblist;