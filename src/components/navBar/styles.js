import styled from 'styled-components' 

export const NavBarStyled = styled.nav`
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    background-color: #1F2738; 
    height: 8vh; 
    >span {
        color: #EEEEEE; 
        font-size: 30px; 
        margin-left: 10px;
    }
    >ul {
        list-style: none;
        margin: 0;
        height: 100%;
        >li {
            display: inline-block;
            height: 100%;
            padding: 25px 15px; 
            box-sizing: border-box;
            text-align: center;
            vertical-align: center;
            border-left: 1px solid white; 
            color: #EEEEEE;
            font-size: 25px;
            &:hover {
                cursor: pointer; 
                color: #F56F36;
            }
        }
    }
` 