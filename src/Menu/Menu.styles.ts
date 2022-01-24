import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
    height:inherit;
    margin: 40px 40px 0 40px;
`;
export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    bottom: -2vh;
    right: -85vw;
`;