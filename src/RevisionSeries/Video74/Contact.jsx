import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [val, setVal] = useState({
    fullname : "",
    email : "",
    phone : "",
    msg : "",
  });

  const inputEvent = (e) =>{
    const {name, value} = e.target;
    setVal((preVal) => {
      return {
        ...preVal, [name]: value
      }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${val.fullname} My email address is ${val.email} My Phone Number is ${val.phone} and here i want to convey a message that ${val.msg}`)
  }
  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>Contact Us</h1>
      </div>

      <div className="container contact_div pb-3">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">

            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label 
                for="exampleFormControlInput1" className="form-label">Name</label>
                <input 
                type="text" 
                className="form-control" 
                id="exampleFormControlInput1" 
                name='fullname'
                value={val.fullname}
                onChange={inputEvent}
                placeholder="Enter Your Full Name"/>
              </div>

              <div className="mb-3">
                <label 
                for="exampleFormControlInput1" className="form-label">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="exampleFormControlInput1" 
                name='email'
                value={val.email}
                onChange={inputEvent}
                placeholder="name@example.com"/>
              </div>

              <div className="mb-3">
                <label 
                for="exampleFormControlInput1" className="form-label">Phone No:</label>
                <input 
                type="number" 
                className="form-control" 
                id="exampleFormControlInput1" 
                name='phone'
                value={val.phone}
                onChange={inputEvent}
                placeholder="+91-0000-000-000"/>
              </div>

              <div className="mb-3">
                <label 
                for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea 
                className="form-control" id="exampleFormControlTextarea1" 
                name='msg'
                value={val.msg}
                onChange={inputEvent}
                rows="3"></textarea>
              </div>

              <div className="col-12">
                <button 
                className="btn btn-outline-primary" 
                type='submit'>
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
