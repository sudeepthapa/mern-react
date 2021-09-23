import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addService, deleteService } from '../store/slices/serviceSlice'

import './styles/addService.css'
export default function AddService() {

    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [company, setCompany] = React.useState('')

    const { services } = useSelector( state => state.service);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const service = {title, description, company, id: new Date().toString()}
        dispatch(addService(service))
        setTitle('')
        setDescription('')
        setCompany('')
    }

    const handleDelete = (id) => {
        dispatch(deleteService(id))
    }

    return (
        <div className="form_container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form_group">
                    <label>Service Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} name="title" />
                </div>
                <div className="form_group">
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} name="description" />
                </div>
                <div className="form_group">
                    <label>Company</label>
                    <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} name="company" />
                </div>

                <button className="btn" type="submit">Submit</button>
            </form>

            <div className="services_preview">
                {
                    services.map(service=>{
                        return <div key={service.id} className="service_card">
                           <div className="content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <i>{service.company}</i>
                           </div>
                            <button onClick={()=>handleDelete(service.id)} className="btn">Delete</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
