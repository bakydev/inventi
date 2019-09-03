import styled from 'styled-components';

// Style for Page Not Found
const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px;

    h1, p {
        color: #666;
    }

    a {
        color: #00d1b2;
    }
`;

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
`;

// Loader style
const Spinner = styled.div`
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;

    div {
        animation: roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 32px 32px;

        &::after {
            content: " ";
            display: block;
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #00d1b2;
            margin: -3px 0 0 -3px;
        }

        &:nth-child(1) {
            animation-delay: -0.036s;

            &:after {
                top: 50px;
                left: 50px;
            }
        }

        &:nth-child(2) {
            animation-delay: -0.072s;

            &:after {
                top: 54px;
                left: 45px;
            }
        }

        &:nth-child(3) {
            animation-delay: -0.108s;

            &:after {
                top: 57px;
                left: 39px;
            }
        }

        &:nth-child(4) {
            animation-delay: -0.144s;

            &:after {
                top: 58px;
                left: 32px;
            }
        }

        &:nth-child(5) {
            animation-delay: -0.18s;

            &:after {
                top: 57px;
                left: 25px;
            }
        }

        &:nth-child(6) {
            animation-delay: -0.216s;

            &:after {
                top: 54px;
                left: 19px;
            }
        }

        &:nth-child(7) {
            animation-delay: -0.252s;

            &:after {
                top: 50px;
                left: 14px;
            }
        }

        &:nth-child(8) {
            animation-delay: -0.288s;

            &:after {
                top: 45px;
                left: 10px;
            }
        }
    }

    @keyframes roller {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;


// Form styles
const PageWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.alignItems || 'flex-start'};
    margin: ${props => props.margin || '15px'};
    height: 100%;
`;

const Title = styled.h1`
    color: #455451;
    font-size: 24px;
`;

const StyledP = styled.p`
    color: #717171;
    margin: 0 0 10px 0;
`;

const FormikWrapper = styled.div`
    margin: 20px 0 50px 0;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyledLabel = styled.label`
    color: #666;
    background-color: #e6e6e6;
    display: inline-flex;
    padding: 17px 15px 15px 15px;
    border: 1px solid #e6e6e6;

    i.fas.fa-city {
        width: 100%;
        height: 16px;
    }
`;

const StyledInput = styled.input`
    background-color: #e6e6e6;
    height: 48px;
    color: #666;
    font-size: 18px;
    padding: 0 30px 0 30px;
    position: relative;
    border: 1px solid transparent;
    border-left: 2px solid #fff;
    border-right: 2px solid #fff;
    outline: none;
    transition: border .3s ease-in;

    &:focus {
        border-top: 1px solid #00d1b2;
        border-bottom: 1px solid #00d1b2;
    }

    &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #e6e6e6 inset;
        -webkit-text-fill-color: #666;
        border-top: 1px solid #00d1b2;
        border-bottom: 1px solid #00d1b2;
    }
`;

const StyledButton = styled.button`
    background-color: #00d1b2;
    font-size: 18px;
    font-weight: bold;
    padding: 0 20px;
    border: none;
    outline: none;
    color: #fff;
    height: 50px;
    cursor: pointer;
    opacity: .9;
    transition: opacity .2s ease-in;

    &:hover {
        opacity: 1;
    }
`;

const StyledError = styled.div`
    background-color: rgba(222, 93, 93, 0.1);
    color: #de5d5d;
    font-size: 18px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 0 0;
    padding: ${props => props.padding || '0'};
`;


// Weather style
const WeatherWrapper = styled.div`
    box-shadow: 0 0 3px 1px rgba(0,0,0,0.1);
    background-color: #02b0f1;
    width: 800px;
    height: 300px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-items: ${props => props.alignItems || 'flex-start'};
    margin: ${props => props.margin || '0'};
`;

const WeatherElement = styled.p`
    font-size: ${props => props.fontSize || '18px'};
    color: #fff;
    margin: ${props => props.margin || '0'};

    img {
        width: 70px;
    }
`;


// Related forecast style
const Related = styled.div`
    box-shadow: 0 0 3px 1px rgba(0,0,0,0.1);
    display: flex;
    padding: 20px;
`;

const StyledUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex: 1;
`;

const StyledLi = styled.li`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #dcdcdc;

    &:first-child {
        border-left: none;
    }
`;

const RelatedIcon = styled.div`
    margin: 5px 0;

    img {
        width: 30px;
        height: auto;
    }
`;

const RelatedDate = styled.div`
    color: #00d1b2;
`;

const RelatedTemp = styled.div`
    color: #666;
`;


export {
    NotFoundWrapper,
    LoaderWrapper,
    Spinner,
    PageWrapper,
    Title,
    StyledP,
    FormikWrapper,
    StyledForm,
    StyledLabel,
    StyledInput,
    StyledButton,
    StyledError,
    WeatherWrapper,
    WeatherElement,
    Flex,
    Related,
    StyledUl,
    StyledLi,
    RelatedIcon,
    RelatedDate,
    RelatedTemp,
}