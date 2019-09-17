import React, { Component } from 'react'
import styled from 'styled-components'

import Sol_btnDrop from '../Components/DropButtons'
import Sol_btn from '../Components/Buttons'

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
    Google :  'https://google.com',
    Facebook :  'https:facebook.com//',
    Instagram :  'https:instagram.com//',
    Netflix : 'https:netflix.com//'
}
const groupData2 = {
    Google :  'https://google.com',
}
const groupData3 = {
    Instagram :  'https:instagram.com//',
    Netflix : 'https:netflix.com//'
}

export default class ButtonDropdown extends Component {
    render() {
        return(
            <Wrapper>
                <ButtonHolder>
                    <Text>Dropdowns</Text>
                    <Hr/>
                    <Btn_Wrapper>
                        <Sol_btnDrop
                            size='sm'
                            color='primary'
                            value='Primary'
                            items={groupData}
                        />
                        <Br/>
                        <Sol_btnDrop
                            size='sm'
                            color='secondary'
                            value='Secondary'
                            items={groupData}
                        />
                        <Br/>
                        <Sol_btnDrop
                            size='sm'
                            color='success'
                            value='Success'
                            items={groupData}
                        />
                        <Br/>
                        <Sol_btnDrop
                            size='sm'
                            color='info'
                            value='Info'
                            items={groupData}
                        />
                        <Br/>
                        <Sol_btnDrop
                            size='sm'
                            color='warning'
                            value='Warning'
                            items={groupData}
                        />
                        <Br/>
                        <Sol_btnDrop
                            size='sm'
                            color='danger'
                            value='Danger'
                            items={groupData}
                        />
                        <Br/>
                        <Sol_btnDrop
                            size='sm'
                            color='light'
                            value='Light'
                            items={groupData}
                        />
                        <Br/>
                        <Sol_btnDrop
                            size='sm'
                            color='dark'
                            value='Dark'
                            items={groupData}
                        />
                        <Br/>
                        <Sol_btnDrop
                            size='sm'
                            color='link'
                            value='Link'
                            items={groupData}
                        />
                        <Br/>
                    </Btn_Wrapper>
                    <br/>
                </ButtonHolder>
                <br/>
                <ButtonHolder>
                    <Text>Directions</Text>
                    <Hr/>
                    <Btn_Wrapper>
                        <Sol_btnDrop
                            size='sm'
                            color='primary'
                            value='Primary'
                            items={groupData}
                            direction='up'
                        />
                        <Br/>
                        <Sol_btnDrop
                            size='sm'
                            color='secondary'
                            value='Secondary'
                            items={groupData}
                            direction='down'
                        />
                        <Br/>
                        <Sol_btnDrop
                            size='sm'
                            color='success'
                            value='Success'
                            items={groupData}
                            direction='left'
                        />
                        <Br/>
                        <Sol_btnDrop
                            size='sm'
                            color='info'
                            value='Info'
                            items={groupData}
                            direction='right'
                        />
                        <Br/>
                    </Btn_Wrapper>
                    <br/>
                </ButtonHolder>
                <br/>
                <ButtonHolder>
                    <Text>Sizing</Text>
                    <Hr/>
                    <Btn_Wrapper>
                        <Sol_btnDrop
                            size='lg'
                            color='primary'
                            value='Primary'
                            items={groupData}
                            direction='up'
                        />
                        <Br/>
                        <Sol_btnDrop
                            size='md'
                            color='secondary'
                            value='Secondary'
                            items={groupData}
                            direction='down'
                        />
                        <Br/>
                        <Sol_btnDrop
                            size='sm'
                            color='success'
                            value='Success'
                            items={groupData}
                            direction='left'
                        />
                        <Br/>
                    </Btn_Wrapper>
                    <br/>
                </ButtonHolder>
                <br/>
            </Wrapper>
        )
    }
}