import React from 'react'
import styled from 'styled-components'
const User = props => {
    const { users } = props;
    console.log(props);
    return (
        <div>
            <H1>Users</H1>
            <table border= "1px solid black" border-collapse="collapse">
                        <tr>
                            <th width="50px">userId</th>
                            <th>userName</th>
                        </tr>
                {
                    users.map(user => 
                   
                        <tr>
                            <td width="30px">{user.id}</td>
                            <td>{user.name}</td>
                        </tr>
                
            )
                }
            </table>
        </div>
    )
}


const H1 = styled.h1`
    color: green;
    margin: 0 2em;
`
// const Table = styled.table`
//     fontFamily: arial, sans-serif;
//     borderCollapse: collapse;
//     width: 100%;
// `
// const Td = styled.td`
//     border: 1px solid #dddddd;
//     textAlign: left;
//     padding: 8px;
// `
export default User;