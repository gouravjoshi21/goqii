import Mixins from "@/Styles/Mixins";
import styled, { css } from "styled-components";

const varients = [
    css`
        top: -200px;
        right: -200px;
        filter: blur(150px);

        ${Mixins.phone`
            width: 250px;
            height: 250px;
            filter: blur(100px);
            top: -100px;
            right: -100px;
        `}
    `,
    css`
        filter: blur(120px);

        top: 80px;
        left: 50%;
        transform: translate(-50%, 0);

        ${Mixins.phone`
            width: 200px;
            height: 200px;
            left: 50%;
            bottom: 100px;
            filter: blur(90px);
        `}
    `,
    css`
        top: 50%;
        left: 0px;
        transform: translateY(-50%);
        filter: blur(180px);

        ${Mixins.phone`
            width: 100px;
            height: 100px;
            top: -50px;
            right: -50px;
            filter: blur(100px);
        `}
    `,
    css`
        left: -50px;
        top: -50px;
        filter: blur(120px);
        background: var(--color-rand-3);

        ${Mixins.phone`
     
        `}
    `,
];

const Blob = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: var(--color-prim-1);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;

    position: absolute;
    z-index: -1;

    filter: blur(135px);

    ${(props) => varients[props.index - 1]}

    ${(props) =>
        props.top &&
        `
        top: ${props.top};
    `}
    ${(props) =>
        props.left &&
        `
        left: ${props.left};
    `}
    ${(props) =>
        props.right &&
        `
        right: ${props.right};
    `}
    ${(props) =>
        props.bottom &&
        `
        bottom: ${props.bottom};
    `}
`;

Blob.defaultProps = {
    width: "200px",
    height: "200px",
    blur: "150px",
    grad: "1",
};

export default Blob;
