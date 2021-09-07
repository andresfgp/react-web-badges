import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Search.css';
import { getSearchVideoBadges, getSearchVideoRAndM } from '../actions';

const Search = (props) => {
  const { getSearchVideoBadges, getSearchVideoRAndM } = props;

  const handleInput = (event) => { //recopilar informacion del search
    getSearchVideoBadges(event.target.value);
    getSearchVideoRAndM(event.target.value);
    //console.log(event.target.value);
  };

  return (
    <>
      <section className='main'>
        <input
          name='search'
          type='text'
          className='input'
          placeholder='Search...'
          onChange={handleInput}
        />
      </section>
    </>
  );
};

const mapDispatchToProps = {
  getSearchVideoBadges,
  getSearchVideoRAndM,
};

export default connect(null, mapDispatchToProps)(Search);
