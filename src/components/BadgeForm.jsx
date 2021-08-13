import React from 'react'

const BadgeForm = () => {
    const handleChange=(e)=>{
        console.log({
            name:e.target.name,
            value:e.target.value
        });
    }
    const handleSubmit = (e) => { // enviar informacion formulario
        e.preventDefault();
        console.log(e);
    };
    return (
        <div>
            <h1>New Attendant</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="firstName"
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
            </form>
        </div>
    )
}

export default BadgeForm
