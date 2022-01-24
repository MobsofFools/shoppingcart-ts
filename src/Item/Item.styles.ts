import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction:column;
    width:100%;
    border: 1px solid black;
    border-radius: 20px;
    height:100%;

    button{
        border-radius: 0 0 20px 20px;
    }
    img {
        max-height: 250px;
        object-fit :cover;
        border-radius: 20px 20px 0 0;
        margin-bottom:-1.5em;
        z-index:2;
    }
    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height:100%;
        background-color: #FAE6CA;
        overflow-wrap: break-word;
    }

    h3 {
        text-align:center;
        margin-bottom: -1em;
    }
    h4 {
        font-weight: 300;
        text-align: right;
        margin-bottom: -0.75em;
    }
    button {
        color:red;
        border-top: 1px solid black;
    }
`;