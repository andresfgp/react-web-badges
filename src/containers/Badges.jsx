import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/Badges.css';
import confLogo from '../assets/static/badge-header.svg';
import { requestData, getUsers } from '../actions';
import Loader from '../components/Loader';
import Search from '../components/Search';
import BadgesUsers from '../components/BadgesUsers';
import BadgesRAndM from '../components/BadgesRAndM';

const Badges = (props) => {

  const { rickAndMortyState = { data: [] },
    searchResultRAndM = [],
    users = [],
    searchResultBadges = [], getUsers } = props;

  const [nextPage, setNextPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCharacters = async (count) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${count}`, {
        'mode': 'cors',
        'headers': {
          'Access-Control-Allow-Origin': '*',
        },
      });
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

  const handleOnClick = (e) => {
    if (users.length === 0) {
      getUsers('');
    }
    props.history.push('/BadgeNew');
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
          <BadgesUsers stateBadge={searchResultBadges} />
          <BadgesRAndM stateBadge={searchResultRAndM} />
        </div>
      </div>
      <div className='Badges__container'>
        <div className='Badges__buttons'>
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={handleOnClick} className='btn btn-primary'>
            New Badge
          </button>
        </div>
        <div className='Badges__list'>
          <div>
            <BadgesUsers stateBadge={users} />
            <BadgesRAndM stateBadge={rickAndMortyState.data} />
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
    searchResultRAndM: state.searchResultRAndM,
    users: state.users,
    searchResultBadges: state.searchResultBadges,
  };
};

const mapDispatchToProps = {
  requestData,
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Badges);
