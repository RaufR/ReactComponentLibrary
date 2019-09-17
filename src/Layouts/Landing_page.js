import React, { Component } from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components'

/* Component imports */
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Wrapper = styled.div`
   width: 100vw;
   height: 2000px;
`

class Landing extends Component {
   render(){
      const { classes, theme } = this.props;
      return(
          <Wrapper>
               <Navbar height={'6vh'}/>
               {/* Takes color as prop */}
          </Wrapper>
      )
   }
}

export default Landing;
