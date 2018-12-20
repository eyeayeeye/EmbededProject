import React, { Component } from 'react';
import styled from 'styled-components';
import config from './config';

const Container = styled.div`
  width:100%;
  display : grid;
  grid-template-columns : 800px 800px;
  grid-gap: 20px 20px;
  min-width : 0;
  min-height : 0;
  font-family: 'Roboto', sans-serif;
`

const Image = styled.img`
  width : 500px;
  min-width : 0;
  min-height : 0;
`

const Image2 = styled.img`
  width : 150px;
  margin-left : 630px;
  margin-top : 50px;
  grid-column :1;
  grid-row : 1;
  text-align : right;
  min-width : 0;
  min-height : 0;
`

const Header = styled.div`

  margin-top:60px;
  margin-bottom : 40px;
  font-size : 64px;
  grid-column :2;
  grid-row : 1;
  // text-align : center;
  font-family: 'Pacifico', cursive;
`
const BoxPanel = styled.div`
  grid-column : 1/ span 2;
  grid-row : 2;
  background : rgba(83,166,166,0.5);
  overflow: hidden;
  height : 450px;
  padding :15px;
  img{
    display:inline-block;
    margin : 10px;
  }
`

const Panel = styled.div`
  grid-column : 1;
  grid-row : 3;
  background : rgba(166,166,83,0.5);
  overflow: hidden;
  height : 150px;
  padding :15px;
  div{
    display:inline-block;
    margin : 10px;
  }
  button{
    display:inline-block;
    margin-left : 20px;
  }
  `
const Panel2 = styled.div`
  grid-column : 2;
  grid-row : 3;
  background : rgba(166,166,83,0.5);
  overflow: hidden;
  height : 150px;
  padding :15px;
  div{
    display:inline-block;
    margin : 10px;
  }
  button{
    display:inline-block;
    margin-left : 20px;
  }
`

const Selector = styled.select`
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    font-size:14px;
    padding : 8px;
    width : 250px;
    color :#4b4f5d;
`;

const Button = styled.button`
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 2px;
    color: #757575;
    font-size: 14px;
    background: #ffffff;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    &:hover{
        background-color : #f6f6f7;
        cursor: pointer;
        
    }
`;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Xinput: "",
      Yinput: "",
      firstData: "",
      secondData: "",
      img: "",
      selected_Xinput: "Overall",
      selected_Yinput: "StudentStaff",
      selected_firstData: "Top 500",
      selected_secondData: "None",
      createdGraph: false,
      isOpen: true,
    }
    this.handleXinput = this.handleXinput.bind(this)
    this.handleYinput = this.handleYinput.bind(this)
    this.handleFirstData = this.handleFirstData.bind(this)
    this.handleSecondData = this.handleSecondData.bind(this)
  }

  async createGraph(Xinput, Yinput, firstData, secondData) {
    let formData = new FormData();
    formData.append('Xinput', Xinput);
    formData.append('Yinput', Yinput);
    formData.append('firstData', firstData);
    formData.append('secondData', secondData);
    var response = await fetch(`${config.apiPath}/5931022121/createGraph`,
      {
        method: 'post',
        body: formData
      })
    var data = await response.json()
    this.setState({
      img: data.path,
      createdGraph: true,
      Xinput: Xinput,
      Yinput: Yinput,
      firstData: firstData,
      secondData: secondData,
    })
    console.log(data)
  }

  XinputList() {
    var returnVal = [];
    var gList = ['Overall', 'Teaching', 'Research', 'Citations', 'IndustryIncome', 'InterOutlook', 'StudentStaff', 'InterStudent', 'Female'];
    for (var i = 0; i < gList.length; i++) {
      returnVal.push(<option value={gList[i]}>{gList[i]}</option>)
    }
    return returnVal
  }

  YinputList() {
    var returnVal = [];
    var gList = ['Overall', 'Teaching', 'Research', 'Citations', 'IndustryIncome', 'InterOutlook', 'StudentStaff', 'InterStudent', 'Female'];
    for (var i = 0; i < gList.length; i++) {
      returnVal.push(<option value={gList[i]}>{gList[i]}</option>)
    }
    return returnVal
  }

  firstDataList() {
    var returnVal = [];
    var gList = ['Top 500', 'Top 200', 'USA', 'China'];
    for (var i = 0; i < gList.length; i++) {
      returnVal.push(<option value={gList[i]}>{gList[i]}</option>)
    }
    return returnVal
  }

  secondDataList() {
    var returnVal = [];
    var gList = ['None', 'Top 200', 'USA', 'China'];
    for (var i = 0; i < gList.length; i++) {
      returnVal.push(<option value={gList[i]}>{gList[i]}</option>)
    }
    return returnVal
  }

  handleXinput(e) {
    this.setState({
      selected_Xinput: e.target.value
    })
  }
  handleYinput(e) {
    this.setState({
      selected_Yinput: e.target.value
    })
  }
  handleFirstData(e) {
    this.setState({
      selected_firstData: e.target.value
    })
  }
  handleSecondData(e) {
    this.setState({
      selected_secondData: e.target.value
    })
  }
  render() {
    console.log(this.state)
    return (
      <Container className={this.state.isOpen ? "greenBlackground" : "redBlackground"}>
        {/* <Container className="greenBlackground"> */}
        <Image2 src="img/logo.png" align="middle" />
        <Header>Anti Thief</Header>
        <BoxPanel >
          <h1> Score Box Plot </h1>
        </BoxPanel>
        <Panel>
          <h2>Thief is coming</h2>
          <div class="input4">
            Second Data : &nbsp;
          <Selector value={this.state.selected_secondData} onChange={this.handleSecondData}>
              {this.secondDataList()}
            </Selector>
          </div>
          <Button onClick={() => this.createGraph(this.state.selected_Xinput, this.state.selected_Yinput, this.state.selected_firstData, this.state.selected_secondData)} > Show Pls</Button>
        </Panel>
        <Panel2>
          <h2>Thief is coming</h2>
          <div class="input4">
            Second Data : &nbsp;
          <Selector value={this.state.selected_secondData} onChange={this.handleSecondData}>
              {this.secondDataList()}
            </Selector>
          </div>
          <Button onClick={() => this.createGraph(this.state.selected_Xinput, this.state.selected_Yinput, this.state.selected_firstData, this.state.selected_secondData)} > Show Pls</Button>
        </Panel2>
      </Container >
    );
  }
}

export default App;
