import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Badges.css';
import twitter from '../assets/static/twitter.png';

const BadgesUsers = (props) => {

  const { stateBadge } = props;

  return (

    <>
      <div className='list-unstyled'>
        {stateBadge.length > 0 && (
          stateBadge.map((item) => (
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
    </>
  );
};

export default BadgesUsers;
