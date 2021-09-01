import React from 'react';
import { connect } from 'react-redux';
import badgeHeader from '../assets/static/badge-header.svg';
import '../assets/styles/components/Badge.css';

const Badge = (props) => {
  const {
    user,
    firstName = user.firstName,
    lastName = user.lastName,
    avatarUrl = user.avatarUrl,
    jobTitle = user.jobTitle,
    twitter = user.twitter,
  } = props;

  return (
    <div className='Badge'>
      <div className='Badge__header'>
        <img src={badgeHeader} alt='Logo' />
      </div>
      <div className='Badge__section-name'>
        <img className='Badge__avatar' src={avatarUrl} alt='Avatar' />
        <h1>
          {firstName}
          <br />
          {lastName}
        </h1>
      </div>
      <div className='Badge__section-info'>
        <h3>{jobTitle}</h3>
        <div>
          @
          {twitter}
        </div>
      </div>
      <div className='Badge__footer'>
        #Developer
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Badge); //connect(props,actions)
