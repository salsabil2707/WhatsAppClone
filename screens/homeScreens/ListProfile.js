import { FlatList, View, Linking, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Add this import
import firebase from "../../config";

const database = firebase.database();
const ref_listProfile = database.ref("ListProfile");

export default function ListProfile(props) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    // Fetch data from Firebase
    const fetchProfiles = () => {
      ref_listProfile.on("value", (snapshot) => {
        let profiles = [];
        snapshot.forEach((un_profil) => {
          profiles.push(un_profil.val()); // Add each profile to the array
        });
        setdata(profiles); // Update state with the fetched profiles
      });
    };

    fetchProfiles();

    // Cleanup listener when the component unmounts
    return () => {
      ref_listProfile.off();
    };
  }, []);

  // Function to handle calls
  const makeCall = (telephone) => {
    Linking.openURL(`tel:${telephone}`);
  };

  // Function to handle SMS
  const sendSMS = (telephone) => {
    Linking.openURL(`sms:${telephone}`);
  };

  // Function to navigate to Chat
  const navigateToChat = () => {
    props.navigation.navigate("Chat");
  };

  return (
    <ImageBackground
      source={require("../../assets/forg.png")}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Text style={styles.textstyle}>List Profiles</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.profileCard}>
            {/* Profile Image */}
            <Image
              source={require("../../assets/profile.png")}
              style={styles.profileImage}
            />

            {/* Profile Details */}
            <View style={styles.detailsContainer}>
              <Text style={styles.profileName}>
                {item.nom} {item.prenom}
              </Text>
              <Text style={styles.profilePhone}>{item.telephone}</Text>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionsContainer}>
              <TouchableOpacity onPress={() => makeCall(item.telephone)}>
                <Icon name="phone" size={30} color="#07f" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => sendSMS(item.telephone)}>
                <Icon name="email" size={30} color="#07f" />
              </TouchableOpacity>
              <TouchableOpacity onPress={navigateToChat}>
                <Icon name="chat" size={30} color="#07f" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        style={{ width: "95%" }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 40,
    fontFamily: "serif",
    color: "#07f",
    fontWeight: "bold",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  profileCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "#ddd",
  },
  detailsContainer: {
    flex: 2,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  profilePhone: {
    fontSize: 14,
    color: "#666",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
});
