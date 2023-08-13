import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet } from "react-native";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [ADCValue, setADCVal] = useState();
  const setLargeBox = () => {
    return {
      marginTop: 10,
      borderWidth: 2,
      width: 100,
      height: 20,
    };
  };
  const getMovies = async () => {
    try {
      const response = await fetch("http://192.168.1.110/");
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ backgroundColor: "white", flex: 1, paddingTop: 150, paddingLeft: 20 }}>
      <View style={styles.group}>
        <View style={{ padding: 10 }}>
          <View style={styles.boxLarge}></View>
          <View style={styles.boxMedium}></View>
          <View style={styles.boxSmall}></View>
        </View>
        <View style={{ padding: 10 }}>
          <View style={styles.boxLarge}></View>
          <View style={styles.boxMedium}></View>
          <View style={styles.boxSmall}></View>
        </View>
        <View style={{ padding: 10 }}>
          <View style={styles.boxLarge}></View>
          <View style={styles.boxMedium}></View>
          <View style={styles.boxSmall}></View>
        </View>
      </View>

      <Image style={styles.logo} source={require("./assets/carImage.png")} />
      <View style={styles.group}>
        <View style={{ padding: 10 }}>
          <View style={styles.boxSmall}></View>
          <View style={styles.boxMedium}></View>
          <View style={styles.boxLarge}></View>
        </View>
        <View style={{ padding: 10 }}>
          <View style={styles.boxSmall}></View>
          <View style={styles.boxMedium}></View>
          <View style={styles.boxLarge}></View>
        </View>
        <View style={{ padding: 10 }}>
          <View style={styles.boxSmall}></View>
          <View style={styles.boxMedium}></View>
          <View style={styles.boxLarge}></View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  boxLarge: {
    marginTop: 10,
    borderWidth: 2,
    width: 100,
    height: 20,
  },
  boxMedium: {
    marginTop: 10,
    borderWidth: 2,
    width: 80,
    height: 20,
  },
  boxSmall: {
    marginTop: 10,
    borderWidth: 2,
    width: 50,
    height: 20,
  },
  group: {
    flexDirection: "row",
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 100,
    width: 100,
    height: 200,
  },
});
