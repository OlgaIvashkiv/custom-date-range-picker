import styled from 'styled-components';

export const DayWrapper = styled.div`
      width: 15%;

      &.active {
        font-weight: 700;
        color: ${ props => props.theme.colors.white };
        background-color: ${ props => props.theme.colors.green };
      }

      &.muted {
        color: rgba(0, 0, 0, 0.3);
      }

      &.between {
        background-color: ${ props => props.theme.colors.mutedBlue };
        color: ${props => props.theme.colors.white };
      }

      &.start, &.end {
        background-color: ${ props => props.theme.colors.blue };
        color: ${ props => props.theme.colors.white };
      }

      &.between:nth-child(7n):after, &.start:nth-child(7n):after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 100%;
        background-color:  ${ props => props.theme.colors.mutedBlue };
        width: 20px;
      }

      &.between:nth-child(7n + 1):after, &.end:nth-child(7n + 1):after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 100%;
        background-color:  ${ props => props.theme.colors.mutedBlue };
        width: 20px;
      } 
  
`