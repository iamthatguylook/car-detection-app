import React, { useEffect, useState } from "react";
import { ActivityIndicator, TextInput, FlatList, Text, View, Image, StyleSheet, ScrollView } from "react-native";

export default function App() {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [fl, setfl] = useState(0);
	const [fm, setfm] = useState(0);
	const [fr, setfr] = useState(0);
	const [bl, setbl] = useState(0);
	const [bm, setbm] = useState(0);
	const [br, setbr] = useState(0);

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
		<ScrollView style={{ backgroundColor: "white", flex: 1, paddingTop: 100, paddingLeft: 20 }}>
			<Text style={{ fontSize: 36, marginTop: 15, marginBottom: 55, marginLeft: 29, fontWeight: 700 }}> Car Detection App</Text>
			<View style={{ flex: 1, flexDirection: "row" }}>
				<ScrollView style={{ marginBottom: 30 }} horizontal={true}>
					<TextInput
						keyboardType="numeric"
						style={{ padding: 5, borderWidth: 1, width: 50 }}
						placeholder="front left distance"
						value={fl}
						onChangeText={setfl}
					></TextInput>
					<Text> Current fl {fl}</Text>
					<TextInput
						keyboardType="numeric"
						style={{ padding: 2, borderWidth: 1, width: 50 }}
						placeholder="front mid distance"
						value={fm}
						onChangeText={setfm}
					></TextInput>
					<Text> Current fm {fm}</Text>
					<TextInput
						keyboardType="numeric"
						style={{ padding: 2, borderWidth: 1, width: 50 }}
						placeholder="front right distance"
						value={fr}
						onChangeText={setfr}
					></TextInput>
					<Text> Current fr {fr}</Text>
					<TextInput
						keyboardType="numeric"
						style={{ padding: 2, borderWidth: 1, width: 50 }}
						placeholder="back left distance"
						value={bl}
						onChangeText={setbl}
					></TextInput>
					<Text> Current bl {bl}</Text>
					<TextInput
						keyboardType="numeric"
						style={{ padding: 2, borderWidth: 1, width: 50 }}
						placeholder="back mid distance"
						value={bm}
						onChangeText={setbm}
					></TextInput>
					<Text> Current bm {bm}</Text>
					<TextInput
						keyboardType="numeric"
						style={{ padding: 2, borderWidth: 1, width: 50 }}
						placeholder="back right distance"
						value={br}
						onChangeText={setbr}
					></TextInput>
					<Text> Current br {br}</Text>
				</ScrollView>
			</View>

			<View style={styles.group}>
				<View style={{ padding: 10 }}>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							width: 100,
							height: 20,
							backgroundColor: fl >= 20 ? "black" : "white",
						}}
					></View>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							marginLeft: 25,
							width: 75,
							height: 20,
							backgroundColor: fl >= 10 ? "black" : "white",
						}}
					></View>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							marginLeft: 50,
							width: 50,
							height: 20,
							backgroundColor: fl >= 5 ? "black" : "white",
						}}
					></View>
				</View>
				<View style={{ padding: 10 }}>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							width: 100,
							height: 20,
							backgroundColor: fm >= 20 ? "black" : "white",
						}}
					></View>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							marginLeft: 15,
							width: 75,
							height: 20,
							backgroundColor: fm >= 10 ? "black" : "white",
						}}
					></View>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							marginLeft: 25,
							width: 50,
							height: 20,
							backgroundColor: fm >= 5 ? "black" : "white",
						}}
					></View>
				</View>
				<View style={{ padding: 10 }}>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							width: 100,
							height: 20,
							backgroundColor: fr >= 20 ? "black" : "white",
						}}
					></View>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							width: 75,
							height: 20,
							backgroundColor: fr >= 10 ? "black" : "white",
						}}
					></View>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							width: 50,
							height: 20,
							backgroundColor: fr >= 5 ? "black" : "white",
						}}
					></View>
				</View>
			</View>
			{/* <View>
				<FlatList
					data={data}
					keyExtractor={({ id }) => id}
					renderItem={({ item }) => (
						<Text>
							{item.title}, {item.releaseYear},{item.id}
						</Text>
					)}
				/>
			</View> */}
			<Image style={styles.logo} source={require("./assets/carImage.png")} />
			<View style={styles.group}>
				<View style={{ padding: 10 }}>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							marginLeft: 50,
							width: 50,
							height: 20,
							backgroundColor: bl >= 20 ? "black" : "white",
						}}
					></View>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							marginLeft: 25,
							width: 75,
							height: 20,
							backgroundColor: bl >= 10 ? "black" : "white",
						}}
					></View>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,

							width: 100,
							height: 20,
							backgroundColor: bl >= 5 ? "black" : "white",
						}}
					></View>
				</View>
				<View style={{ padding: 10 }}>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							marginLeft: 25,
							width: 50,
							height: 20,
							backgroundColor: bm >= 20 ? "black" : "white",
						}}
					></View>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							marginLeft: 15,
							width: 75,
							height: 20,
							backgroundColor: bm >= 10 ? "black" : "white",
						}}
					></View>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							width: 100,
							height: 20,
							backgroundColor: bm >= 5 ? "black" : "white",
						}}
					></View>
				</View>
				<View style={{ padding: 10 }}>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							width: 50,
							height: 20,
							backgroundColor: br >= 20 ? "black" : "white",
						}}
					></View>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							width: 75,
							height: 20,
							backgroundColor: br >= 10 ? "black" : "white",
						}}
					></View>
					<View
						style={{
							marginTop: 10,
							borderWidth: 2,
							width: 100,
							height: 20,
							backgroundColor: br >= 5 ? "black" : "white",
						}}
					></View>
				</View>
			</View>
		</ScrollView>
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
		marginLeft: 130,
		width: 100,
		height: 200,
	},
});
