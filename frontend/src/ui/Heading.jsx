import styled, { css } from "styled-components";
import Mixins from "../styles/Mixins";

const Heading = styled.h1`
    color: var(--color-text-1);

    ${(props) =>
        props.var === "1" &&
        css`
            font-size: 28px;
            font-weight: 400;
            line-height: 1.1;

            ${Mixins.mediumTab`
                font-size: 28px;
            `};
        `}

    ${(props) =>
        props.var === "2" &&
        css`
            font-size: 28px;
            font-weight: 300;

            ${Mixins.mediumTab`
                font-size: 22px;
            `}
        `}

    ${(props) =>
        props.var === "3" &&
        css`
            font-size: 22px;
            font-weight: 600;

            ${Mixins.mediumTab`
                font-size: 22px;
            `}
        `}

    ${(props) =>
        props.var === "4" &&
        css`
            font-size: 18px;
            font-weight: 600;
        `}
`;

Heading.defaultProps = {
    var: "1",
};

export default Heading;
