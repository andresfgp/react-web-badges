import React from 'react'
import badgeHeader from '../assets/static/badge-header.svg'
import '../assets/styles/Home.css'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="Home__hero">
                <img src={badgeHeader} alt="" className="img-flui" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge />
                    </div>
                    <div className="col-6">
                        <BadgeForm />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
