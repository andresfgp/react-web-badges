import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/Badges.css';
import confLogo from '../assets/static/badge-header.svg';
import twitter from '../assets/static/twitter.png';
import { requestData } from '../actions';

const Badges = (props) => {
  const { users, rickAndMortyState } = props;

  const fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    props.requestData(data.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
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
            <div className='list-unstyled'>
              {rickAndMortyState.length > 0 && (rickAndMortyState.map((item) => (
                <li className='Badges__list-li' key={item.id}>
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
    rickAndMortyState: state.rickAndMortyState.data,
    user: state.user,
    users: state.users,
  };
};

const mapDispatchToProps = {
  requestData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Badges);
