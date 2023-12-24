import React from 'react'
import styled from 'styled-components'
import Home from './Home';
const Header = () => {
  return (
    // 
   <Container>
    <Content>
        <Logo>
            <a href="/home">
                <img src="./src/images/home-logo.svg" alt="home-logo" />
            </a>
        </Logo>

        <Search>
            <div>
                <input type="text" placeholder='Search' />
            </div>
            <SearchIcon>
                <img src="./src/images/search-icon.svg" alt="search-icon" />
            </SearchIcon>
        </Search>

        <Nav>
            <NavListwrap>
                <NavList className='active'>
                    <a>
                        <img src="./src/images/nav-home.svg" alt="nav-home " />
                        <span> Home </span>
                    </a>
                </NavList>
                <NavList>
                    <a>
                        <img src="./src/images/nav-network.svg" alt="nav-home " />
                        <span> My Network </span>
                    </a>
                </NavList>
                <NavList>
                    <a>
                        <img src="./src/images/nav-jobs.svg" alt="nav-home " />
                        <span> Jobs </span>
                    </a>
                </NavList>
                <NavList>
                    <a>
                        <img src="./src/images/nav-messaging.svg" alt="nav-home " />
                        <span> Messaging </span>
                    </a>
                </NavList>
                <NavList>
                    <a>
                        <img src="./src/images/nav-notifications.svg" alt="nav-home " />
                        <span> Notifications </span>
                    </a>
                </NavList>

                <User>
                    <a >
                        <img src="./src/images/user.svg" alt="UserImage " />
                        <span>Me   <img src="./src/images/down-icon.svg" alt="DownIcon" /></span>
                       
                    </a>
                    <SignOut> <a> Sign Out </a>  </SignOut>
                </User>
                <Work>
                <a >
                        <img src="./src/images/nav-work.svg" alt="business " />
                        <span>For Business  <img src="./src/images/down-icon.svg" alt="DownIcon" /></span>
                    
                    </a>
                </Work>
               
            </NavListwrap>
        </Nav>
    </Content>
   </Container>

  )
}




const NavListwrap = styled.ul`
display:flex;
flex-wrap:nowrap;
list-style-type:none;

.active{
    span:after{
        content: " ";
        transform:scaleX(1);
        border-bottom:2px solid var(--white , #fff);
        bottom:0;
        left:0;
        position:absolute;
        transition:transform 0.2s ease-in-out ;
        border-color:rgba(0,0,0,0.9);
    }
}


`;
const NavList = styled.li`

display:flex;
align-items:center;;
a{
    align-items:center;
    background:transparent;
    display:flex;
    flex-direction:column;
    font-size:12px;
    font-weight:400;
    line-height:1.5;
    min-height:52px;
    min-width:80px;
    position:relative;
    text-decoration:none;
    margin-top:6px;


    span{
        color:rgba(0,0,0,0.6);
        display:flex;
        align-items:center;
        
    }

    @media (max-width:768px) {
        min-width:70px;    
    }
}

&:hover,
&:active{
    a{
        span{
            color:rgba(0,0,0,0.9);
        }
    }
}

`;


const Container = styled.div`
    background-color: white;
    border-bottom:1px solid rgba(0,0,0,0.08) ;
    left:0px;
    padding: 0 24px;
    position:fixed;
    top:0;
    width:100vw;
    z-index:100;

`;
const Content = styled.div`
    display:flex;
    align-items:center;
    margin: 0 auto;
    min-height:100%;
    max-width:1128px;

`;

const Logo = styled.span`
    margin-right : 8px;
    font-size:0px;


`;

const Search = styled.div`
    opacity:1;
    flex-grow:1;
    position: relative;
    &>div{
        max-width:280px;
        input{
            border:none;
            box-shadow:none;
            background-color: #eef3f8;
            border-radius:2px;
            color:rgba(0,0,0,0.9);
            width:218px;
            padding:0 8px 0 40px;
            line-height:1.75;
            font-weight:400;
            font-size:14px;
            height:34px;
            border-color:#dce6f1;
            vertical-align:text-top;
        }
    }
`;

const SearchIcon = styled.div`
    width:40px;
    position:absolute;
    z-index:1;
    top : 10px;
    left: 2px;
    border-radius: 0 2px 2px 0;  
    margin:0;
    box-shadow:none;
    pointer-events: none;
    display:flex;
    justify-content: center;
    align-items:center;
    /* transition:background-color 0.15s; */

`;


const Nav = styled.nav`
margin-left:auto;
display:block;
@media (max-width:768px) {
    position:fixed;
    left:0;
    bottom:0;
    background:white;
    width:100%;

}
`;


const SignOut = styled.div`
position:absolute;
top:50px;
right:170px;
background:white;
border-radius:0 0 5px 5px;
width: 100px;
height:40px;
font-size:20px;
transition-duration : 167ms ;
text-align:center;
display:none ;

`;


const User = styled(NavList)`
a > img {
    width:24px;
    height:24px;
    border-radius:50%;
  


}

span{
    display:flex;
    align-items:center;
    gap: 5px;
}

&:hover{
    ${SignOut}{
        align-items:center;
        justify-content:center;
        display:flex;
    }
}

`;

const Work = styled(User)`

border-left: 1px solid rgba(0,0,0,0.6)


`;









export default Header
