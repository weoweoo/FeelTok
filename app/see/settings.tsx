import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Switch,
  Platform,
  Linking,
  Modal,
  FlatList,
  TextInput
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Button from '@mui/material/Button';
import { Search } from 'lucide-react';
import { COUNTRIES, Country } from './country'; 
import { router } from "expo-router";


export default function Settings({ navigation }: any) {
  // Country Selector functions
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
  
    const filteredCountries = COUNTRIES.filter(Country =>
      Country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const handleSelectCountry = (country: Country) => {
      setSelectedCountry(country);
      setModalVisible(false);
    };

  const [form, setForm] = useState({
    pushNotifications: false,
  });

// Open play store functions
  const openStore = () => {
    let storeUrl = '';
    
    if (Platform.OS === 'android') {
      storeUrl = 'https://play.google.com/store/apps/details?id=com.yourapp';
    } else if (Platform.OS === 'ios') {
      storeUrl = 'https://apps.apple.com/us/app/your-app-name/id1234567890';
    } else {
            alert('Store not supported, This platform is not supported.');
            return;
    }

    // Open the store URL
    Linking.openURL(storeUrl).catch((err) => console.error('Failed to open store URL:', err));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFAF5' }}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerAction}>
          <TouchableOpacity
              onPress={() => router.navigate('../(tabs)/create')}
            >
            <Feather
              color="#FFFFFF"
              name="chevron-left"
              size={30} />
          </TouchableOpacity>
        </View>

        <Text numberOfLines={1} style={styles.headerTitle}>
          Settings
        </Text>

        <View style={[styles.headerAction, { alignItems: 'flex-end' }]}>
          <TouchableOpacity
            onPress={() => {
              
            }}>

          </TouchableOpacity>
        </View>
      </View>

        {/* Body */}
      <ScrollView contentContainerStyle={styles.content}>

        {/* Profile */}
        <View style={[styles.section, { paddingTop: 4 }]}>

            <TouchableOpacity
              onPress={() => {
                // Placeholder
              }} 
              style={styles.profile}> 
              <View style={styles.circle}>
              <Feather
                color="#FFFAF5"
                name="user"
                size={50} />
            </View>

              <View style={styles.profileBody}>
                <Text style={styles.profileName}>John Doe</Text>

                <Text style={styles.profileHandle}>john@example.com</Text>
              </View>

            </TouchableOpacity>
        </View>
        
        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>

          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  // placeholder
                }}
                style={styles.row}>
                <Text style={styles.rowLabel}>Manage Account</Text>
                <View style={styles.rowSpacer} />
                <Feather
                  color="#bcbcbc"
                  name="chevron-right"
                  size={19} />
              </TouchableOpacity>
            </View>

            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => 
                  setModalVisible(true)
                }
                style={styles.row}>
                <Text style={styles.rowLabel}>Country</Text>

                <View style={styles.rowSpacer} />

                {/* Select Country Section */}
                <Text style={styles.rowValue}>{selectedCountry ? selectedCountry.name : 'Select Country'}</Text>
                <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#e5e5e5' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8 }}>
              <Search style={{ width: 20, height: 20, color: '#888888' }} />
              <TextInput
                style={{ flex: 1, marginLeft: 8, fontSize: 16 }}
                placeholder="Search countries..."
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          </View>

          <FlatList
            data={filteredCountries}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelectCountry(item)}
                style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#e5e5e5' }}
                activeOpacity={1} 
              >
                <Text style={{ fontSize: 16 }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={{ padding: 16, backgroundColor: '#65BCB5' }}
          >
            <Text style={{ textAlign: 'center', color: 'white', backgroundColor:'#65BCB5'  ,fontSize: 16, fontWeight: '500' }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
                <Feather
                  color="#bcbcbc"
                  name="chevron-right"
                  size={19} />
              </TouchableOpacity>
            </View> 

            {/* Notification Slider */}
            <View style={[styles.rowWrapper, styles.rowLast]}>
              <View style={styles.row}>
                <Text style={styles.rowLabel}>Push Notifications</Text>

                <View style={styles.rowSpacer} />

                <Switch
                  onValueChange={pushNotifications =>
                    setForm({ ...form, pushNotifications })
                  }
                  style={{ transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }] }}
                  value={form.pushNotifications} />
              </View>
            </View>
          </View>
        </View>

        {/* Resource Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resources</Text>

          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  //placeholder
                }}
                style={styles.row}>
                <Text style={styles.rowLabel}>About Us</Text>

                <View style={styles.rowSpacer} />

                <Feather
                  color="#bcbcbc"
                  name="chevron-right"
                  size={19} />
              </TouchableOpacity>
            </View>


            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => {
                  openStore();
                }}
                style={styles.row}>
                <Text style={styles.rowLabel}>Rate in App Store</Text>

                <View style={styles.rowSpacer} />

                <Feather
                  color="#bcbcbc"
                  name="chevron-right"
                  size={19} />
              </TouchableOpacity>
            </View>

            <View style={[styles.rowWrapper, styles.rowLast]}>
              <TouchableOpacity
                onPress={() => router.navigate('./terms')}
                style={styles.row}>
                <Text style={styles.rowLabel}>Terms and Privacy</Text>

                <View style={styles.rowSpacer} />

                <Feather
                  color="#bcbcbc"
                  name="chevron-right"
                  size={19} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.center}>

            <Button
                variant="contained"
                sx={{
                width: '70%',
                backgroundColor: '#65BCB5',
                borderTop: '2px solid #f0f0f0',
                color: '#fff',
                paddingTop: 1.5,
                paddingBottom: 1.5,
                paddingLeft: 6,
                paddingRight: 6,
                whiteSpace: 'nowrap',
                borderRadius: 4,
                marginTop: 8,
                
                fontWeight:600,
                fontSize: '18px',
                letterSpacing: 1,
                textTransform: 'capitalize'}}> 
                Log out 
                </Button>

        </View>

        <View style={styles.center}>

            <Button
                variant="contained"
                sx={{
                width: '80%',
                backgroundColor: '#FFFFFF',
                border: '0.1px solid rgba(0, 0, 0, 0.4)',
                color: '#D53535',
                paddingTop: 1.5,
                paddingBottom: 1.5,
                paddingLeft: 6,
                paddingRight: 6,
                whiteSpace: 'nowrap',
                borderRadius: 4,
                
                fontWeight:600,
                fontSize: '18px',
                letterSpacing: 1,
                textTransform: 'capitalize'}}> 
                Deactivate account
                </Button>

        </View>



        <Text style={styles.contentFooter}>App Version 1.0 </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#65BCB5',
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 32,
    fontFamily: "arial",
    letterSpacing: 0.8,
    fontWeight: '700',
    color: '#FFFFFF',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: 'center',
  },

  content: {
    paddingHorizontal: 16,
  },
  contentFooter: {
    marginTop: 24,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    color: '#a69f9f',
  },
  /** Section */
  section: {
    paddingVertical: 12,
  },
  sectionTitle: {
    margin: 8,
    marginLeft: 12,
    fontSize: 16,
    letterSpacing: 0.33,
    fontWeight: '500',
    color: '#a69f9f',
    textTransform: 'uppercase',
  },
  sectionBody: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  /** Profile */
circle: { width: 70, 
    height: 70, 
    backgroundColor: '#ED802A', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,},

  profile: {
    padding: 12,
    paddingRight: 30,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileBody: {
    marginRight: 'auto',
    marginLeft: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#292929',
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#858585',
  },
 
  row: {
    height: 44,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 12,
  },
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowSpacer: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    rowValue: {
        fontSize: 16,
        fontWeight: '400',
        color: '#ababab',
        marginRight: 4,
    },
    rowLast: {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    
    rowLabel: {
      fontSize: 16,
      letterSpacing: 0.24,
      color: '#000',
    },
  rowLabelDeac: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    color: '#65BCB5',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    marginTop: 25,
  },
},
);
