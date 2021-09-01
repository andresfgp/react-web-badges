import React, { useState } from 'react';
import { connect, useStore } from 'react-redux';
import badgeHeader from '../assets/static/badge-header.svg';
import '../assets/styles/BadgesNew.css';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
// import BadgeForm from '../components/BadgeForm';
import { formRequest, addUsers } from '../actions';

const BadgeNew = (props) => {

  const store = useStore();

  function generateUUID() { // Public Domain/MIT
    let d = new Date().getTime();//Timestamp
    let d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16;//random number between 0 and 16
      if (d > 0) { //Use timestamp until depleted
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else { //Use microseconds since page-load if supported
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === 'x' ? r : (r && 0x3 | 0x8)).toString(16);
    });
  }

  const user1 = {
    firstName: 'Andrés',
    lastName: 'García',
    avatarUrl: 'https://s.gravatar.com/avatar/f5e615490b0f1825ee0157aed73da46a?s=80',
    jobTitle: 'Frontend Engineer',
    twitter: 'andfgp',
    id: '',
  };

  const [form, setValues] = useState(user1);

  const handleInput = (e) => { //recopilar informacion de formulario
    form.id = generateUUID();
    // console.log(store.getState());
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // eslint-disable-next-line react/destructuring-assignment
  props.formRequest(form);

  const handleSubmit = (e) => { // enviar informacion formulario
    e.preventDefault();
    if (!store.getState().users.some((item) => item.id === form.id)) {
      props.addUsers(form);
      // console.log(props);
      props.history.push('/');
    }
    // console.log(store.getState());
  };

  return (
    <>
      <Navbar />
      <div className='BadgeNew__hero'>
        <img src={badgeHeader} alt='' className='img-flui' />
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <Badge />
          </div>
          <div className='col-6'>
            <div>
              <h1>New Attendant</h1>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label>First Name</label>
                  <input
                    onChange={handleInput}
                    type='text'
                    name='firstName'
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label>Last Name</label>
                  <input
                    onChange={handleInput}
                    type='text'
                    name='lastName'
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label>Email</label>
                  <input
                    onChange={handleInput}
                    type='email'
                    name='avatarUrl'
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label>Job Tittle</label>
                  <input
                    onChange={handleInput}
                    type='text'
                    name='jobTitle'
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label>Twitter</label>
                  <input
                    onChange={handleInput}
                    type='text'
                    name='twitter'
                    className='form-control'
                  />
                </div>
                {/* eslint-disable-next-line react/button-has-type */}
                <button className='btn btn-primary'> Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
const mapDispatchToProps = {
  formRequest,
  addUsers,
};

export default connect(null, mapDispatchToProps)(BadgeNew);
