import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, Touchable, ScrollView, Dimensions } from 'react-native';

const doctor = require('./images/doctor.jpg');
const notificationIcon = require('./images/notification.png');
const searchIcon = require('./images/search.png');
const dateIcon = require('./images/date.png');
const timeIcon = require('./images/time.png');
const starIcon = require('./images/star.png');
const menuIcon = require('./images/menu.png');
const takenIcon = require('./images/takenIcon.png');
const coldactIcon = require('./images/coldacticon.png');
const ibuprofenIcon = require('./images/pillsicon.png');
const saatIcon = require('./images/saatIcon.png');
const arrowIcon = require('./images/arrowIcon.png');
const deviIcon = require('./images/deviIcon.png');

export default function App() {
  return (
    <View style={styles.container}>
      
        <View style={styles.header}>
          <View style={styles.leftHeader}>
              <View style={styles.image}>
                <Image style={styles.imageURL} source = {{ uri: 'https://www.furkanmehmetyilmaz.com/wp-content/uploads/2022/12/web-sitesi-8-1.png'}}/>
              </View>
                <Text style={styles.name}>Furkan Yılmaz</Text>
            </View>
          <View style={styles.rightHeader}>
              <TouchableOpacity style={styles.button}>
                <Image style={styles.headerIcon} source={searchIcon}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Image style={styles.headerIcon} source={notificationIcon}/>
              </TouchableOpacity>
          </View>
        </View>
        <View>
        </View>
  
   
    <View style={styles.content}>
      <Text style={styles.contentText}> Upcoming Appointment </Text>
      <View style={styles.userContent}>
        <View style={styles.userInfo}>
          <View style={styles.userImage}>
             <Image style={styles.imageDoctor} source={doctor} />
          </View>
          <View style={styles.userText}>
            <Text style={styles.userName}>Furkan Yılmaz</Text>
            <Text style={styles.userJob}>Terapist</Text>
            <View style={styles.userPoint}>
              <View style={styles.star}>
                <Image style={styles.starIcon} source={starIcon} />
              </View>
              <Text style={styles.point}>4.8</Text>
            </View>
          </View>
        
             <TouchableOpacity style={styles.userButton}>
                <Image style={styles.whiteIcon} source={menuIcon} />
             </TouchableOpacity>
          
        </View>
        <View style={styles.dateInfo}>
          <View style={styles.date}>
            <View style={styles.dateIconContainer}>
              <Image style={styles.whiteIcon} source={dateIcon} />
            </View>
            <Text style={styles.dateText}>09.07.2023</Text>
          </View>
          <View style={styles.time}>
            <View style={styles.timeIcon}>
              <Image style={styles.timeIcon} source = {timeIcon} />
            </View>
            <Text style={styles.timeText}>10:00 - 11:00 AM</Text>
          </View>
        </View>
      </View>
    </View>

    <View style={styles.medicineContainer}>
      <Text style={styles.contentText}>Today's Medicines</Text>
      <ScrollView horizontal><View style={styles.kutucuklar}>
        <View style={styles.coldact}>
          <View style={styles.coldactIconContainer}><Image style={styles.coldactIcon} source={coldactIcon} /></View>
          <Text style={styles.textColdact}>Coldact</Text>
          <Text style={styles.textKullanim}>3 capsules / day</Text>
          <TouchableOpacity style={styles.taken}>
            <View style={styles.takenButton}>
            <Text style={styles.takenText}>Taken</Text>
            <Image style={styles.takenImage}  source={takenIcon} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.ibuprofen}>
        <View style={styles.ibuprofenIconContainer}>
          <Image style={styles.ibuprofenIcon} source={ibuprofenIcon} /></View>
          <Text style={styles.textIbuprofen}>Coldact</Text>
          <Text style={styles.textDay}>3 capsules / day</Text>
          <TouchableOpacity style={styles.pm}>
            <View style={styles.saatButton}>
            <Text style={styles.saatText}> 02:00 PM</Text>
            <Image style={styles.saatImage}  source={saatIcon} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.ibuprofen}>
        <View style={styles.ibuprofenIconContainer}>
          <Image style={styles.ibuprofenIcon} source={ibuprofenIcon} /></View>
          <Text style={styles.textIbuprofen}>Coldact</Text>
          <Text style={styles.textDay}>3 capsules / day</Text>
          <TouchableOpacity style={styles.pm}>
            <View style={styles.saatButton}>
            <Text style={styles.saatText}> 02:00 PM</Text>
            <Image style={styles.saatImage}  source={saatIcon} />
            </View>
          </TouchableOpacity>
        </View></View>
        </ScrollView>
      </View>

    <View style={styles.medicalTests}>
        <View style={styles.medicalHeader}>
          <Text style={styles.medicalText}>Medical tests</Text>
          <TouchableOpacity style={styles.medicalButton}>
           <Text style={styles.allText}>All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.medicalContent}>
          <View style={styles.redContainer}></View>
          <View style={styles.bioContainer}>
            <Text style={styles.bioText}>Biochemical blood test</Text>
            <View style={styles.deviContainer}> 
              <Text style={styles.deviText}>Deviation</Text>
              <View style={styles.deviButton}>
                <Image style={styles.deviIcon} source= {deviIcon} />
                <Text style={styles.yuzde}>35%</Text>
              </View>
            </View>
            </View>
            <View style={styles.arrowButton}>
              <TouchableOpacity>
              <Image style={styles.arrowIcon} source = {arrowIcon} />
              </TouchableOpacity>
              </View>
            </View>
        </View>
        
        </View>
        
     

   


  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: '#fefefe',
    flex: 1,
    
  },

  header: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      marginBottom: 10,
  },
 
  leftHeader: {
    flex: 1, 
    flexDirection: 'row',
    backroundColor: 'red',
    alignItems: 'center',
  },
  rightHeader: {
    flex: 1, 
    flexDirection: 'row',
    backroundColor: 'blue',
    justifyContent: 'flex-end',
  },
  image: {
    width: 50, 
    height: 50, 
    borderRadius: 50,
    backgroundColor: '#bbb',
    marginRight: 10,
    overflow: 'hidden',
  },
  imageURL: {
    width: 50,
    height: 50,
  
  },
  button: {
    width: 40,
    height: 50,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  headerIcon: {
      width: 24,
      height: 24,
  },
  name: {
    fontSize: 12,
  fontWeight: 'bold',
},
content: {
  padding: 16,
  width: '100%',
 
},
contentText: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#444',
  marginVertical: 16, 
  paddingHorizontal: 10,
},
userContent: {
  width: '100%',
  backgroundColor: '#6880F9',
  padding: 16,
  borderRadius: 10,
},
userInfo: {
  width: '100%',
  height: 64,
  flexDirection: 'row',
  
},
userImage: {
width: 64,
height: 64,
borderRadius: 4,
backgroundColor: '#bbb',
},
userText: {
  flex: 1, 
  marginHorizontal: 10,
  justifyContent: 'space-between',

},
userName: {
  fontSize: 16, 
  fontWeight: 'bold',
  color: '#fefefe', 
},
userJob: {
  fontSize: 14, 
  fontWeight: '400',
  color: '#fefefe', 
},
userPoint: {
  flexDirection: 'row',
  backgroundColor: '#fefefe',
  paddingVertical: 2,
  paddingHorizontal: 6,
  borderRadius: 10,
  width: 58,
  marginTop: 2,
  alignItems: 'center',
  justifyContent: 'center',
},
star: {
  width: 16,
  height: 16,
  backgroundColor: '#bbb',
  marginRight: 4, 
  borderRadius: 8,
},
point: {
  fontSize: 12, 
  fontWeight: 700,
  color: '#444',
},
userButton: {
  width: 42,
  height: 42, 
  backgroundColor: '#fefefe44',
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
},
dateInfo: {
  flexDirection: 'row',
  backgroundColor: '#5F71E1',
  marginTop: 24,
  padding: 12,
  borderRadius: 10,
},
date: {
  flex: 1, 
  flexDirection: 'row',
  alignItems: 'center',
},
dateIconContainer: {
  width: 16,
  height: 16,
  borderRadius: 8,
  marginRight: 4,
  justifyContent: 'center', 
  alignItems: 'center',

},
dateIcon: {
  width: 12,
  height: 12,
  tintColor: '#fefefe',
},
dateText: {
  fontSize: 14, 
  fontWeight: 700,
  color: '#fefefe',
},
time: {
flex: 1, 
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'flex-end',
},
timeIcon: {
  width: 16,
  height: 16,
  borderRadius: 8,
  marginRight: 4,
  tintColor: '#fefefe'
},
timeText: {
  fontSize: 14,
  fontWeight: 700,
  color: '#fefefe',
},
imageDoctor: {
  width: 64,
  height: 64, 
  borderRadius: 4, 
},
whiteIcon: {
  width: 24, 
  height: 24,
  tintColor: '#fefefe',
},
starIcon: {
  width: 14,
  height: 14,

},
kutucuklar: {
  
  flexDirection: 'row',
  
  marginHorizontal: 10,

  
},

