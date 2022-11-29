import styled from "styled-components";

export const PostContainer = styled.div`
  .button1 {
    /* https://getcssscan.com/css-buttons-examples?ref=beautifulboxshadow-bottom */

    align-items: center;
    background-color: initial;
    background-image: linear-gradient(
      rgba(179, 132, 201, 0.84),
      rgba(57, 31, 91, 0.84) 50%
    );

    border-radius: 2rem;
    border-width: 0;
    flex-direction: row;
    box-shadow: rgba(57, 31, 91, 0.24) 0 2px 2px,
    rgba(179, 132, 201, 0.4) 0 8px 12px;
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;

  
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.04em;
    line-height: 16px;

    margin: 0;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    text-shadow: rgba(255, 255, 255, 0.4) 0 0 4px,
    rgba(255, 255, 255, 0.2) 0 0 12px, rgba(57, 31, 91, 0.6) 1px 1px 4px,
    rgba(57, 31, 91, 0.32) 4px 4px 16px;

    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;

    &:hover {
      background-image: linear-gradient(#b384c9, #391f5b 50%);
    }
    
  }

  .button2 {
    align-items: center;
    background-color: initial;
    background-image: linear-gradient(
      rgba(179, 132, 201, 0.84),
      rgba(57, 31, 91, 0.84) 50%
    );

    border-radius: 2rem;
    border-width: 0;
    flex-direction: row;
    box-shadow: rgba(57, 31, 91, 0.24) 0 2px 2px,
    rgba(179, 132, 201, 0.4) 0 8px 12px;
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;

  
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.04em;
    line-height: 16px;

    margin: 0;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    text-shadow: rgba(255, 255, 255, 0.4) 0 0 4px,
    rgba(255, 255, 255, 0.2) 0 0 12px, rgba(57, 31, 91, 0.6) 1px 1px 4px,
    rgba(57, 31, 91, 0.32) 4px 4px 16px;

    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;

    &:hover {
      background-image: linear-gradient(#b384c9, #391f5b 50%);
    }
  }
`;
