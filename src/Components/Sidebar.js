import React, {Component} from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import {Collapse, Button, CardBody, Card} from 'reactstrap'
import Indicator from '../Components/SidebarIndicator'

const Wrapper = styled.div `
    width: 250px;
    height: 100%;
    padding-top: 5vh;
    left: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    z-index: 900;
`
const Content = styled.div `
    width: ${props => props.open ? '25%' : '92%'} ;
    height: 95%;
    background-image: linear-gradient(${props => props.color1 || 'red'} , ${props => props.color2 || 'orange'});
    border-radius: 5px;
    box-shadow: 2px 2px 4px 1px #D0D0D0;
    overflow: auto;
    transition: width 1s;
    ::-webkit-scrollbar {
        width: 0px;
    }
`
const List = styled.div `
    min-height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const ListItem = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    width: 100%;
    padding: 10%;
    left: 10%;
    color: rgba(255, 255, 255, 0.5);
    :hover {
        color: rgba(255, 255, 255, 1);
        background-color: rgba(11, 4, 17, 0.04)
    }
`
const CollapseItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    width: 100%;
    padding: 10%;
    left: 10%;
    color: rgba(255, 255, 255, 0.5);
    transform: scale(0.85);
    :hover {
        color: rgba(255, 255, 255, 1);
    }
`
const Icons = styled.div `
    padding-left: 15px;
    width: 40px;
    font-size: 1.4rem;
`
const Texts = styled.div `
    padding-left: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
`
const CollapseIndicator = styled.div `
    width: 30px;
    font-size: 0.7rem;
    padding-left: 30px;
    i {
        transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0deg)'} ;
        transition: transform 0.5s; 
    }
`
const BottomArrow = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 10px;
    padding-right: 20px;
    position: sticky;
    bottom: 0;
    overflow: hidden;
    background-color: ${props => props.color1};
    border-radius: 5px;
`
const BottomIndicator = styled.div`
    color: rgba(255, 255, 255, 0.5);
    :hover {
        color: rgba(255, 255, 255, 1);
        background-color: rgba(11, 4, 17, 0.04)
    }
    i {
        transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0deg)'} ;
        transition: transform 1s; 
    }
`

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      sidebar: false,
      clicked: false,
    };
  }

  toggleCollapse = () => {
    this.setState(state => ({
      collapse: !state.collapse,
      sidebar: false,
    }));
  }

  toggleSidebar = () => {
    this.setState(state => ({
        sidebar: !state.sidebar,
        collapse: false
      }));
  }

  toggleClicked = () => {
    this.setState(state => ({
      clicked: true
    }));
  }

  render() {
    return (
      <Wrapper height={this.props.height}>
        <Content open={this.state.sidebar} color1={this.props.color1} color2={this.props.color2}>
          <List>
            <ListItem onClick={_=>this.toggleClicked(new Date())} clicked={this.props.clicked}>
              <Indicator onClick={this.toggleClicked}/>
              <Icons>
                <i className="far fa-chart-bar"></i>
              </Icons>
              <Texts>Dashboard</Texts>
            </ListItem>
            <ListItem onClick={this.toggleCollapse}>
              <Indicator onClick={this.toggleClicked} clicked={this.state.clicked}/>
              <Icons>
                <i className="far fa-chart-bar"></i>
              </Icons>
              <NavLink to='/Buttons' style={{textDecoration: 'none', color: 'white'}}>
                <Texts>Buttons</Texts>
              </NavLink>
              <CollapseIndicator open={this.state.collapse}>
                <i className="fas fa-chevron-up"></i>
              </CollapseIndicator>
            </ListItem>

            <Collapse isOpen={this.state.collapse}>
              <CollapseItem>
                <Indicator/>
                <Icons>
                  <i className="far fa-chart-bar"></i>
                </Icons>
                <NavLink to='/Buttons' style={{textDecoration: 'none', color: 'white'}}>
                  <Texts>Buttons</Texts>
                </NavLink>
              </CollapseItem>
              <CollapseItem>
                <Indicator/>
                <Icons>
                  <i className="far fa-chart-bar"></i>
                </Icons>
                <NavLink to='/ButtonGroup' style={{textDecoration: 'none', color: 'white'}}>
                  <Texts>Groups</Texts>
                </NavLink>
              </CollapseItem>
              <CollapseItem>
                <Indicator/>
                <Icons>
                  <i className="far fa-chart-bar"></i>
                </Icons>
                <NavLink to='/ButtonDropdown' style={{textDecoration: 'none', color: 'white'}}>
                  <Texts>Dropdowns</Texts>
                </NavLink>
              </CollapseItem>
              <CollapseItem>
                <Indicator/>
                <Icons>
                  <i className="far fa-chart-bar"></i>
                </Icons>
                <NavLink to='/Spinner' style={{textDecoration: 'none', color: 'white'}}>
                  <Texts>Spinners</Texts>
                </NavLink>
              </CollapseItem>
            </Collapse>
            
            <ListItem>
              <Indicator/>
              <Icons>
                <i className="far fa-chart-bar"></i>
              </Icons>
                <Texts>Potatoes</Texts>
            </ListItem>
          </List>
          <BottomArrow color1={this.props.color1}>
            <BottomIndicator onClick={this.toggleSidebar} open={this.state.sidebar}>
                <i className="fas fa-chevron-left"></i>
            </BottomIndicator>
          </BottomArrow>
        </Content>
      </Wrapper>
    )
  }
}

export default Landing;
