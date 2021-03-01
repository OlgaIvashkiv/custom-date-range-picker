import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import uniqid from 'uniqid';
import Day from '../Day';
import { DaysWrapper, WeekDays } from './styles';

const Days = ({ date, startDate, endDate, onClick }) => {

    const thisDate = moment(date);
    const daysInMonth = moment(date).daysInMonth();
    const firstDayDate = moment(date).startOf('month');
    const previousMonth = moment(date).subtract(1, 'month');
    const previousMonthDays = previousMonth.daysInMonth();
    const nextMonth = moment(date).add(1, 'month');
    const days = [];
    const weekDays = [];

    for (let i = 1; i <= 7; i++) {
        weekDays.push(<div key={ uniqid() }>{ moment().day(i).format('ddd') }</div>);
    }

    for (let i = firstDayDate.day(); i > 1; i--) {
        previousMonth.date(previousMonthDays - i + 2);

        days.push(
            <Day key={ uniqid() } 
                onClick={ (date) => onClick(date) } 
                currentDate={ date } 
                date={ moment(previousMonth) } 
                startDate={ startDate } 
                endDate={ endDate } 
            />
        );
    }

    for (let i = 1; i <= daysInMonth; i++) {
        thisDate.date(i);

        days.push(
            <Day key={ uniqid() } 
                onClick={ (date) => onClick(date) } 
                currentDate={ date } 
                date={ moment(thisDate) } 
                startDate={ startDate } 
                endDate={ endDate } 
            />
        );
    }

    const daysCount = days.length;
    for (let i = 1; i <= (42 - daysCount); i++) {
        nextMonth.date(i);
        days.push(
            <Day key={ uniqid() } 
                onClick={(date) => onClick(date) } 
                currentDate={ date } 
                date={ moment(nextMonth) } 
                startDate={ startDate } 
                endDate={ endDate } />
        );
    }

    return (
        <>
            <WeekDays>{ weekDays.concat() }</ WeekDays>
            <DaysWrapper>{ days.concat() }</ DaysWrapper>
        </>
    );
};

Days.propTypes = {
    currentDate: PropTypes.instanceOf(moment),
    date: PropTypes.instanceOf(moment).isRequired,
    startDate: PropTypes.instanceOf(moment).isRequired,
    endDate: PropTypes.instanceOf(moment).isRequired,
    onClick: PropTypes.func.isRequired
}

export default Days;