import React from 'react'
import styled from '@emotion/styled'

const ListItem = styled.div`
  display:flex;
  justify-content: space-between; 
  color: #000000;
  width: 100%;
  height: 100%;
  margin-bottom:5px;
`

export const ListCount = ({ count }) => {
  return (
    <ListItem>
      <div>{count.name}</div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25px',
        height: '25px',
        borderRadius: '16px',
        backgroundColor: '#ABABAB',

      }}>{count.childCount}</div>
    </ListItem>
  )
}
