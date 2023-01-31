import styled from "styled-components";
import { InputHTMLAttributes } from "react";


const StyledWrapper = styled.div({
    position: "relative",

    '&:after': {
        content: '""',
        position: "absolute",
        background: 'url("/images/svg/search-icon.svg") no-repeat 100%',
        right: 14,
        top: "50%",
        transform: 'translateY(-50%)',
        width: 14,
        height: 14,
    },
})

const StyledSearchBar = styled.input({
    background: "transparent",
    border: "1.5px solid",
    borderColor: "#414E25",
    borderRadius: 5,
    height: 37,
    paddingLeft: 14,
    width: "100%",
    color: '#77b102',
    fontFamily: 'Rubik',
    fontStyle: 'italic',
    fontWeight: 700,
    fontSize: 12,
    lineHeight: '130%',
    textTransform: 'uppercase',
    '&:focus': {
        outline: "none"
    },
    '&::placeholder': {
        color: '#414E25'
}
});




export const SearchBar = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return <StyledWrapper><StyledSearchBar {...props}/></StyledWrapper>
}