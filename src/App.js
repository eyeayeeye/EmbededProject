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
  height: 350px;
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
  font-size : 72px;
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
  text-align: center;
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
  height : 175px;
  padding :15px;
  text-align: center;
  div{
    display:inline-block;
    margin : 10px;
  }
  button{
    display:inline-block;
  }
  `
const Panel2 = styled.div`
  grid-column : 2;
  grid-row : 3;
  background : rgba(166,166,83,0.5);
  overflow: hidden;
  height : 175px;
  padding :15px;
  text-align: center;
  div{
    display:inline-block;
    margin : 10px;
  }
  button{
    display:inline-block;
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
    border-radius: 7px !important;
    text-align: center;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    color: #757575;
    font-size: 30px;
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
      isOpen: true,
      state: 2,
      //1 == safe
      //2 == thief cao barn
      //3 == deactivate
    }
    this.setActivate = this.setActivate.bind(this)
  }

  setActivate(stage) {
    if (stage == false) {
      this.setState({
        isOpen: stage,
        state: 3
      })
    }
    else {
      this.setState({
        isOpen: stage,
        state: 1
      })
    }
  }
  render() {
    console.log(this.state)
    return (
      <Container className={this.state.isOpen ? "greenBlackground" : "redBlackground"}>
        {/* <Container className="greenBlackground"> */}
        <Image2 src="img/logo.png" align="middle" />
        <Header>Anti Thief</Header>
        <BoxPanel >
          <h1> Status </h1>
          {this.state.state == 1 && (<Image src="img/secure.png" align="middle" />)}
          {this.state.state == 2 && (<Image src="img/warning.gif" align="middle" />)}
          {this.state.state == 3 && (<Image src="img/deactivate.png" align="middle" />)}
        </BoxPanel>
        <Panel>
          <h2>I'm leaving home</h2>
          <Button onClick={() => this.setActivate(true)} > Set State</Button>
        </Panel>
        <Panel2>
          <h2>I'm coming home</h2>
          <Button onClick={() => this.setActivate(false)} > Set State</Button>
        </Panel2>
      </Container >
    );
  }
}

export default App;
