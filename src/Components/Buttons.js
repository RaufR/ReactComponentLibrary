import React from 'react';
import styled from 'styled-components'

//we are using https://flatuicolors.com/palette/nl color pallete

const colors = {
  primary: 'linear-gradient(to left, #0652DD, #1B1464)',
  secondary: 'linear-gradient(to left, #D980FA, #FF0099);',
  success: 'linear-gradient(to left, #009432, #A3CB38)',
  info: 'linear-gradient(to right, #0652DD, #5758BB)',
  warning: 'linear-gradient(to left, #F79F1F, #EE5A24)',
  danger: 'linear-gradient(to right, #EA2027, #ED4C67)',
  light: 'linear-gradient(to left, #ede8e8, #ECE9E6)',
  dark: 'linear-gradient(to top, #434343, #000000)',
  link: '#1c4287',
  primary_border:  '#363795',
  secondary_border:  '#FF0099',
  success_border: '#38ef7d',
  info_border: '#b6fbff',
  warning_border: '#f7b733',
  danger_border: '#c31432',
  light_border:  '#ECE9E6',
  dark_border:  '#434343',
}
const ButtonWrapper = styled.div`
    transition: all ease 0.5s;
    width: ${props => (props.size && props.size==='block') ? '100%' : 'auto'};
    button {
      padding: 0;
      height: ${props=> (props.size && props.size==='lg') ? 55 : 
                        (props.size && props.size==='md') ? 45 : 
                        (props.size && props.size==='sm') ? 38 :
                        (props.size && props.size==='block') ? 45 : 35}px;
      width: ${props => (props.size && props.size==='block') ? '100%' : 'auto'};
      font-size: 0.9rem;
      text-align: center;
      padding: 0em 1em 0em 1em;
    }
    .btn {
        background-image: ${props => (props.type && props.type ==='outlined') ? 'rgba(0, 0, 0, 0)' : colors[props.color]};
        border-width: ${props => (props.type && props.type ==='outlined') ? 2 : 0}px;
        border-color: ${props=> colors[props.color+'_border']};
        color: ${props => (props.type && props.type ==='outlined') ? colors[props.color+'_border'] :
                          (props.color ==='light' || props.color ==='info' || props.color ==='link') ? 'black' :
                          'white' };
        border-radius: ${props => props.icon ? 8 :
                                  (props.border && props.border ==='round') ? 22 :
                                  (props.border && props.border ==='square') ? 0 : 8 }px;
        position: relative;
        :hover {
          bottom: ${props=> props.disabled ? 0 : props.color ==='link' ? 0 : 1}px;
          transition: 0.15s ease;
          box-shadow: ${props=> props.disabled ? 0 : props.color ==='link' ? 0 : `0px 8px 16px 0px rgba(0,0,0,0.2)`};
          color: ${props => (props.type && props.type ==='outlined') ? colors[props.color+'_border'] :
                          (props.color ==='light' || props.color ==='info' || props.color ==='link') ? 'black' :
                          'white' };
        }
        :active {
          /* issue */
          color: ${props => (props.color && props.color==='info') ? 
                            (props.disabled || (props.type && props.type==='outlined')) ? 'auto' : 'white' : 'auto' }
          outline: none !important;
          box-shadow: none;
          top: ${props=> props.disabled ? 0 : 1}px;
        }
        :focus {
          color: ${props => (props.color && props.color==='info') ? 'white' : 'auto' }
          outline: none;
          box-shadow: none;
        }
    }
`
const Text = styled.div`
    width: ${props => props.spin &&   props.spinning ? '0px' : '100%'};
    visibility: ${props => props.spin &&  props.spinning ? 'hidden' : 'visible'};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    padding-left: ${props => props.icon ? props.spin ? props.spinning ? 0 : 10 : 10 : 0}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.icon ? props.spin ? 'flex-start' : 'flex-start' : 'center'};
`
const Icon = styled.div`
  height: ${props=> (props.size && props.size==='lg') ? 45 : 
          (props.size && props.size==='md') ? 35 : 
          (props.size && props.size==='sm') ? 28 : 35}px;
  width: ${props => props.icon ? props.spin ? props.spinning ? 100 : 0 : 40 : 0}%;
  visibility: ${props=> props.spin ? props.spinning ? 'visible' : 'hidden' : 'visible' };
  position: relative;
  margin: 0%;
  left: 0;
  border-radius: ${props => props.icon ? '8px 0 0 8px' :
                          (props.border && props.border ==='round') ? '22px 0 0 22px' : '8px 0 0 8px'};
  /* background-color: ${props =>  props.icon ? props.spin || props.outlined ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.24)' : 'rgba(0, 0, 0, 0)'}; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const ContentWrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
    height: 35px;
    display: flex;
    flex-direction: row;
`
class Sol_btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false, 
      spinning: false
    };
  }
  toggle = () => {
    this.setState(
      {isOpen : !this.state.isOpen}
    )
  }
  iconbutton = () => {
    let icon = ''
    if(this.props.spin) {
      icon = 'fas fa-spinner fa-spin fa-fw'
    } else {
      icon = this.props.icon
    }
    return icon
  }
  render() {
    return (
        <ButtonWrapper
            size={this.props.size}
            color={this.props.color}
            border={this.props.border}
            type={this.props.type}
            state={this.props.state}
            icon={this.props.icon}
            disabled={this.props.disabled}
            onClick={this.toggle}
            >
            <button className='btn' disabled={this.props.disabled}>
                <ContentWrapper icon={this.props.icon}>
                  <Icon 
                    icon={this.props.icon} 
                    type={this.props.type} 
                    size={this.props.size} 
                    spin={this.props.spin}
                    outlined={this.props.type}
                    spinning={this.state.isOpen}>
                      <i className={this.iconbutton()}></i>
                  </Icon>
                  <Text 
                    icon={this.props.icon} 
                    size={this.props.size}
                    spin={this.props.spin}
                    spinning={this.state.isOpen}>
                      {this.props.value}
                  </Text>
                </ContentWrapper>
            </button>
        </ButtonWrapper>
    )
  }
}

export { Sol_btn }