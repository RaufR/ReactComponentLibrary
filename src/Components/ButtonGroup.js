import React from 'react';
import styled from 'styled-components'

const colors = {
    primary: 'linear-gradient(to top, #363795, #005C97)',
    secondary: 'linear-gradient(to top, #493240, #FF0099);',
    success: 'linear-gradient(to left, #38ef7d, #11998e)',
    info: 'linear-gradient(to right, #b6fbff, #83a4d4)',
    warning: 'linear-gradient(to left, #f7b733, #fc4a1a)',
    danger: 'linear-gradient(to right, #240b36, #c31432)',
    light: 'linear-gradient(to left, #FFFFFF, #ECE9E6)',
    dark: 'linear-gradient(to top, #434343, #000000)',
    link: '#1c4287',
    primary_border:  '#363795',
    secondary_border:  '#493240',
    success_border: '#38ef7d',
    info_border: '#b6fbff',
    warning_border: '#f7b733',
    danger_border: '#240b36',
    light_border:  '#FFFFFF',
    dark_border:  '#434343',  
  }

const ButtonWrapper = styled.div`
    button {
      height: 100%;
      font-size: 0.85em;
      text-align: center;
    }
    .btn {
        height: ${props=> (props.size && props.size==='lg') ? 45 : 
                          (props.size && props.size==='md') ? 35 : 
                          (props.size && props.size==='sm') ? 28 : 35}px;
        width: 100%;
        text-decoration: none;
        display: flex;
        background-image: ${props => colors[props.color]};
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: white;
        border-radius: 3px;
        position: relative;
        font-family: 'Open Sans', sans-serif;
        font-weight: 900;
        font-size: 0.8em;
        :hover {
          bottom: 1px;
          transition: 0.15s ease;
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.24);
          color: white;
        }
        :active {
          outline: none !important;
          box-shadow: none;
          top: 1px;
        }
        :focus {
          outline: none;
          box-shadow: none;
        }
    }
`
const Wrapper = styled.div`
    height: 35px;
    display: flex;
    flex-direction: row;
`

export default class Sol_btnGroup extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const button = ((() =>{
        let group = []
        Object.keys(this.props.group).forEach( key => {
          group.push(
            <ButtonWrapper size={this.props.size} color={this.props.color} >
                <a href={this.props.group[key]} className='btn' target='_blank'>
                    {key}
                </a>
            </ButtonWrapper>
          )
        })
        return (
            <Wrapper>
                {group}
            </Wrapper>
        )
      })())
    return (
        <div>
            {button}
        </div>
    )
  }
}