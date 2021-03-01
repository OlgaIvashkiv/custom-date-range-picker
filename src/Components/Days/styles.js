import styled from 'styled-components';

export const WeekDays = styled.div`
      display: flex;
      justify-content: space-around;
      text-align: center;
      user-select: none;
      margin-bottom: 8px;
      padding-bottom: 8px;
      line-height: 34px;
      position: relative;
      text-transform: uppercase;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.3);
      font-size: 14px;
      cursor: initial;
      border-bottom: 1px solid ${ props => props.theme.colors.grey };
      
`

export const DaysWrapper = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      text-align: center;
      user-select: none;
      cursor: pointer;
      margin: 8px 0;
      line-height: 34px;
      position: relative;
      font-size: 16px;
`