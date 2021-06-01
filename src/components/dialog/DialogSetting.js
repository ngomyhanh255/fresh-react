import React, { Component } from 'react';
import {Button,Form} from 'react-bootstrap';
import { FirebaseApp } from '../firebase/FirebaseConfig';
import 'firebase/database';


export default class DialogSetting extends Component {

  constructor(props){
    super(props);
     this.deviceRef = FirebaseApp.database().ref("device");
  }

  onClickHandler = () => {
    
   }  
  
  state={
    hour:0,
    minute:0,
    temperature:0
  }

  componentDidMount() {
    this.deviceRef.on('value',snap=>{
        this.setState({
          hour:snap.val().pump.hour,
          minute:snap.val().pump.minute,
          temperature:snap.val().light.temperature,
        })
    })

  }
  setSetting = () =>{
    this.deviceRef.child('pump').update({
       hour:parseInt(this.state.hour),
       minute:parseInt(this.state.minute),
    });
    this.deviceRef.child('light').update({
      temperature:parseInt(this.state.temperature)
   })
  };

  
    
  render() {
    return (
      <div className='setting'>
                <Form className="pl-5 pr-5">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Hour</Form.Label>
                  <Form.Control 
                    min={0}
                    max={24}
                    onChange={e => this.setState({ hour: e.target.value })}
                    value={this.state.hour}
                    type="number" placeholder="" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Minute</Form.Label>
                  <Form.Control 
                    min={0}
                    max={60}
                    onChange={e => this.setState({ minute: e.target.value })}
                    value={this.state.minute}
                    type="number" placeholder="" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Temperature</Form.Label>
                  <Form.Control 
                    min={-20}
                    max={50}
                    onChange={e => this.setState({ temperature: e.target.value })}
                    value={this.state.temperature}
                    type="number" placeholder="" />
                </Form.Group>
                <div className="text-center mb-3">
                      <Button variant="primary" className="mr-3" type="" onClick={this.setSetting}>
                        Update
                      </Button>
                      <Button variant="warning" type="" onClick={()=>this.onClickHandler()}>
                        Cancel
                      </Button>
                </div>
                
              </Form>

      </div>
    )

  }
}




