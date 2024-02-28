import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="./src/images/login-logo.svg" alt="LinkedIn logo "/>
                </a>


                <NavListwrap>
                <NavList>
                    <a>
                    <img src="./src/images/newspaper.svg" alt="" />
                        <span> Articles </span>
                    </a>
                </NavList>
                <NavList>
                    <a>
                    <img src="./src/images/people.svg" alt="" />
                        <span> People </span>
                    </a>
                </NavList>
                <NavList>
                    <a>
                    <img src="./src/images/movie.svg" alt="" />
                        <span> Learning </span>
                    </a>
                </NavList>
                <NavList>
                    <a>
                    <img src="./src/images/job.svg" alt="" />
                        <span> Jobs </span>
                    </a>
                </NavList>
                <NavList>
                    <a>
                    <img src="./src/images/download.svg" alt="" />
                        <span> Get the app </span>
                    </a>
                </NavList>
            </NavListwrap>

                <div>
                    <Join>Join Now</Join>
                    <SignIn>Sign In</SignIn>
                </div>
            </Nav>

            <Section>
               <Hero>
                <h1>Welcome to your professional community</h1>
                <img src="./src/images/login-hero.svg" alt="hero image" />
               </Hero>

               <Form>
                <Google>
                    <img src="./src/images/google.svg" alt="google" />
                    Sign in with Google
                </Google>
               </Form>
            </Section>
        </Container>
    )
}



const NavListwrap = styled.ul`
    display:flex;
    flex-wrap:nowrap;
    list-style-type:none;
    margin-left: 300px;

    @media (max-width:768px) {
        display:none;
    }
    `;


const NavList = styled.li`
    display:flex;
    align-items:center;
    a{
    align-items:center;
    background:transparent;
    display:flex;
    flex-direction:column;
    font-size:13px;
    font-weight:500;
    line-height:1.5;
    min-height:42px;
    min-width:80px;
    position:relative;
    text-decoration:none;
}


`;

const Container = styled.div `
    padding: 0px;


`;

const Nav = styled.nav `
    max-width: 1128px;
    margin:auto;
    padding:12px 0 16px;
    display:flex;
    align-items : center;
    position : relative ;
    justify-content : space-between ;
    flex-wrap:nowrap;

// anything within a tag must have a width of 135px

    &>a{
        width:135px;
        height:34px;

        @media (max-width:768px){
            /* when the screen is less than 768px wide, make each element take up 100% of the container */
            padding : 0 5px;
        }
    }
`;

const Join = styled.a `
    font-size:16px;
    padding:10px 12px;
    text-decoration:none; 
    /* no underline  */
    color:rgba(0,0,0,0.6);
    margin-right:12px;
    border-radius:4px;
    cursor:pointer;

    &:hover{
        background-color: rgba(0,0,0,0.08);
        color:rgba(0,0,0,0.9);
        text-decoration:none;

    }
    `;

    const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    padding:10px 24px;
    color:#0a66c2;
    border-radius:24px;
    transition:167ms ;
    font-size:16px;
    font-weight:600;
    text-align:center;
    background-color: rgba(0,0,0,0);
    line-height:40px;
    cursor:pointer;


    &:hover {
        background-color: rgba(112,181,249,0.15) ;
        color:#0a66c2;
        text-decoration:none;
    } 
    `;


const Section = styled.section`
    display:flex;
    align-content:start;
    min-height:700px;
    padding-bottom:138px;
    padding-top:40px;
    padding:60px 0 ;
    position: relative;
    flex-wrap:wrap;
    /* wrapping allow the image to aling the image at the bottom of the section in small mobile and in big devices it moves to the right side  */
    width:100%;
    max-width:1128px;
    align-items:center;
    margin:auto;

    @media (max-width:768px){
        margin:auto;
        min-height:0px;
    }
`;

const Hero = styled.div`

    width:100%;
    h1{
        padding-bottom:0;
        width:55%;
        font-size:56px;
        color:#2977c9;
        font-weight:200;
        line-height:70px;
        @media (max-width:768px) {
            text-align:center;
            font-size:20px;
            width:100%;
            line-height: 2; 
        }
    }

    img{
        height:650px;
        /* z-index:-1; */
        width: 700px;
        position:absolute;
        bottom:-2px;
        right:-150px;

        @media (max-width:768px) {
            top: 230px;
            width:initial;
            height:initial;
            position:initial;

        }
    }
`;

const Form = styled.div`
margin-top:100px;
width:408px;
@media (max-width:768px) {
    margin-top:20px;
}
`;


const Google = styled.button`
    display:flex;
    justify-content:center;
    background-color: #fff;
    align-items:center;
    height:56px;
    width: 100%;
    border-radius:28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%) , inset 0 0 0 2px rgb(0 0 0 / 0%)  inset 0 0 0 1px rgb(0 0 0 / 0%);
    vertical-align:middle;
    z-index:0;
    transition-duration:167ms;
    font-size:20px;
    color:rgb(0,0,0,0.6);
    &:hover{
        background-color: rgba(207,207,207,0.25);
        color: rgba(0,0,0,0.75)
    }
    `;


const mapStateToProps = (state) =>{
    return {};
};

const mapDispatchToProps = (dispatch) =>{
    {}
};

export default connect(mapStateToProps , mapDispatchToProps)(Login);


