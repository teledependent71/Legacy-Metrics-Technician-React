import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Legacy Metrics Technician</title>
        <meta property="og:title" content="Legacy Metrics Technician" />
      </Helmet>
    </div>
  )
}

export default Home
