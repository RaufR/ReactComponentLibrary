import React, {Component} from 'react';
import '../App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 6px;
    font-size: 0.3rem;
    opacity: ${props=> props.clicked ? 1 : 0};
`
export default class Indicator extends Component {
    constructor(props){
        super(props)
        this.state={
            clicked: false
        }
    }
    toggleClicked = () => {
        this.setState(state => ({
            clicked : !state.clicked
        }))
    }
    render(){
        return(
            <Wrapper clicked={this.state.clicked} onClick={this.toggleClicked} onBlur={this.toggleClicked}>
                <i className="fas fa-circle"></i>
            </Wrapper>
        )
    }
}