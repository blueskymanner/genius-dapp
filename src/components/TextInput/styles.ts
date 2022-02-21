import styled from "styled-components";
import tw from "twin.macro";


export const TextInputContainer = styled.div`
    max-width: 500px;
`;


export const Label = styled.p`
    ${tw`
        mt-2
        text-sm
        text-gray-900
    `};
`;

export const Input = styled.input`
    ${tw`
        shadow-sm 
        focus:ring-yellow-500 
        focus:border-yellow-500 
        block w-full 
        sm:text-sm 
        border-gray-300 
        rounded-md
    `};
`;