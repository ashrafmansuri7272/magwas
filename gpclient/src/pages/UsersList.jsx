

import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getUsers().then(users => {
            this.setState({
                users: users.data,
                isLoading: false,
            })
        })

    }

    render() {
        const { users, isLoading } = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Address',
                accessor: 'address',
                filterable: true,
            },
            {
                Header: 'Mobile',
                accessor: 'mobile',
                // Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ]

        let showTable = true
        // if (!users.length) {
        //     showTable = false
        // }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={users}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default UsersList