import React, { useState } from 'react'
import { connect } from 'react-redux';
import { formRequest, addUsers } from '../actions';

const BadgeForm = (props) => {

    const [form, setValues] = useState({
        firstName:"Andrés",
        lastName:"García",
        avatarUrl:"https://s.gravatar.com/avatar/f5e615490b0f1825ee0157aed73da46a?s=80",
        jobTitle:"Frontend Engineer",
        twitter:"andfgp"
      });
      
      const handleInput = (e) => { //recopilar informacion de formulario
        setValues({
            ...form,
            [e.target.name]: e.target.value,
        });
    };  
    
    props.formRequest(form);

    const handleSubmit = (e) => { // enviar informacion formulario
        e.preventDefault();
        props.addUsers(form);
        console.log(form);
    };

    return (
        <div>
            <h1>New Attendant</h1>
            <form onSubmit={handleInput}>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        onChange={handleInput}
                        type="text"
                        name="firstName"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        onChange={handleInput}
                        type="text"
                        name="lastName"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        onChange={handleInput}
                        type="email"
                        name="avatarUrl"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Job Tittle</label>
                    <input
                        onChange={handleInput}
                        type="text"
                        name="jobTitle"
                        className="form-control"
                    />
                </div> 
                <div className="form-group">
                    <label>Twitter</label>
                    <input
                        onChange={handleInput}
                        type="text"
                        name="twitter"
                        className="form-control"
                    />
                </div>                 
                <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    formRequest,
    addUsers
  };
  
  export default connect(null, mapDispatchToProps)(BadgeForm);
