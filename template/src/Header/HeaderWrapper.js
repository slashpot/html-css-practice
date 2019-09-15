import styled from "styled-components";

export default styled.header`
    display: flex;
    flex-direction: column;

    background-color: #35424A;
    color: white;
    text-align: center;
    padding: 1rem;

    margin-bottom: 0%;
    border-bottom: #E8491D 3px solid;

    .highlight {
        color: #E8491D;
        font-weight: bold;
    }

    @media screen and (min-width: 780px) {
        flex-direction: row;
        justify-content: space-around;
        padding: 0;

        ul {
            display: flex;
            justify-content: space-around;
        }

        .nav-group {
            width: 44%;
            max-width: 346px;
            padding: 1rem;
        }
    }
`