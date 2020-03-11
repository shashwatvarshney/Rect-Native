import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from  '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
// import {createAppContainer} from 'react-navigation';
// import {Icon} from 'react-native-elements';

import React from 'react';
const Tab = createBottomTabNavigator();
const aab = createMaterialBottomTabNavigator();

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  
} from 'react-native';
export default class home extends React.Component{
    render(){
        return(
          
          <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
        
      );
}
}
function HomeScreen() {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>



  <Text>Home Screen</Text>
</View>
);
}

const Stack = createStackNavigator();

function SettingsScreen() {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>SettingsScreen</Text>
</View>
);
}




// const TabNavigator=createMaterialBottomTabNavigtor(
//   {
//   HomeScreen:{
//     screen:Home,
//     navigationOption:{
//       tabBarLabel:'Home',
//       activeColor:'#ff0000',
//       inactiveColor:'000000',
//       barStyle:{
//         backgroundColor:'#67baf6'
//       },
//       tabBarIcon:()=>(
//         <View>
//           <Icon name={'home'} size={25} style={{color:'ff0000'}}/>
//         </View>
//       )
//     }
//   }
// }
// );

// export default createAppContainer(TabNavigator);