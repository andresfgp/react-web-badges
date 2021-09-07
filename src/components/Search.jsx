import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Search.css';
import { getSearchVideo } from '../actions';

const Search = (props) => {
  const { getSearchVideo } = props;

  const handleInput = (event) => { //recopilar informacion del search
    getSearchVideo(event.target.value);
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
  getSearchVideo,
};

export default connect(null, mapDispatchToProps)(Search);
