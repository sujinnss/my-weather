import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#659999", "#f4791f"],
    title:"Haze",
    subtitle:"안개"
  },
  ThunderStorm: {
    iconName: "weather-lightning",
    gradient: ["#00b4db", "#0083b0"],
    title:"ThunderStorm",
    subtitle:"번개"
  },
  Drizzle: { iconName: "weather-rainy", gradient: ["#005aa7", "#fffde4"],  title:"Drizzle",
    subtitle: "뭘까"},
  Rain: { iconName: "weather-pouring", gradient: ["#283c86", "#45a247"] ,  title:"Rain",
    subtitle:"비온다"},
  Snow: { iconName: "weather-snowy", gradient: ["#a8c0ff", "#3f2b96"],  title:"Snow",
    subtitle: "눈온다"},
  Clear: { iconName: "weather-sunny", gradient: [" #c9d6ff", "#e2e2e2"] ,  title:"Clear",
    subtitle:"깔끔"},
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#0f0c29", "#302b63", "#24243e"],
    title:"Clouds",
    subtitle:"구름낀 날씨다"
  },
  Mist: { iconName: "weather-hail", gradient: ["#fc466b", "#3f5efb"],  title:"Mist",
    subtitle:"안개" },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName || "border-none-variant"}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      {/*<View style={styles.halfContainer} />*/}
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}
Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "ThunderStorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
  ]).isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom:10
  },
  subtitle: {
    color: "white",
    fontWeight:"600",
    fontSize:20
  },
  textContainer:{
    paddingHorizontal:30,
    alignItems:"flex-start"
  }
});
