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
export default class NormalButtons extends Component {
    render(){
        return(
            <Wrapper>
                <ButtonHolder>
                    <Text size='1'>Standard Buttons</Text>
                    <Hr/>
                    <Text size='0.9'>Normal</Text>
                    <Btn_Wrapper>
                        <Sol_btn
                            size='md'
                            color='primary'
                            value='Primary'
                            spin='spin'
                        />
                        <Br/>
                        <Sol_btn
                            size='md'
                            color='secondary'
                            value='Secondary'
                        />
                        <Br/>
                        <Sol_btn
                            size='md'
                            color='success'
                            value='Success'
                        />
                        <Br/>
                        <Sol_btn
                            size='md'
                            color='info'
                            value='Info'
                        />
                        <Br/>
                        <Sol_btn
                            size='md'
                            color='warning'
                            value='Warning'
                        />
                        <Br/>
                        <Sol_btn
                            size='md'
                            color='danger'
                            value='Danger'
                        />
                        <Br/>
                        <Sol_btn
                            size='md'
                            color='light'
                            value='Light'
                        />
                        <Br/>
                        <Sol_btn
                            size='md'
                            color='dark'
                            value='Dark'
                        />
                        <Br/>
                        <Sol_btn
                            size='md'
                            color='link'
                            value='Link'
                        />
                        <Br/>
                    </Btn_Wrapper>
                    <Text size='0.9'>Disabled</Text>
                    <Btn_Wrapper>
                        <Sol_btn
                            size='sm'
                            color='primary'
                            value='Primary'
                            disabled='disabled'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='secondary'
                            value='Secondary'
                            disabled='disabled'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='success'
                            value='Success'
                            disabled='disabled'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='info'
                            value='Info'
                            disabled='disabled'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='warning'
                            value='Warning'
                            disabled='disabled'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='danger'
                            value='Danger'
                            disabled='disabled'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='light'
                            value='Light'
                            disabled='disabled'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='dark'
                            value='Dark'
                            disabled='disabled'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='link'
                            value='Link'
                            disabled='disabled'
                        />
                        <Br/>
                    </Btn_Wrapper>
                    <br/><br/>
                </ButtonHolder>
                <br/>
                <ButtonHolder>
                    <Text size='1'>Outlined Buttons</Text>
                    <Hr/>
                    <Text size='0.9'>Normal</Text>
                    <Btn_Wrapper>
                        <Sol_btn
                            size='sm'
                            color='primary'
                            value='Primary'
                            type='outlined'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='secondary'
                            value='Secondary'
                            type='outlined'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='success'
                            value='Success'
                            type='outlined'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='info'
                            value='Info'
                            type='outlined'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='warning'
                            value='Warning'
                            type='outlined'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='danger'
                            value='Danger'
                            type='outlined'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='light'
                            value='Light'
                            type='outlined'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='dark'
                            value='Dark'
                            type='outlined'
                        />
                        <Br/>
                    </Btn_Wrapper>
                    <Text size='0.9'>Disabled</Text>
                    <Btn_Wrapper>
                        <Sol_btn
                            size='sm'
                            color='primary'
                            value='Primary'
                            disabled='disabled'
                            type='outlined'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='secondary'
                            value='Secondary'
                            disabled='disabled'
                            type='outlined'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='success'
                            value='Success'
                            disabled='disabled'
                            type='outlined'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='info'
                            value='Info'
                            disabled='disabled'
                            type='outlined'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='warning'
                            value='Warning'
                            disabled='disabled'
                            type='outlined'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='danger'
                            value='Danger'
                            disabled='disabled'
                            type='outlined'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='light'
                            value='Light'
                            disabled='disabled'
                            type='outlined'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='dark'
                            value='Dark'
                            disabled='disabled'
                            type='outlined'
                        />
                        <Br/>
                    </Btn_Wrapper>
                    <br/><br/>
                </ButtonHolder>
                <br/>
                <ButtonHolder>
                    <Text size='1'>Rounded Buttons</Text>
                    <Hr/>
                    <Text size='0.9'>Normal</Text>
                    <Btn_Wrapper>
                        <Sol_btn
                            size='sm'
                            color='primary'
                            value='Primary'
                            border='round'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='secondary'
                            value='Secondary'
                            border='round'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='success'
                            value='Success'
                            border='round'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='info'
                            value='Info'
                            border='round'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='warning'
                            value='Warning'
                            border='round'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='danger'
                            value='Danger'
                            border='round'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='light'
                            value='Light'
                            border='round'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='dark'
                            value='Dark'
                            border='round'
                        />
                        <Br/>
                    </Btn_Wrapper>
                    <Text size='0.9'>Disabled</Text>
                    <Btn_Wrapper>
                        <Sol_btn
                            size='sm'
                            color='primary'
                            value='Primary'
                            border='round'
                            disabled='disabled'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='secondary'
                            value='Secondary'
                            border='round'
                            disabled='disabled'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='success'
                            value='Success'
                            border='round'
                            disabled='disabled'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='info'
                            value='Info'
                            border='round'
                            disabled='disabled'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='warning'
                            value='Warning'
                            border='round'
                            disabled='disabled'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='danger'
                            value='Danger'
                            border='round'
                            disabled='disabled'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='light'
                            value='Light'
                            border='round'
                            disabled='disabled'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='dark'
                            value='Dark'
                            border='round'
                            disabled='disabled'
                        />
                        <Br/>
                    </Btn_Wrapper>
                    <br/><br/>
                </ButtonHolder>
                <br/>
                <ButtonHolder>
                    <Text size='1'>Sizes</Text>
                    <Hr/>
                    <Btn_Wrapper className='sizes'>
                        <Sol_btn
                            size='lg'
                            color='primary'
                            value='Primary'
                        />
                        <Br/>
                        <Sol_btn
                            size='md'
                            color='primary'
                            value='Primary'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='primary'
                            value='Primary'
                        />
                        <Br/>
                    </Btn_Wrapper>
                    <Btn_Wrapper className='sizes'>
                        <Sol_btn
                            size='lg'
                            color='primary'
                            value='Primary'
                            type='outlined'
                        />
                        <Br/>
                        <Sol_btn
                            size='md'
                            color='primary'
                            value='Primary'
                            type='outlined'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='primary'
                            value='Primary'
                            type='outlined'
                        />
                        <Br/>
                    </Btn_Wrapper>
                    <Btn_Wrapper className='sizes'>
                        <Sol_btn
                            size='lg'
                            color='primary'
                            value='Primary'
                            border='round'
                        />
                        <Br/>
                        <Sol_btn
                            size='md'
                            color='primary'
                            value='Primary'
                            border='round'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='primary'
                            value='Primary'
                            border='round'
                        />
                        <Br/>
                    </Btn_Wrapper>
                    <br/> <br/>                    
                </ButtonHolder>
                <br/>
                <ButtonHolder>
                    <Text size='1'>Icon Buttons</Text>
                    <Hr/>
                    <Btn_Wrapper className='sizes'>
                        <Sol_btn
                            size='lg'
                            color='success'
                            value='Primary'
                            icon='fab fa-youtube'
                        />
                        <Br/>
                        <Sol_btn
                            size='md'
                            color='success'
                            value='Primary'
                            icon='fab fa-youtube'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='success'
                            value='Primary'
                            icon='fab fa-youtube'
                        />
                        <Br/>
                    </Btn_Wrapper>
                    <Btn_Wrapper className='sizes'>
                        <Sol_btn
                            size='lg'
                            color='primary'
                            value='Primary'
                            type='outlined'
                            icon='fab fa-youtube'
                        />
                        <Br/>
                        <Sol_btn
                            size='md'
                            color='primary'
                            value='Primary'
                            type='outlined'
                            icon='fab fa-youtube'
                        />
                        <Br/>
                        <Sol_btn
                            size='sm'
                            color='primary'
                            value='Primary'
                            type='outlined'
                            icon='fab fa-youtube'
                        />
                        <Br/>
                    </Btn_Wrapper>
                    <br/> <br/>                    
                </ButtonHolder>
                <br/>
                <ButtonHolder>
                    <Text size='1'>Block Buttons</Text>
                    <Hr/>
                    <Holder>
                    <div style={{width: '100%'}}>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='primary'
                                value='Primary'
                            />
                        </Btn_Wrapper>
                        <Br/>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='secondary'
                                value='Secondary'
                            />
                        </Btn_Wrapper>
                        <Br/>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='success'
                                value='Success'
                            />
                        </Btn_Wrapper>
                        <Br/>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='info'
                                value='Info'
                            />
                        </Btn_Wrapper>
                        <Br/>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='warning'
                                value='Warning'
                            />
                        </Btn_Wrapper>
                        <Br/>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='danger'
                                value='Danger'
                            />
                        </Btn_Wrapper>
                        <Br/>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='light'
                                value='Light'
                            />
                        </Btn_Wrapper>
                        <Br/>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='dark'
                                value='Dark'
                            />
                        </Btn_Wrapper>
                        <Br/>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='link'
                                value='Link'
                            />
                        </Btn_Wrapper>
                        <Br/>
                    </div>
                    <div style={{width: '100%'}}>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='primary'
                                value='Primary'
                                type='outlined'
                            />
                        </Btn_Wrapper>
                        <Br/>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='secondary'
                                value='Secondary'
                                type='outlined'
                            />
                        </Btn_Wrapper>
                        <Br/>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='success'
                                value='Success'
                                type='outlined'
                            />
                        </Btn_Wrapper>
                        <Br/>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='info'
                                value='Info'
                                type='outlined'
                            />
                        </Btn_Wrapper>
                        <Br/>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='warning'
                                value='Warning'
                                type='outlined'
                            />
                        </Btn_Wrapper>
                        <Br/>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='danger'
                                value='Danger'
                                type='outlined'
                            />
                        </Btn_Wrapper>
                        <Br/>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='light'
                                value='Light'
                                type='outlined'
                            />
                        </Btn_Wrapper>
                        <Br/>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='dark'
                                value='Dark'
                                type='outlined'
                            />
                        </Btn_Wrapper>
                        <Br/>
                        <Btn_Wrapper className='sizes'>
                            <Sol_btn
                                size='block'
                                color='link'
                                value='Link'
                                type='outlined'
                            />
                        </Btn_Wrapper>
                        <Br/>
                    </div>
                    
                    </Holder>
                    <br/> <br/>                    
                </ButtonHolder>
                <br/>
            </Wrapper>
        )
    }
}