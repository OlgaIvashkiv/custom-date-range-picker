import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 359px;
  border: 1px solid ${ props => props.theme.colors.blue };
  overflow: hidden;
`

export const DateLabelStyled = styled.div`
    padding-top: 10px;
    height: 50px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 300;
`