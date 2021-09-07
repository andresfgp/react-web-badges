import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/Badges.css';
import confLogo from '../assets/static/badge-header.svg';
import twitter from '../assets/static/twitter.png';
import { requestData } from '../actions';
import Loader from '../components/Loader';
import Search from '../components/Search';

const Badges = (props) => {

  const { users, rickAndMortyState, searchResult } = props;

  const [nextPage, setNextPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCharacters = async (count) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${count}`);
      const data = await response.json();
      (nextPage === 1) ? props.requestData(data.results) : props.requestData([].concat(rickAndMortyState.data, data.results));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters(nextPage);
    setLoading(true);
  }, [nextPage]);

  const handleSubmit = (e) => { // add page
    e.preventDefault();
    setNextPage(nextPage + 1);
  };

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
        <Search />
        <div className='Badges__list'>
          <div className='list-unstyled'>
            {searchResult.length > 0 && (
              searchResult.map((item) => (
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
        </div>
      </div>
      <div className='Badges__container'>
        <div className='Badges__buttons'>
          <Link to='/BadgeNew' className='btn btn-primary'>
            New Badge
          </Link>
        </div>
        <div className='Badges__list'>
          <div>
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
            <div className='list-unstyled'>
              {rickAndMortyState.data.length > 0 && (
                rickAndMortyState.data.map((item) => (
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
          </div>
        </div>
        {error && <p>Something went wrong.</p>}
        {loading && (
          <div className='Badges__buttons-button'>
            <Loader />
          </div>
        )}
        <div className='Badges__buttons-button'>
          {/* eslint-disable-next-line react/button-has-type */}
          <button className='btn btn-primary' onClick={handleSubmit}> More Badges</button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    rickAndMortyState: state.rickAndMortyState,
    users: state.users,
    searchResult: state.searchResult,
  };
};

const mapDispatchToProps = {
  requestData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Badges);
