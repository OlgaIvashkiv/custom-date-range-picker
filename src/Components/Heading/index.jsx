import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { CalendarHeader, Header, HeaderButton } from './styles';

const Heading = ({ date, changeMonth, resetDate }) => {
    return (
        <CalendarHeader>
            <HeaderButton onClick={ () => changeMonth(date.month() - 1) }>&#8249;</HeaderButton>
            <Header onClick={ () => resetDate() }> { date.format('MMMM') } { date.format('YYYY') }</Header>
            <HeaderButton onClick={ () => changeMonth(date.month() + 1) }>&#8250;</HeaderButton>
        </CalendarHeader>
    )
};

Heading.defaultProps = {
    date: moment()
};

Heading.propTypes = {
    date: PropTypes.instanceOf(moment).isRequired,
    changeMonth: PropTypes.func.isRequired,
    resetDate: PropTypes.func.isRequired
}

export default Heading;