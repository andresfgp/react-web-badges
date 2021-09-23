import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import md5 from 'md5';
import badgeHeader from '../assets/static/badge-header.svg';
import '../assets/styles/BadgeEdit.css';
import Badge from '../components/Badge';
import { formRequest, getDataId, editDataId, eraseDataId } from '../actions';

const BadgeEdit = (props) => {

  const { user, users } = props;

  // eslint-disable-next-line react/destructuring-assignment
  const { id } = props.match.params;

  const userID = users.filter((item) => ((item.id === id)));

  const [formID, setValues] = useState(userID[0]);

  const hash = md5(user.email);
  user.avatarUrl = `https://s.gravatar.com/avatar/${hash}?d=identicon`;

  user.name = `${user.firstName} ${user.lastName}`;

  const handleInput = (e) => { //recopilar informacion de formulario
    setValues({
      ...formID,
      [e.target.name]: e.target.value,
    });
  };

  // eslint-disable-next-line react/destructuring-assignment
  props.formRequest(formID);

  const fetchData = () => {
    try {
      props.getDataId(id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => { // enviar informacion formulario
    e.preventDefault();
    props.editDataId(user);
    props.history.push('/web-badges');
  };

  const handleErase = (itemId) => {
    props.eraseDataId(itemId);
    props.history.goBack();
  };

  // document.getElementsByClassName('form-control').value = 'Hola';

  return (
    <>
      <div className='BadgeEdit__hero'>
        <img src={badgeHeader} alt='' className='img-flui' />
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <Badge />
          </div>
          <div className='col-6'>
            <div>
              <h1>Edit Attendant</h1>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label>First Name</label>
                  <input
                    onChange={handleInput}
                    type='text'
                    name='firstName'
                    className='form-control'
                    defaultValue={formID.firstName}
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
                    defaultValue={formID.lastName}
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
                    defaultValue={formID.email}

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
                    defaultValue={formID.jobTitle}
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
                    defaultValue={formID.twitter}
                  />
                </div>
                {/* eslint-disable-next-line react/button-has-type */}
                <button className='btn btn-primary'> Edit</button>
                {/* eslint-disable-next-line react/button-has-type */}
                <button className='btn btn-danger ' onClick={() => handleErase(id)}> Erase</button>
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
    user: state.user,
    users: state.users,
  };
};
const mapDispatchToProps = {
  formRequest,
  getDataId,
  editDataId,
  eraseDataId,
};

export default connect(mapStateToProps, mapDispatchToProps)(BadgeEdit);
