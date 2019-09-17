import React, { Component } from 'react'
import styled from 'styled-components'

import {Sol_btn} from '../Components/Buttons'

const Wrapper = styled.div`
    background: #F5F6FA;
    padding: 04em 0em 0em 16em;
    width: 100%;
    min-height: 100vh;
`
const ButtonHolder = styled.div`
    width: 96%;
    background: #FFFFFF;
    min-height: 10vh;
    border-radius: 0.3em;
    box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.1);
    .sizes {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    overflow: hidden;

`

const Holder = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const Text = styled.div`
    padding: 2% 0% 0% 5%;
    font-family: 'Montserrat';
    font-size: ${props=> props.size}em;
`
const Hr = styled.hr`
    margin-top: 0.5em;
    width: 95%;
    text-align: center;
    border-width: 0.05em;
    border-color: black;
`
const Btn_Wrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 0 0 10px;
    @media (min-width: 992px) {
        flex-direction: row;
    }
    @media (max-width: 992px) {
        flex-direction: column;
    }
`

const Br = styled.div`
    @media (min-width: 992px) {
        padding-left: 0.5%;
    }
    @media (max-width: 992px) {
        padding-bottom: 2%;
    }
`


export default class SpinnerPage extends Component {
    render(){
        return(
            <Wrapper>
                <ButtonHolder>
                    <Text size='1'>Spinner Buttons</Text>
                    <Hr/>
                    <Btn_Wrapper>
                        <Sol_btn
                            size='sm'
                            color='primary'
                            value='Click me'
                            spin='spin'
                        />
                        <Br/>
                        <Sol_btn
                            size='md'
                            color='secondary'
                            value='Click me'
                            spin='spin'
                        />
                        <Br/>
                        <Sol_btn
                            size='lg'
                            color='success'
                            value='Click me'
                            spin='spin'
                        />
                        <Br/>
                    </Btn_Wrapper>
                    <br/>
                </ButtonHolder>
            </Wrapper>
        )
    }
}