coldact: {
  
  backgroundColor: '#d9d9d9',
  padding: 20,
  width: 150,
  height: Dimensions.get('window').height / 4,
  borderRadius: 10,
},
takenButton: {
  flexDirection: 'row',
},
coldactIconContainer: {
  backgroundColor: '#00AA15',
  
  borderRadius: 5,
  width: 50,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 40,
},
coldactIcon: {
  
  tintColor: '#fefefe',
},
textColdact: {
  fontSize: 16,
  fontWeight: 600,
  marginVertical: 10,
},
textKullanim: {
  fontSize: 14,
  fontWeight: 400,
},
takenButton: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#6888F6',
  marginTop: 10,
  borderRadius: 18,
  padding: 10,
  
},
takenText: {
  fontSize: 14,
  color: '#fefefe',
  marginRight: 10,
},
takenImage: {
  width: 16,
  height: 16,
  tintColor: '#fefefe',
},
ibuprofen: {
  backgroundColor: '#d9d9d9',
  padding: 20,
  width: 150,
  height: Dimensions.get('window').height / 4,
  borderRadius: 10,
  marginHorizontal: 10,
},
ibuprofenIconContainer: {
  backgroundColor: '#ED6A6A',
  borderRadius: 5,
  width: 50,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 40,
},
ibuprofenIcon: {
  tintColor: '#fefefe',
},
textIbuprofen: {
  fontSize: 16,
  fontWeight: 600,
  marginVertical: 10,
},
textDay: {
  fontSize: 14,
  fontWeight: 400,
},
saatButton: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#6888F6',
  marginTop: 10,
  borderRadius: 18,
  padding: 10,
},
saatText: {
  fontSize: 14,
  color: '#fefefe',
  marginRight: 10,
  
},
saatImage: {
  width: 16,
  height: 16,
  tintColor: '#fefefe',
},
medicalTests: {
    backgroundColor: '#fefefe',
    flex: 1,
    
},
medicalHeader: {
  flex: 1,
  flexDirection: 'row',

  alignItems: 'center',
},
medicalText: {
  fontSize: 18,
  width: '80%',
  fontWeight: 'bold',
  color: '#444',
  
  paddingHorizontal: 10,
  flexDirection: 'row',
  justifyContent: 'flex-start',
},
medicalButton: {
  width: '20%',
  
  
},
allText: {
justifyContent: 'flex-end',
marginLeft: 40, 
fontSize: 16,
fontWeight: '600',
color: 'blue',
},
medicalContent: {
 backgroundColor: '#d9d9d9',
 flexDirection: 'row',
 marginBottom: 140, 
 padding: 16,
 borderRadius: 8,
 margin: 10,
},
redContainer: {
  width: 40,
  height: 40,
  backgroundColor: 'red',
  borderRadius: 10,
},
bioContainer: {
 flex: 1,
 marginLeft: 10,
},
bioText: {
  fontSize: 18,
  fontWeight: 500,
  
},
deviContainer: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
},

deviButton: {
  backgroundColor: 'red',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 10,
  flexDirection: 'row',
  padding: 5,
  borderRadius: 5,
},
deviText: {
  color: 'red',
},
deviIcon: {
  width: 16,
  height: 16,
  tintColor: '#fefefe',
},
yuzde: {
  color: '#fefefe',
},
arrowButton: {
  width: 50,
  height: 50,
},
arrowIcon: {
  tintColor: 'gray'
},



});
