import React from 'react'
import styled from 'styled-components';


const Left = () => {
  return (
    <Container>
      <Artcard>
        <UserInfo>
          <CardBackground/>
          <a>
            <Photo/>
            <Link>Priyanshu Paul</Link>
          </a>

          <a>
            <Phototext>Aspiring Erudite|| Results-driven || Hacktoberfest '23 🌲 || AI enthusiast || Java || Data Structures || Leadership experience || Self learning Developer|| Sketching||</Phototext>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>
               Profile viewers 
              </span>
              <span>
              Post Impressions 
              </span>
            </div>
           <img src="./src/images/widget-icon.svg" alt=" add connection" />
          </a>
        </Widget>
        <Items>
          <span><img src="./src/images/item-icon.svg" alt="bookmark" /> My Items </span>
        </Items>
      </Artcard>

      <CommunityCard>
        <a >
          <span>Groups</span>
        </a>

        <a> 
          <span>
          Events
          <img src="./src/images/plus-icon.svg" alt="plus icon" />
          </span>
          </a>

          <a>
            <span>
              Follow HashTags
            </span>
          </a>

          <a>
            <span>Discover more</span>
          </a>
      </CommunityCard>
    </Container>
  )
}


    const Widget = styled.div`
    border-bottom:1px solid rgba(0,0,0,0.15);
    padding-top:12px;
    padding-bottom:12px;

    & > a{
    text-decoration:none;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:16px;
    padding:4px 12px;

    &:hover{
      background-color: rgba(0,0,0,0.08);
    }

    div{
      display:flex;
      flex-direction:column;
      text-align:left;
      span{
        font-size:12px;
        line-height:1.333;
        &:first-child{
          color:rgba(0,0,0,0.6);
          }
        &:nth-child(2){
          color:rgba(0,0,0,1);
        }
      }  
    }
  }


  svg{
    color:rgba(0,0,0,1);
  }
    `;


    const Items = styled.div`
    border-color:rgba(0,0,0,0.8);
    text-align:left;
    padding:12px;
    font-size:12px;
    display:block;
    span{
      display:flex;
      align-items:center;
      color:rgba(0,0,0,1);
      svg{
        color:rgba(0,0,0,0.6);
      }
    }

    &:hover{
      background-color:rgba(0,0,0,0.08);
    }

    
    `;


    const UserInfo = styled.div`
    border-bottom:1px solid rgba(0,0,0,0.15);
    padding: 12px 12px 16px;
    word-wrap:break-word;
    word-break:break-word;

    `;
    const CardBackground = styled.div`
      background: url('./src/images/card-bg.svg');
      background-position:center;
      background-size:462px;
      height:54px;
      margin:-12px -12px 0 ;


    `;
    const Photo = styled.div`
      box-shadow:none;
      background-image:url('./src/images/photo.svg');
      width:72px;
      height:72px;
      box-sizing:border-box;
      background-color:white;
      background-position:center;
      background-size:60%;
      background-repeat:no-repeat;
      border:2px solid white;
      margin:-38px auto 12px;
      border-radius:50%;

    `;
    const Link = styled.div`
      font-size:16px;
      line-height:1.5;
      color:rgba(0,0,0,0.9);
      font-weight:600;

    `;
    const Phototext = styled.div`
      color:rgba(0,0,0,0.75);
      margin-top:4px;
      font-size:12px;
      line-height:1.33;
      font-weight:500;


    `;



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

const CommunityCard = styled(Artcard)`
  padding:8px 0 0 ;
  text-align:left;
  display:flex;
  flex-direction:column;
  a{
    color:black;
    padding:4px 12px 4px 12px ;
    font-size:12px;
    
    &:hover{
      color:#0a66c2;     
    }
    span{
      display:flex;
      align-items:center;
      justify-content:space-between;
    }

    &:last-child{
      color:rgba(0,0,0,0.6);
      text-decoration:none;
      padding:12px;
      border-top:1px solid #d6cec2;

      &:hover{
        background-color: rgba(0,0,0,0.09);
      }
    }
  }
`;



export default Left
