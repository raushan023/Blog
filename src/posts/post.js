import React from 'react'
import styled from 'styled-components'

const Post = props => {
    const { posts } = props;
    return (
        <div>
            <H1>Posts</H1>
            <table justify-content="justify" border= "1px solid black">
                    <tr>
                        <th width="30px">userId</th>
                        <th width="30px">postId</th>
                        <th width="300px">postTitle</th>
                        <th width="1000px">postBody</th>
                    </tr>
                {
                    posts.map(post => 
                    <tr>
                        <td width="30px">{post.userId}</td>
                        <td width="30px">{post.id}</td>
                        <td width="300px">{post.title}</td>
                        <td width="1000px">{post.body}</td>
                    </tr>
            )
                }
            </table>
        </div>
    )
}

// const Span = styled.span`
//   background: transparent;
//   color: blue;
//   margin: 0 1em;
//   padding: 0.25em 1em;
// `
const H1 = styled.h1`
  color: green;
  margin: 0 2em;
`

export default Post;