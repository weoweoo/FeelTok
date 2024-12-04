import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image
} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { Picker } from '@react-native-picker/picker'; 
import { launchImageLibrary } from 'react-native-image-picker';

export default function CreatePost() {
  const [selectedFeeling, setSelectedFeeling] = React.useState("");

    const [imageUri, setImageUri] = useState<string | null>(null);
  
    // open image picker
    const handleAddPhoto = () => {
      launchImageLibrary(
        {
          mediaType: 'photo',
          selectionLimit: 1,
        },
        (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorCode) {
            console.log('Image picker error: ', response.errorMessage);
          } else if (response.assets && response.assets[0].uri) {
            setImageUri(response.assets[0].uri); 
          }
        }
      );
    };  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.postBox}>
        {/* User Icon and Dropdown */}
        <View style={styles.topRow}>

          <View style={styles.userSection}>
            <View style={styles.circle}>
            <Feather name="user" size={25} color="#333" />
            </View>
            <Text style={styles.username}>Username</Text>
          </View>
          <View style={styles.dropdownContainer}>

          {/* Dropdown Menu */}
          <Picker
            selectedValue={selectedFeeling}
            onValueChange={(itemValue: string) => setSelectedFeeling(itemValue)}
            style={styles.dropdown}
          >
            <Picker.Item label="What are you feeling?" value="" />
            <Picker.Item label="Happy" value="happy" />
            <Picker.Item label="Sad" value="sad" />
            <Picker.Item label="Excited" value="excited" />
            <Picker.Item label="Angry" value="angry" />
          </Picker>
          </View>
        </View>

        {/* Add image Section */}
        <TouchableOpacity style={styles.addSection}  onPress={handleAddPhoto}> 
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.previewImage} />
          ) : (
          <Text style={styles.addText}>+</Text>
          )}
          </TouchableOpacity>

        <View style={styles.textContainer}>

        {/* Text Input Section */}
        <TextInput
          style={styles.textInput}
          placeholder="Express your feelings here..."
          placeholderTextColor="#999"
          multiline
        />
      </View>

      <View style={styles.buttonContainer}>
        {/* Post Button */}
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF5',
    alignItems: 'center',
    paddingTop: 50,
  },
  postBox: {
    width: '90%', 
    height: '90%',
    backgroundColor: '#FAE1C4',
    borderRadius: 10,
    shadowColor: '#C36922',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    marginTop: 20,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 600,
    color: '#333',
  },
  circle:{
    width: 40,
    height: 40, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  dropdownContainer:{
    borderRadius: 20,  
    overflow: 'hidden',
  },
  pickerItem: {
  backgroundColor: '#ffffff',  
  color: '#333', 
},
  dropdown: {
    backgroundColor: '#3DB7AD', 
    height: 40,
    width: 160,
    color: '#51300F',
    borderColor: '#fff',
    fontWeight: 600,
    letterSpacing: 0.3,
    fontSize: 12,
    paddingLeft: 5,
  },
  addSection: {
    height: '40%',
    width: '100%',
    backgroundColor: '#EE9E5F',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  previewImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  addText: {
    fontSize: 100,
    fontWeight: 200,
    color: '#fff',
  },
  textContainer:{
    paddingTop: 15,
    height: '33%',
  },
  textInput: {
    backgroundColor: '#FAE1C4',
    padding: 10,
    height: 100,
    textAlignVertical: 'top', 
    marginBottom: 15,
  },
  buttonContainer:{
    paddingRight: 20,
  },
  postButton: {
    backgroundColor: '#ED802A',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 30,
    alignSelf: 'flex-end',
  },
  postButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});
