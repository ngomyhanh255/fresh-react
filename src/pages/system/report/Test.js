import React from "react";
import { Line } from "react-chartjs-2";
import {FirebaseApp} from '../../../components/firebase/FirebaseConfig';
import { MDBContainer } from "mdbreact";

export default class Test extends React.Component {
  constructor(props){
    super(props);
    
    this.chooseref =  FirebaseApp.database().ref("data/choose-time/day");
    this.rainRef = FirebaseApp.database().ref("data/2021/12/24/").child(this.props.name);
    
  }


  componentDidMount() {
    this.chooseref.on('value',snap=>{
       let ref = "data/"+snap.val();
       console.log("ref = ",ref);
       this.rainRef = FirebaseApp.database().ref(ref).child(this.props.name);

       this.rainRef.once('value',snap=>{
        console.log("data firebase = ",snap.val());
        let label="";
        if (this.props.name=="rain"){
          label="ml";
        }
        if (this.props.name=="mh"){
          label="%";
        }
        if (this.props.name=="humidity"){
          label="%";
        }
        if (this.props.name=="temperature"){
          label="^C";
        }
        
        this.setState({
          dataLine: {
            labels: ["1", "2", "3", "4", "5", "6", "7","8", "9", 
            "10", "11", "12", "13", "14", "15", "16", "17","18", "19", "20", "21", "22", "23", "24"],
            datasets: [
              {
                label: label,
                fill: true,
                lineTension: 0.3,
                backgroundColor: "rgba(225, 204,230, .3)",
                borderColor: "rgb(205, 130, 158)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgb(205, 130,1 58)",
                pointBackgroundColor: "rgb(255, 255, 255)",
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgb(0, 0, 0)",
                pointHoverBorderColor: "rgba(220, 220, 220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: snap.val()
              },
              
            ]
          }
        })
      })


  })
    

    this.rainRef.on('value',snap=>{
      console.log("data firebase = ",snap.val());
      let label="";
      if (this.props.name=="rain"){
        label="ml";
      }
      if (this.props.name=="mh"){
        label="%";
      }
      if (this.props.name=="humidity"){
        label="%";
      }
      if (this.props.name=="temperature"){
        label="^C";
      }
      
      this.setState({
        dataLine: {
          labels: ["1", "2", "3", "4", "5", "6", "7","8", "9", 
          "10", "11", "12", "13", "14", "15", "16", "17","18", "19", "20", "21", "22", "23", "24"],
          datasets: [
            {
              label: label,
              fill: true,
              lineTension: 0.3,
              backgroundColor: "rgba(225, 204,230, .3)",
              borderColor: "rgb(205, 130, 158)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgb(205, 130,1 58)",
              pointBackgroundColor: "rgb(255, 255, 255)",
              pointBorderWidth: 10,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgb(0, 0, 0)",
              pointHoverBorderColor: "rgba(220, 220, 220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: snap.val()
            },
            
          ]
        }
      })
    })

   
  }  
  

  state = {
    dataLine: {
      labels: ["1", "2", "3", "4", "5", "6", "7","8", "9", 
      "10", "11", "12", "13", "14", "15", "16", "17","18", "19", "20", "21", "22", "23", "24"],
      datasets: [
        {
          label: "Rain in current day",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
        },
        
      ]
    }
  };

  

  render() {
    return (
      <MDBContainer>
      <Line data={this.state.dataLine} options={{ responsive: true }} />
    </MDBContainer>
    );
  }
}
