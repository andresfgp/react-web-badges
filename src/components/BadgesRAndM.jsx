import React from 'react';
import '../assets/styles/Badges.css';

const BadgesRAndM = (props) => {

  const { stateBadge } = props;

  return (
    <>
      <div className='list-unstyled'>
        {stateBadge.length > 0 && (
          stateBadge.map((item) => (
            <a className='text-reset text-decoration-none' href='https://rickandmortyapi.com/' key={item.id}>
              <li className='Badges__list-li'>
                <img src={item.image} alt='logo' />
                <div>
                  <p className='Badges__list-name'>
                    {item.name}
                  </p>
                  <p className='Badges__list-name'>
                    Species:
                    {' '}
                    {item.species}
                  </p>
                  <p className='Badges__list-jobTitle'>
                    Status:
                    {' '}
                    {item.status}
                  </p>
                </div>
              </li>
            </a>
          )))}
      </div>
    </>
  );
};

export default BadgesRAndM;
