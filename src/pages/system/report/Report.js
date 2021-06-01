import React from "react";
import {Row, Col} from 'react-bootstrap';
import ChartsPage from "./Chart";
import DatePickerC from "./DatePicker";
import  "./report.scss";
export default class ReportPage extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
    <div className='report'>
      <div  className='datepickerc'>
       <DatePickerC/>
      </div>
        <Row className="pb-10">
            <Col>
                <h1>Rainfall chart for the day</h1>
                <ChartsPage name="rain"/>
            </Col>
            <Col>
                <h1>Temperature chart for the day</h1>
                <ChartsPage name="temperature"/>
            </Col>
        </Row>
        <Row>
            <Col>
            <h1>Soil moisture chart for the day</h1>
            <ChartsPage name="mh"/>
            </Col>
            <Col>
                <h1 className="Strong">humidity chart for the day</h1>
                <ChartsPage name="humidity"/>
            </Col>
        </Row>
        
    </div>
      
    );
  }
}
