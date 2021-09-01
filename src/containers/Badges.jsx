import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/styles/Badges.css';
import confLogo from '../assets/static/badge-header.svg';
import twitter from '../assets/static/twitter.png';

const Badges = (props) => {
  const { users } = props;
  return (
    <>
      <Navbar />
      <div className='Badges'>
        <div className='Badges__hero'>
          <div className='Badges__container'>
            <img className='Badges_conf-logo' src={confLogo} alt='Conf Logo' />
          </div>
        </div>
      </div>
      <div className='Badges__container'>
        <div className='Badges__buttons'>
          <Link to='/BadgeNew' className='btn btn-primary'>
            New Badge
          </Link>
        </div>

        <div className='Badges__list'>
          <div className='Badges__container'>
            <div className='list-unstyled'>
              {users.length > 0 && (
                users.map((item) => (
                  <li className='Badges__list-li' key={item.id}>
                    <img src={item.avatarUrl} alt='logo' />
                    <div>
                      <p className='Badges__list-name'>
                        {item.firstName}
                        {' '}
                        {item.lastName}
                      </p>
                      <p className='Badges__list-twitter'>
                        <img src={twitter} alt='twitter' />
                        @
                        {item.twitter}
                      </p>
                      <p className='Badges__list-jobTitle'>
                        {item.jobTitle}
                      </p>
                    </div>
                  </li>
                )))}
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

export default connect(mapStateToProps, null)(Badges);
