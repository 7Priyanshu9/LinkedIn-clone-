import React from 'react'
import styled from 'styled-components';

const Middle = () => {
  return (
    <Container>
     <Postbox>
      
    
     <div>
      <img src="./src/images/user.svg" alt="Profile picture" />
      <button>Start a post</button>
     </div>
     <div>

      <button>
        <img src="./src/images/media.svg" alt="photo" />
      <span>Media</span>
      </button>

      <button>
        <img src="./src/images/event.svg" alt="Poll icon" />
        <span>Events</span>
      </button>

      <button>
        <img src="./src/images/article1.svg" alt="" />
        <span>Write Article</span>
      </button>
     </div>
     </Postbox>

     <Post>
      <SharedUser>
        <a>
          <img src="./src/images/user.svg" alt="" />
          <div>
            <span>
              Title
            </span>
            <span>
              Info
            </span>
            <span>
              Date
            </span>
          </div>
        </a>

        <button>
          <img src="./src/images/more.svg" alt="3 dots" />
        </button>
      </SharedUser>
      </Post>
    </Container>
  )
}
const Container = styled.div`
grid-area:Middle;
`;

const Commoncard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
border-radius:5px;
background-color: #fff;
position:relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;


const Post = styled(Commoncard)`
  padding:0;
  margin: 0 0 8px;
  overflow:visible;

`;

const SharedUser = styled.div`

padding-right:40px;
flex-wrap:nowrap;
padding:12px 16px 0;
margin-bottom:8px;
align-items:center;
display:flex;
a{
  margin-right:12px;
  flex-grow:1;
  overflow:hidden;
  display:flex;

  img{
    width: 48px;
    height:48px;
    border-radius:50%;
  }
  &> div{
    display:flex;
    flex-direction:column;
    flex-grow:1;
    flex-basis:0;
    margin-left: 8px;
    overflow:hidden;

    span{
      text-align:left;
      &:first-child{
        font-size:14px;
        font-weight:700;
        color:rgba(0,0,0,1);
      }

      &:nth-child(n + 1){
        font-size:12px;
        color:rgba(0,0,0,0.6);
      }
    }
  }
}


button{
  position:absolute;
  right: 12px;
  top: 0px;
  background:transparent;
  border:none;
  outline:none;
  cursor:pointer;
}
`;



const Postbox = styled(Commoncard)`
display:flex;
flex-direction:column;
color:#958b7b;
margin: 0 0 8px;
background-color: white;
div{
  button{
    outline:none;
    color:rgba(0,0,0,0.6);
    font-size:14px;
    line-height:1.5;
    min-height:48px;
    background:transparent;
    border:none;
    display:flex;
    align-items:center;
    font-weight:600;
  }

  &:first-child{
    display:flex;
    align-items:center;
    padding:8px 16px 0px 16px;
    img{
      width:40px;
      border-radius:50%;
      margin-right:8px;
    }

    button{
      margin: 4px 0 ;
      flex-grow:1;
      border-radius:35px;
      padding-left: 16px;
      border:1px solid rgba(0,0,0,0.15);
      cursor:pointer;
      background-color: white;
      text-align:left;
    }
  }

  &:nth-child(2){
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    padding-bottom:4px;

    button{
      img{
        margin: 0 4px 0 -2px;
      }
      span{
        color:rgba(0,0,0,0.4);

      }
    }
  }
}

`;
export default Middle;

