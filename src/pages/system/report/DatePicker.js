import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {FirebaseApp} from '../../../components/firebase/FirebaseConfig';
import "react-datepicker/dist/react-datepicker.css";


const DatePickerC = () => {  
    
    
    const [startDate, setStartDate] = useState(new Date());

     var onchange = (dateChoose)=>{
        setStartDate(dateChoose);
        const deviceRef = FirebaseApp.database().ref("data/choose-time/");
        console.log("startDate = ",dateChoose);
        let month=dateChoose.getMonth()+1;
        deviceRef.update({
          day: dateChoose.getFullYear()+"/"+month+"/"+dateChoose.getDate(),
        })
        }
     
      

  
  return (
    <div>
        <DatePicker selected={startDate}  onChange={(date) => onchange(date)} />
    </div>
  );
};

export default DatePickerC;