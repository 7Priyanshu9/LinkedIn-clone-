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
      <Description>Title over here </Description>
      <SharedImg>
        <a>
          <img src="./src/images/tech.jpg" alt="tech" />
        </a>
      </SharedImg>

      <Reactions>
        <li>
          <button>
            <img src="./src/images/like.svg" alt="Bulb" />
            <img src="./src/images/bulb.svg" alt="like" />
            <img src="./src/images/heart.svg" alt="heart" />
            <span>Jhon Doe and 68 others</span>
          </button>
        </li>

        <li>
          <span>16 comments </span>
        </li>
       
      </Reactions>
      <Option>
        <button>
          <img src="./src/images/option-like.svg" alt="like" />
          <span>Like</span>
        </button>
        <button>
          <img src="./src/images/option-comment.svg" alt="" />
          <span>Comment</span>
        </button>
        <button>
          <img src="./src/images/option-repost.svg" alt="" />
          <span>Repost</span>
        </button>
        <button>
          <img src="./src/images/option-share.svg" alt="" />
          <span>Send</span>
        </button>
      </Option>
      </Post>
    </Container>
  )
}

const Option= styled.ul`
line-height:1.3;
display:flex;
align-items:center;
overflow:auto;
margin: 0 16px;
justify-content:space-between;
padding: 8px 0 ;
border-bottom:1px solid #e9e5df;
list-style: none;


  button{
    display:flex;
    border:none;
    margin:none;
    background:transparent;
    gap:5px;
    align-content:center;
    cursor:pointer;
    text-align:center;
    font-size:12px;
    color:rgba(0,0,0,0.6);
    align-items:center;
  }
`;


const Container = styled.div`
grid-area:Middle;
`;
const Reactions = styled.ul`
display:flex;
justify-content:space-between;
padding:0 10px;
list-style:none;
border-bottom:1px solid rgba(0,0,0,0.3);
button{
  border:none;
  margin:none;
  list-style:none;
  background-color: white;
  
  img{
    &:first-child{
      position:relative;

    }

    &:nth-child(2){
      position:absolute;
      left:28px;
    }

    &:nth-child(3){
      position:absolute;
      left:39px;
    }
  }
    span{
      font-size:12px;
      margin-left:25px;
      color: rgba(0,0,0,0.5);
      padding-bottom:10px;
      text-align:center;
    }   
}

li{
  span{
    font-size:12px;
      margin-left:25px;
      color: rgba(0,0,0,0.5);
      margin-bottom:10px;
      text-align:center;
  }
}
`;






const Description = styled.div`
  padding:0 16px;
  overflow:hidden;
  color:rgba(0,0,0,0.9);
  font-size:14px;
  justify-content:last baseline

`;
const SharedImg = styled.div`
  margin-top:8px;
  width:100%;
  display:block;
  position:relative;
  background-color:#f9fafb;
  height:100%;
  img{
    object-fit:contain;
    width:100%;
    height :80%;

  }
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

