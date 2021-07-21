import React, { Component } from 'react';
import './overview.scss';
import 'firebase/database';
import {FirebaseApp} from '../../../components/firebase/FirebaseConfig';

export default class Weather extends Component{
    constructor(props){
        super(props);
         this.dht11Ref = FirebaseApp.database().ref("sensor");
         this.mhRef = FirebaseApp.database().ref("sensor/mh/");

         this.timeRef = FirebaseApp.database().ref("time");
      }
    
      state={
        humidity: 0,
        temperature:0,
        soil:0
      }


      componentDidMount() {
        this.dht11Ref.on('value',snap=>{
            this.setState({
                humidity:snap.val().dht11.humidity,
                temperature:snap.val().dht11.temperature,
                soil:snap.val().mh.value,
            })
        })

        
        setInterval(() => {
        let today = new Date(),
        timeC = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        this.setState({
            time : timeC,
        })
        this.timeRef.update({
             year    : today.getFullYear(),
             month   : today.getMonth()+1,
             date    : today.getDate(),
             hour    : today.getHours(),
             minute  : today.getMinutes(),
             second  : today.getSeconds(),

          })
        }, 1000)

        
      }

      
    
    render(){
        return (
            <div className='weather'>
                <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
                          <div className="row d-flex justify-content-center px-3">
                              <div className="card">
                                  <h2 className="ml-auto mr-4 mt-3 mb-0">Temperature</h2>
                                  <p className="ml-auto mr-4 mb-0 med-font">Humidity</p>
                                  <h1 className="ml-auto mr-4 large-font">{this.state.temperature}&#176;C/{this.state.humidity}%</h1>
                                  <p className="time-font mb-0 ml-4 mt-auto">{this.state.time} <span className="sm-font"></span></p>
                                  <p className="ml-4 mb-4">Soil moisture, {this.state.soil}%</p>
                              </div>
                          </div>
                      </div>
            </div>
        );
    }
}
