import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Settings from './screens/Settings';
import Storys from './screens/Storys';
import Home from './screens/Home';
import { IconButton } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Storys"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#3F72AF' }}
      >
        <Tab.Screen
          name="Home" component={Home}
          options={{
            tabBarLabel: "Trang chủ",
            title: "Trang chủ"
            , tabBarIcon: (props) => (
              <MaterialCommunityIcons name="home" size={32} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Storys"
          component={Storys}
          options={{
            tabBarLabel: "Tin nhắn"
            , title: "Tin nhắn"
            , tabBarIcon: (props) => (
              <MaterialCommunityIcons name="email" size={32}/>
            )
            ,tabBarActiveTintColor: "red"
            ,headerShown: false
            
          }} />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "Cài đặt"
            , title: "Cài đặt"
            , tabBarIcon: (props) => (
              <MaterialCommunityIcons name="cog" size={32} />
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
