import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/Badges.css';

const BadgesRAndM = (props) => {

  const { rickAndMortyState, searchResultRAndM, stateBadge } = props;

  return (
    <>
      {stateBadge === 'searchResultRAndM' ? (
        <div className='list-unstyled'>
          {searchResultRAndM.length > 0 && (
            searchResultRAndM.map((item) => (
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
      ) : null}

      {stateBadge === 'rickAndMortyState' ? (
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
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    rickAndMortyState: state.rickAndMortyState,
    searchResultRAndM: state.searchResultRAndM,
  };
};

export default connect(mapStateToProps, null)(BadgesRAndM);
