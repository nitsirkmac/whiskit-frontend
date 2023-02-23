import styled from 'styled-components'

export const colors = {
    orange: '#f4701c',
    red: '#e8400c',
    brown: '#4e1e2d',
    taupe: '#f28357',
};

// logo
export const images = {
    logo: 'https://i.imgur.com/GRf0dwN.png',
};

export const NavStyle = styled.nav`
    color: ${colors.taupe};
    display: flex;
    justify-content: center;
    align-items: space-between;
`;

export const Image = styled.img`
    height: 150px;
    width: 115px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 1000px;
`;

export const TextArea = styled.textarea`
    height: 200px;
    width: 500px;
    margin: 10px;
`;

export const Info = styled.input`
    width: 500px;
    margin: 10px;
`;

export const DetailImg = styled.img`
    height: 500px;
    width: 385px;
    border-radius: 10px;
`;

export const Ingredients = styled.div`
    width: 260px;
    margin: 10px;

`;

export const Steps = styled.div`
    width: 260px;
    margin: 10px;
`;