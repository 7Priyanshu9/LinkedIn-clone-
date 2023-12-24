import React from 'react'
import styled from 'styled-components';


const Left = () => {
  return (
    <Container>
      <Artcard>
        card
      </Artcard>
    </Container>
  )
}
const Container = styled.div`
grid-area:Left;

`;

const Artcard = styled.div`
overflow:hidden;
text-align:center;
margin-bottom: 8px;
background-color: #fff;
border-radius:5px;
transition:box-shadow 83ms;
position:relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

`;



export default Left
