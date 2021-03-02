import React from 'react';
import Calendar from './Components/Calendar';
import Theme from './Theme';

const types = ['single', 'range'];

export default function App() {
  return (
    <Theme>
      <Calendar type={ types[0] }/>
      <Calendar type={ types[1] }/>
    </Theme>
  );
}