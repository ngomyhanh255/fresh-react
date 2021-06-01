import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import pump from '../../../images/pump.png';
import { FirebaseApp } from '../../../components/firebase/FirebaseConfig';
import 'firebase/database';
import './overview.scss';

export default class Device extends Component {
  constructor(props) {
    super(props);
    this.deviceRef = FirebaseApp.database().ref("device").child(this.props.name);
  }
  setDB(text) {
    this.itemRef.push({
      React: text,
    })
  }

  setMode(mode) {
    if (mode == "auto") {
      this.deviceRef.update({
        mode: "no-auto",
      })
    }
    else {
      this.deviceRef.update({
        mode: "auto",
      })
    }
  }
  setAction(action) {
    if (action == "on") {
      this.deviceRef.update({
        action: "off",
      })
    }
    else {
      this.deviceRef.update({
        action: "on",
      })
    }
  }

  state = {
    name: this.props.name,
    action: "",
    mode: ""
  }


  componentDidMount() {
    this.deviceRef.on('value', snap => {
      console.log(snap.val());
      this.setState({
        action: snap.val().action,
        mode: snap.val().mode
      })
    });

    if (this.props.name === "pump") {
      this.state.name = "Máy bơm"
    }
    else if (this.props.name === "light") {
      this.state.name = "Đèn vườn"
    }
    else if (this.props.name === "servo") {
      this.state.name = "Che mưa"
    };


  }

  render() {
    return (
      <div className='device'>
        <Card className="cart__device text-center m-4 shadow">
            <Card.Img className='cart__img' variant="top" src={pump} /> 
            <Card.Body> 
                <Card.Title className=" cart__title ">{this.state.name}</Card.Title>
                <div>
               
                      {this.state.mode=="auto" ? 
                      <Button variant="success" onClick={()=>this.setMode("auto")} className="mr-2">AUTO</Button>:
                      <Button variant="danger" onClick={()=>this.setMode("no-auto")} className="mr-2">AUTO</Button>
                      }
                      {(this.state.mode=="auto") && (this.state.action=="on") &&
                          (<Button variant="success" disabled>ON</Button>)
                      }
                      {(this.state.mode=="auto") && (this.state.action=="off") &&
                          (<Button variant="danger" disabled>OFF</Button>)
                      }
                      {(this.state.mode=="no-auto") && (this.state.action=="on") &&
                          (<Button variant="success" onClick={()=>this.setAction("on")}>ON</Button>)
                      }
                      {(this.state.mode=="no-auto") && (this.state.action=="off") &&
                          (<Button variant="danger"  onClick={()=>this.setAction("off")}>OFF</Button>)
                      }
                 
                  
                </div>
            </Card.Body>
            </Card>
        

      </div>
    )

  }
}




