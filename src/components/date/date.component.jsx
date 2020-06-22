import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  ActiveLabel, 
  DeathLabel, 
  RecoveredLabel, 
  DayList,
  DateField
} from './date.style';

const DatePreview = ({country}) => {  
    const { 
      Confirmed, 
      Recovered,
      Active,
      Deaths,
      Date 
    } = country;
    return (  
      <DayList>
          <DateField>{Date.substr(0,Date.indexOf("T")).split("-")[2]}</DateField>
          <ActiveLabel><label>Confirmed Cases</label>: <span>{Confirmed}</span></ActiveLabel>
          <RecoveredLabel><label>Recovered Cases</label>: <span>{Recovered}</span></RecoveredLabel>
          <ActiveLabel><label>Active Cases</label>: <span>{Active}</span></ActiveLabel>
          <DeathLabel><label>Death Cases</label>: <span>{Deaths}</span></DeathLabel>
      </DayList> 
    )   
};

export default withRouter(DatePreview);