import React from 'react';
import styled from 'styled-components'
import { DropdownButton, Dropdown } from 'react-bootstrap'

const colors = {
  primary: 'linear-gradient(to top, #363795, #005C97)',
  secondary: 'linear-gradient(to top, #493240, #FF0099);',
  success: 'linear-gradient(to left, #38ef7d, #11998e)',
  info: 'linear-gradient(to right, #b6fbff, #83a4d4)',
  warning: 'linear-gradient(to left, #f7b733, #fc4a1a)',
  danger: 'linear-gradient(to right, #240b36, #c31432)',
  light: 'linear-gradient(to left, #FFFFFF, #E5E2DE)',
  dark: 'linear-gradient(to top, #434343, #000000)',
  link: '#1c4287'
}

const ButtonWrapper = styled.div`
    /* removing some default css of bootstrap */
    .show>.btn-primary.dropdown-toggle {
          border: 0;
          box-shadow: none;
        :active {
          border: 0;
          box-shadow: none;
        }
        :focus {
          border: 0;
          box-shadow: none;
        }
    }

    .dropdown-menu {
      background: #434343;
      color: white;
    }

    /* customizing the bootstrap button */
    button {
        border: 0;
        font-size: 0.875em;
        font-family: 'Open Sans', sans-serif;
        font-weight: 900;
        height: ${props=> (props.size && props.size==='lg') ? 60 : 
                        (props.size && props.size==='md') ? 45 : 
                        (props.size && props.size==='sm') ? 35 : 35}px;
        width: ${props=> (props.size && props.size==='lg') ? '163px' : 
                        (props.size && props.size==='md') ? '132px' : 
                        (props.size && props.size==='sm') ? '112px' : '112px'};
        background-image: ${props => colors[props.color]};
        color: ${props => (props.color ==='light' || props.color ==='info' || props.color ==='link') ? 
                          'black' :
                          'white' };   
        border-radius: 8px;  
        position: relative;  
        :hover {
          bottom: ${props=> props.disabled ? 0 : 1}px;
          transition: 0.15s ease;
          color: ${props => (props.color ==='light' || props.color ==='info' || props.color ==='link') ? 'black' :'white'};
        }
        :active {
          top: ${props=> props.disabled ? 0 : 1}px;
          border: 0;
          box-shadow: none;
        }
        :focus {
          border: 0;
          box-shadow: none;
        }
    }
`
const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .dropdown-item{
    color: white;
    :active {
      background: #adadad;
    }
  }
  .links {
    padding: 5px;
    text-decoration: none;
    color: white;
    /* color: ${props => colors[props.color+'_border']}; */
  }
`


export default class Sol_btnDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  renderDropdown = () => {
    let items = []
    Object.keys(this.props.items).forEach( key => {
      items.push(
        <Dropdown.Item href={this.props.items[key]}>
          {key}
        </Dropdown.Item>
      )
    })
    return(
          <Items>
            {items}
          </Items>
        );
  }

  render() {
    return (
      <ButtonWrapper size={this.props.size} color={this.props.color} disabled={this.props.disabled}>
        <DropdownButton
          drop={this.props.direction}
          title={this.props.value}
          disabled={this.props.disabled}
        >
          {this.renderDropdown()}
        </DropdownButton>
      </ButtonWrapper>
    )
  }
}
