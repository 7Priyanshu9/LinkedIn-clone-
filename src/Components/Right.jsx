import React from 'react'
import styled from 'styled-components';

const Right = () => {
  return (
    <Container>
      <Followcard>
        <Title>
          <h2>LinkedIn News</h2>
          <img src="./src/images/feed-icon.svg" alt="" />
          </Title> 

<CustomComponent h1Heading={"Music tourism set to boom"} h5About={"2d ago • 672 readers"}/>
<CustomComponent h1Heading={"Indian economy on growth path"} h5About={"2d ago • 672 readers"}/>
<CustomComponent h1Heading={"Tech freshers have it tough"} h5About={"2d ago • 992 readers"}/>
<CustomComponent h1Heading={"15 Big Ideas that will shape 2024"} h5About={"1d ago • 4,772 readers"}/>
<CustomComponent h1Heading={"Managers key to employee well-being"} h5About={"2d ago • 884 readers"}/>
<Showmore>
  <h4>Show More</h4>
  <img src="./src/images/downarrow.svg" alt="down" /> 
</Showmore>
      </Followcard>
    </Container>
)
}



const Showmore = styled.div`
text-align:left;
display:flex;
justify-content:start;
flex-direction:row;
margin-left:20px;
font-size:15px;
color:rgba(0,0,0,0.6)
`;

const NewsList = styled.div`

    border-bottom:1px solid rgba(0,0,0,0.15);
    padding-top:12px;
    padding-bottom:12px;

    & > li{
    text-decoration:none;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:16px;
    padding:4px 12px;


    & > span{
      display:flex;
      flex-direction:column;

    }
    &:hover{
      background-color: rgba(0,0,0,0.08);
    }
  }
    `;

const Container = styled.div`
  grid-area:Right ;
  width:85%;

  @media (max-width:768px) {
    width:100%;
  }
`;



const Followcard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
border-radius:5px;
position: relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
padding:12px;
`;

const Title = styled.div`
display:inline-flex;
align-items:center;
justify-content:space-between;
font-size:18px;
width: 100%;
color:rgba(0,0,0,0.8);
margin-bottom:5px;

`;



const CustomComponent = ({ h1Heading, h5About }) => {
  const headingStyle = {
    color: 'black',
    fontSize: '14px',
    textAlign: 'left',
    position: 'relative', 
    paddingLeft: '20px',
    marginBottom:'5px', 
  };

  const subheadingStyle = {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: '10px',
    textAlign: 'left',
    paddingLeft: '20px', 
    marginBottom: '10px',
  };
  return (
    <div>
       <h1 style={headingStyle}>{h1Heading}</h1>
      <h5 style={subheadingStyle}>{h5About}</h5>

    </div>
  );
};

export default Right;
