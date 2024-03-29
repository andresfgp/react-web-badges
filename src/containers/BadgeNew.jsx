import React, { useState } from 'react';
import { connect } from 'react-redux';
import md5 from 'md5';
import badgeHeader from '../assets/static/badge-header.svg';
import '../assets/styles/BadgeNew.css';
import Badge from '../components/Badge';
import { formRequest, addUsers } from '../actions';

const BadgeNew = (props) => {

  const { users = [] } = props;

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
    avatarUrl: 'https://s.gravatar.com/avatar/f5e615490b0f1825ee0157aed73da46a?d=identicon',
    email: 'andres.fgp@hotmail.com',
    jobTitle: 'Frontend Engineer',
    twitter: 'andfgp',
    id: '8000',
    name: '',
  };
  const [form, setValues] = useState(user1);

  const hash = md5(form.email);
  form.avatarUrl = `https://s.gravatar.com/avatar/${hash}?d=identicon`;

  form.name = `${form.firstName} ${form.lastName}`;

  const handleInput = (e) => { //recopilar informacion de formulario
    form.id = generateUUID();
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  // eslint-disable-next-line react/destructuring-assignment
  props.formRequest(form);

  const handleSubmit = (e) => { // enviar informacion formulario
    e.preventDefault();
    try {
      if (!users.some((item) => item.id === form.id)) {
        props.addUsers(form);
        props.history.push('/web-badges');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
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
                    name='email'
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

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDispatchToProps = {
  formRequest,
  addUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(BadgeNew);
