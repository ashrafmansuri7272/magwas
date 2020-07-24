import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`


const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class UsersInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            mobile: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputAddress = async event => {
        const address = event.target.validity.valid
            ? event.target.value
            : this.state.address

        this.setState({ address })
    }

    handleChangeInputMobile = async event => {
        const mobile = event.target.value
        this.setState({ mobile })
    }

    handleIncludeUser = async () => {
        const { name, address, mobile } = this.state
        // const arrayTime = mobile.split('/')
        const payload = { name, address, mobile:mobile }

        await api.addUser(payload).then(res => {
            window.alert(`User inserted successfully`)
            this.setState({
                name: '',
                address: '',
                mobile: '',
            })
        })
    }

    render() {
        const { name, address, mobile } = this.state
        return (
            <Wrapper>
                <Title>Create User</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>address: </Label>
                <InputText
                    type="text"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="20"
                    // pattern="[0-9]+([,\.][0-9]+)?"
                    value={address}
                    onChange={this.handleChangeInputAddress}
                />

                <Label>mobile: </Label>
                <InputText
                    type="number"
                    min="0"
                    pattern="[0-9]"
                    max="10"
                    value={mobile}
                    onChange={this.handleChangeInputMobile}
                />

                <Button onClick={this.handleIncludeUser}>Add User</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default UsersInsert
