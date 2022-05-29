import React, { useState, useEffect } from 'react'
import './DatePicker.css'
import { DateRangePicker } from "react-date-range";
import PeopleIcon from '@material-ui/icons/People';
import { Button } from "@material-ui/core"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom'



function DatePicker() { 

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  React.useEffect(() => {
    document.getElementsByClassName('rdrDefinedRangesWrapper')[0].style.display = 'none';
    }, []);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const navigate = useNavigate()
function handleSelect(ranges) {
  setStartDate(ranges.selection.startDate)
  setEndDate(ranges.selection.endDate)
}


  return (
    <div className="datePicker">
        <DateRangePicker 
        ranges={[selectionRange]}
        onChange={handleSelect}
        />
      
      <h2>Number of guests <PeopleIcon /></h2>
      <input min={0}
      defaultValue={2}
      type="number" />
    <Button onClick={()=> navigate('/search')}>Search Airbnb</Button>


    </div>
  )
}

export default DatePicker 