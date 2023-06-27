import React, {useRef, useCallback,useState} from 'react';
import { AntDesign } from '@expo/vector-icons'
import {NativeBaseProvider,Fab,Icon,Button,Modal} from 'native-base';
import {SafeAreaView, StyleSheet,Platform,StatusBar,View} from 'react-native';
import {ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar} from 'react-native-calendars';
import testIDs from '../testIDs';
import {agendaItems, getMarkedDates} from '../mocks/agendaItems';
import AgendaItem from '../mocks/AgendaItem';
import {getTheme, themeColor, lightThemeColor} from '../mocks/theme';
import ModalComponent from './ModalComponent';

const leftArrowIcon = require('../img/previous.png');
const rightArrowIcon = require('../img/next.png');
const ITEMS: any[] = agendaItems;

interface Props {
  weekView?: boolean;
}

const ExpandableCalendarScreen = (props: Props) => {
  
  const {weekView} = props;
  const marked = useRef(getMarkedDates());
  const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: themeColor
  });
  const [showModal, setShowModal] = useState(false);
  const addAgenda = ()=>{
    setShowModal(true);
    
  }
  // const modalRef = useRef(null);

  // const addAgenda = ()=>{
  // }

  // const onDateChanged = useCallback((date, updateSource) => {
  //   console.log('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
  // }, []);

  // const onMonthChange = useCallback(({dateString}) => {
  //   console.log('ExpandableCalendarScreen onMonthChange: ', dateString);
  // }, []);

  const renderItem = useCallback(({item}: any) => {
    return <AgendaItem item={item}/>;
  }, []);
  

  return (
    <NativeBaseProvider>
    <SafeAreaView style={styles.AndroidSafeArea}> 
    <CalendarProvider
      date={ITEMS[1]?.title}
      // onDateChanged={onDateChanged}
      // onMonthChange={onMonthChange}
      // showTodayButton
      // disabledOpacity={0.6}
      theme={todayBtnTheme.current}
      // todayBottomMargin={16}
    >
      {weekView ? (
        <WeekCalendar testID={testIDs.weekCalendar.CONTAINER} firstDay={1} markedDates={marked.current}/>
      ) : (
        <ExpandableCalendar
          testID={testIDs.expandableCalendar.CONTAINER}
          // horizontal={false}
          // hideArrows
          // disablePan
          // hideKnob
          // initialPosition={ExpandableCalendar.positions.OPEN}
          // calendarStyle={styles.calendar}
          // headerStyle={styles.header} // for horizontal only
          // disableWeekScroll
          theme={theme.current}
          // disableAllTouchEventsForDisabledDays
          firstDay={1}
          markedDates={marked.current}
          leftArrowImageSource={leftArrowIcon}
          rightArrowImageSource={rightArrowIcon}
          // animateScroll
          onDayLongPress={addAgenda}
          // closeOnDayPress={false}
        />
      )}
      <View>
        <AgendaList
        sections={ITEMS}
        renderItem={renderItem}
        // scrollToNextEvent
        sectionStyle={styles.section}
        // dayFormat={'yyyy-MM-d'}
      />
      <Fab onPress={() => setShowModal(true)} renderInPortal={false} shadow={2} size="sm" placement='top-right' icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />} />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} _backdrop={{
      _dark: {
        bg: "coolGray.800"
      },
      bg: "warmGray.50"
    }}>
        <Modal.Content maxWidth="500" maxH="600">
          <Modal.CloseButton />
          <Modal.Header>Add Agenda</Modal.Header>
          <Modal.Body>
            <ModalComponent/>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setShowModal(false);
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      </View>      
    </CalendarProvider>
    
    </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default ExpandableCalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    backgroundColor: 'lightgrey'
  },
  section: {
    backgroundColor: lightThemeColor,
    color: 'grey',
    textTransform: 'capitalize'
  },
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});
