import styled from 'styled-components';

export const CalendarHeader = styled.div`
    top: 50%;
    margin-top: -225px;
    margin-left: -195px;
    width: 360px;
    overflow: hidden;
    margin: -15px -15px 10px;
    padding: 0 15px;
    background-color: ${ props => props.theme.colors.blue };
    color: ${ props => props.theme.colors.white };
    height: 70px;
    position: relative;

  `

export const Header = styled.h3`
      margin: 0;
      left: 40px;
      right: 40px;
      text-align: center;
      cursor: pointer;
      font-weight: 400;
      font-size: 1.3rem;
      letter-spacing: 2px;
      line-height: 66px;
      user-select: none;

      &:hover {
        color: ${ props => props.theme.colors.grey };
      }
  `

export const HeaderButton = styled.button`
      position: absolute;
      cursor: pointer;
      left: 10px;
      font-size: 32px;
      line-height: 1;
      top: 16px;
      width: 30px;
      margin: 0 20px;
      text-align: center;
      display: inline-block;
      color: rgb(0, 0, 0, .3);
      user-select: none;
      border: none;
      background-color: ${ props => props.theme.colors.blue };

      &:hover {
        color: ${ props => props.theme.colors.white };
      }

      &:last-child {
        left: auto;
        right: 10px;
      }
  
  `