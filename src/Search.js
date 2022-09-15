import React,{useState} from 'react'
import './Search.css'
// import "react-datepicker/dist/react-datepicker.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from "react-router-dom";

//date picker component
function Search() {
    const navigate=useNavigate();
    const[startDate,setStartDate]=useState(new Date());
    const[endDate, setEndDate]=useState(new Date());

    const selectionRange={
        startDate:startDate,
        endDate:endDate,
        key:"selection",
    };

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
    <div className="search">
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
          <h2>Number of guest
          <PeopleIcon/>
          </h2>
          <input min={0} defaultValue={2} type="number" />
          <button onClick={() => navigate('/search')}>Search Airbnb</button>
    </div>
  )
}

export default Search