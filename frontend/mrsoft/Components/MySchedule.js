import { View, Text,SafeAreaView,StyleSheet } from 'react-native';
import React,{useState} from 'react';
import {Calendar, LocaleConfig,CalendarList} from 'react-native-calendars';

import SafeViewAndroid from "./SafeViewAndroid";
import Agenda from './Agenda';

const MySchedule = ({navigation}) => {
    const [selectedDate,setSelectedDate]=useState('');
    const agendas={
        '2023-06-01': [{ title: 'Meeting 1' }, { title: 'Meeting 2' }],
        '2023-06-05': [{ title: 'Conference' }],
        '2023-06-10': [{ title: 'Workshop' }],
    }
    const docs=[{name:'sex',time:'midnight',speciality:"hotsex",phone:5845159565},{name:'sex',time:'midnight',speciality:"hotsex",phone:5845159565},{name:'sex',time:'midnight',speciality:"hotsex",phone:5845159565},{name:'sex',time:'midnight',speciality:"hotsex",phone:5845159565},{name:'sex',time:'midnight',speciality:"hotsex",phone:5845159565},{name:'sex',time:'midnight',speciality:"hotsex",phone:5845159565},{name:'sex',time:'midnight',speciality:"hotsex",phone:5845159565}]
    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
      };
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
    <Calendar
        markedDates={{ [selectedDate]: { selected: true } }}
        onDayPress={onDayPress}
      />
      {selectedDate && docs.map((item)=>{return<Agenda name={item.name} time={item.time} speciality={item.speciality} phone={item.phone} />})}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    agendaTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    agendaItem: {
      fontSize: 16,
      marginBottom: 4,
    },
  });

export default MySchedule