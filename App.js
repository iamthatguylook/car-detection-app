import React, { useEffect, useState } from "react";
import { ActivityIndicator, TextInput, FlatList, Text, View, Image, StyleSheet } from "react-native";

export default function App() {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [ADCValue, setADCVal] = useState(0);

	const getMovies = async () => {
		try {
			const response = await fetch("https://reactnative.dev/movies.json");
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
		<View style={{ backgroundColor: "white", flex: 1, paddingTop: 100, paddingLeft: 20 }}>
			<TextInput
				keyboardType="numeric"
				style={{ padding: 2, borderWidth: 1, width: 270 }}
				placeholder="Change ADC Value to 5 for color change in boxes"
				value={ADCValue}
				onChangeText={setADCVal}
			></TextInput>
			<Text> Current ADC Value {ADCValue}</Text>
			<View style={styles.group}>
				<View style={{ padding: 10 }}>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							width: 100,
							height: 20,
							backgroundColor: ADCValue == 5 ? "black" : "white",
						}}
					></View>
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
			<FlatList
				data={data}
				keyExtractor={({ id }) => id}
				renderItem={({ item }) => (
					<Text>
						{item.title}, {item.releaseYear},{item.id}
					</Text>
				)}
			/>
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
		marginTop: 10,
		marginLeft: 100,
		width: 100,
		height: 200,
	},
});
