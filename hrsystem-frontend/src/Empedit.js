import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
import './empedit.css'

function Empedit(props) {
    const [dep, setdep] = useState([])
    const [job, setjob] = useState([])
    const history = useHistory();
    useEffect(() => {
        axios.get('http://localhost:8080/dep/getAll')
            .then(res => {
                setdep(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))

        axios.get('http://localhost:8080/job/getAll')
            .then(res => {
                setjob(res.data)
                console.log(res.data)
            })

    }, [])
    
    function handleSubmit(e){
        e.preventDefault()
        const formdata =new FormData(e.target)
        if(props.match.params.id != 'undefined'){
            formdata.append('id',props.match.params.id)
            axios.put('http://localhost:8080/emp/updateOne',formdata)
            .then(res=>{
                if(res.status==200){
                    Swal.fire({
                        icon: 'success',
                        title: 'Updated',
                      })
                    history.push('/')
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                      })
                }
            })
        }
        else if(props.match.params.id === 'undefined'){
            axios.post('http://localhost:8080/emp/addOne',formdata)
            .then(res=>{
                if(res.status==200){
                    Swal.fire({
                        icon: 'success',
                        title: 'Created',
                      })
                    history.push('/')
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                      })
                }
            })
        }

    }

    return (
        <div className="main">
            <Form className="form" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" defaultValue={props.match.params.name}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email"  defaultValue={props.match.params.email}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tel-no.</Form.Label>
                    <Form.Control type="text" name="telno" defaultValue={props.match.params.tel}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Department</Form.Label>
                    <Form.Control as="select" name="dId" defaultValue={props.match.params.dep}>
                        {
                            dep.map(dep => {
                                return (
                                    <option value={dep.dId}>{dep.dname}</option>
                                )
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Role</Form.Label>
                    <Form.Control as="select" name="jId" defaultValue={props.match.params.job}>
                        {
                            job.map(job => {
                                return (
                                    <option value={job.jId}>{job.title}</option>
                                )
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <div className="butngrp">
                    <Button className="btnstyle" variant="secondary">Cancel</Button>
                    <Button className="btnstyle" variant="success" type="submit">Save</Button>

                </div>
            </Form>
        </div>
    );
}

export default Empedit;