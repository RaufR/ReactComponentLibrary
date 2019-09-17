import React, { Component } from 'react'
import styled from 'styled-components'

import Sol_btnGroup from '../Components/ButtonGroup'

const Wrapper = styled.div`
    background: #f1f1f1;
    padding: 4em 0em 0em 18em;
    width: 100%;
    min-height: 100vh;
`
const ButtonHolder = styled.div`
    width: 96%;
    background: white;
    min-height: 10vh;
    border-radius: 0.6em;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
    .sizes {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`
const Holder = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const Text = styled.div`
    padding: 2% 0% 0% 5%;
    font-family: 'Montserrat', sans-serif;
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
    width: inherit;
    display: flex;
    padding: 1.5% 0% 0% 5%;
    align-items: center;
    justify-content: center;
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
const groupData = {
    1 :  '#',
    2 :  '#',
    3 :  '#',
    4 : '#'
}
const groupData2 = {
    5 :  '#',
}
const groupData3 = {
    6 :  '#',
    7 : '#'
}
export default class ButtonGroup extends Component {
    render() {
        return(
            <Wrapper>
                <ButtonHolder>
                    <Text>Button Group</Text>
                    <Hr />
                    <Btn_Wrapper>
                        <Sol_btnGroup color='primary' group={groupData}/>
                    </Btn_Wrapper>
                    <br/>
                </ButtonHolder>
                <br/>
                <ButtonHolder>
                    <Text>Sizing</Text>
                    <Hr/>
                    <Btn_Wrapper>
                        <Sol_btnGroup size='lg' color='primary' group={groupData}/>
                    </Btn_Wrapper>
                    <br/>
                    <Btn_Wrapper>
                        <Sol_btnGroup size='md' color='primary' group={groupData}/>
                    </Btn_Wrapper>
                    <br/>
                    <Btn_Wrapper>
                        <Sol_btnGroup size='sm' color='primary' group={groupData}/>
                    </Btn_Wrapper>
                    <br/>
                </ButtonHolder>
                <br/>
                <ButtonHolder>
                    <Text>Button Toolbar</Text>
                    <Hr/>
                    <Holder>
                        <Btn_Wrapper>
                            <Sol_btnGroup size='sm' color='primary' group={groupData}/>
                        </Btn_Wrapper>
                        <br/>
                        <Btn_Wrapper>
                            <Sol_btnGroup size='sm' color='primary' group={groupData2}/>
                        </Btn_Wrapper>
                        <br/>
                        <Btn_Wrapper>
                            <Sol_btnGroup size='sm' color='primary' group={groupData3}/>
                        </Btn_Wrapper>
                        <br/>
                    </Holder>
                    <br/>
                </ButtonHolder>
            </Wrapper>
        )
    }
}