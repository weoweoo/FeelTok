import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { useRouter } from 'expo-router';
import { DrawerContentComponentProps } from '@react-navigation/drawer';



const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    const router = useRouter();
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.drawerLogo}
          />
          <Text style={styles.headerText}>FeelTok</Text>
        </View>
  
        {/* Items */}
        <View style={styles.content}>
          <TouchableOpacity 
            style={styles.drawerItem}
            onPress={() => {
              router.push('/');
            }}
          >
            <Feather name="home" size={24} color="#333" />
            <Text style={styles.drawerItemText}>Home</Text>
          </TouchableOpacity>
  
          <TouchableOpacity 
            style={styles.drawerItem}
            onPress={() => {
              router.push('./newpage');
            }}
          >
            <Feather name="user" size={24} color="#333" />
            <Text style={styles.drawerItemText}>Profile</Text>
          </TouchableOpacity>
  
          <TouchableOpacity 
            style={styles.drawerItem}
            onPress={() => {
              router.push('../see/settings');
            }}
          >
            <Feather name="settings" size={24} color="#333" />
            <Text style={styles.drawerItemText}>Settings</Text>
          </TouchableOpacity>
        </View>
  
        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.drawerItem}
            onPress={() => {
              console.log('Logout pressed');
            }}
          >
            <Feather name="log-out" size={24} color="#FF4444" />
            <Text style={[styles.drawerItemText, { color: '#FF4444' }]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  export function TopBar() {
    return (
      <GestureHandlerRootView style={styles.container}>
        <Drawer 
          screenOptions={{
            header: ({ navigation }) => (
              <View style={styles.topBar}>
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Feather name="menu" size={24} color="#333" />
                </TouchableOpacity>
  
                <View style={styles.centerContainer}>
                  <Image
                    source={require('../../assets/images/logo.png')}
                    style={styles.logo}
                  />
                  <Text style={styles.logoText}>FeelTok</Text>
                </View>
  
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => { }}
                >
                  <View style={styles.circle}>
                    <Feather name="user" size={24} color="#333" />
                  </View>
                </TouchableOpacity>
              </View>
            ),
            drawerStyle: {
              width: 280,
              backgroundColor: '#FFFFFF',
            }
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
        </Drawer>
      </GestureHandlerRootView>
    );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF5',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
    backgroundColor: '#5AD4CB',
    paddingHorizontal: 15,
    shadowColor: '#C36922',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 1,
  },
  icon: {
    padding: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  centerContainer: {
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    zIndex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 20,
    fontWeight: '900',
    fontFamily: "times",
    color: '#333',
    marginTop: -5,
  },
  circle:{
    width: 40,
    height: 40, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    alignItems: 'center',
    marginTop: 30,
  },
  drawerLogo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  drawerItemText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  footer: {
    padding: 20,
    paddingBottom: 90,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
});
