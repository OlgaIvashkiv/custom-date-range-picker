import React, { useState } from 'react';
import moment from 'moment';
import Heading from '../Heading';
import Days from '../Days';
import { CalendarWrapper, DateLabelStyled } from './styles';

const Calendar = ({ type }) => {
    const [state, setState] = useState({
        date: moment(),
        startDate: moment(),
        endDate: moment()
    });

    const resetDate = () => {
        setState(prevState => ({
            ...prevState,
            date: moment()
        }));
    };

    const changeMonth = (month) => {
        let { date } = state;
        date.month(month);

        setState(prevState => ({
            ...prevState,
            date
        }));
    };

    const changeDate = (date) => {
        let { startDate, endDate } = state;
        if (type === 'range') {
            if (startDate === null || date.isBefore(startDate, 'day') || !startDate.isSame(endDate, 'day')) {
                startDate = moment(date);
                endDate = moment(date);
            } else if (date.isSame(startDate, 'day') && date.isSame(endDate, 'day')) {
                startDate = null;
                endDate = null;
            } else if (date.isAfter(startDate, 'day')) {
                endDate = moment(date);
            }
        }
        if(type === 'single') {
            if (startDate === null || date.isBefore(startDate, 'day') || startDate.isSame(endDate, 'day')) {
                startDate = moment(date);
                endDate = moment(date);
            } else if (date.isSame(startDate, 'day') && date.isSame(endDate, 'day')) {
                startDate = null;
                endDate = null;
            } else if (date.isAfter(startDate, 'day')) {
                endDate = startDate
            }
        }

        setState(prevState => ({
            ...prevState,
            startDate,
            endDate
        }));
    };

    const { date, startDate, endDate } = state;

    return (
        <CalendarWrapper>
            <DateLabelStyled>
                {
                    startDate.format('DD-MM-YYYY') === endDate.format('DD-MM-YYYY')

                        ? <>{startDate.format('DD-MM-YYYY')}</>

                        : <>{startDate.format('DD-MM-YYYY')} - {endDate.format('DD-MM-YYYY')}</>
                }
            </DateLabelStyled>

            <Heading date={date} changeMonth={(month) => changeMonth(month)} resetDate={() => resetDate()} />

            <Days onClick={(date) => changeDate(date)} date={date} startDate={startDate} endDate={endDate} />
        </CalendarWrapper>
    );

}

export default Calendar;