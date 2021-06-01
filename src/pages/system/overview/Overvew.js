import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Device from '../overview/Device';
 import Weather from '../overview/Weather';
import 'firebase/database';



const OverviewPage = () => {
  return (      
      <div className='overview'>
            <Row>
                <Col>
                    <Weather/>
                </Col>
                <Col>
                    <Row>
                        <Col><Device name="pump"/></Col>
                        <Col><Device name="light"/></Col>
                    </Row>
                    <Row>
                        <Col><Device name="servo"/></Col>
                        <Col></Col>
                    </Row>
                </Col>
            </Row>
      </div> 
  );
}
export default OverviewPage;