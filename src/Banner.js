import React, { useState } from 'react'
import './Banner.css'
import DatePicker from './DatePicker';
import { Button } from "@material-ui/core"




function Banner() {
    const [showDates, setShowDates] = useState(false);


  return (
    <div className="banner">
        <div className="banner__search">
            {showDates && <DatePicker />}
            
            <Button onClick={() => setShowDates(!showDates)} variant="outlined" className="banner__searchButton">
            Search Dates</Button>
        </div>


        <div className="banner__info">
            <h1>Find Your Perfect Summer Getaway</h1>
            <h5>Discover all of the hidden gems near you.</h5>

        <Button
        variant="outlined"
        >Explore Near You</Button>
        </div>
    </div>
  )
}

export default Banner