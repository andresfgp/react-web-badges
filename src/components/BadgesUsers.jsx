import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/Badges.css';
import twitter from '../assets/static/twitter.png';

const BadgesUsers = (props) => {

  const { users, searchResultBadges, stateBadge } = props;

  return (

    <>
      {stateBadge === 'searchResultBadges' ? (
        <div className='list-unstyled'>
          {searchResultBadges.length > 0 && (
            searchResultBadges.map((item) => (
              <Link className='text-reset text-decoration-none' to={`/BadgeEdit/${item.id}`} key={item.id}>
                <li className='Badges__list-li'>
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
              </Link>
            )))}
        </div>
      ) : null}

      {stateBadge === 'users' ? (
        <div className='list-unstyled'>
          {users.length > 0 && (
            users.map((item) => (
              <Link className='text-reset text-decoration-none' to={`/BadgeEdit/${item.id}`} key={item.id}>
                <li className='Badges__list-li'>
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
              </Link>
            )))}
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    searchResultBadges: state.searchResultBadges,
  };
};

export default connect(mapStateToProps, null)(BadgesUsers);
