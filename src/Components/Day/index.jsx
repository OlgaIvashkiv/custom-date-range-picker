import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DayWrapper } from './styles';

const Day = ({ currentDate, date, startDate, endDate, onClick }) => {
    const className = [];

    if (moment().isSame(date, 'day')) {
        className.push('active');
    }

    if (date.isSame(startDate, 'day')) {
        className.push('start');
    }

    if (date.isBetween(startDate, endDate, 'day')) {
        className.push('between');
    }

    if (date.isSame(endDate, 'day')) {
        className.push('end');
    }

    if (!date.isSame(currentDate, 'month')) {
        className.push('muted');
    }

    return (
        <DayWrapper onClick={() => { onClick(date) }} className={ className.join(' ') }>
            { date.date() }
        </DayWrapper>
    )
};

Day.propTypes = {
    currentDate: PropTypes.instanceOf(moment).isRequired, 
    date: PropTypes.instanceOf(moment).isRequired, 
    startDate: PropTypes.instanceOf(moment).isRequired, 
    endDate: PropTypes.instanceOf(moment).isRequired, 
    onClick: PropTypes.func.isRequired
}

export default Day;