import React, { useState, useEffect } from 'react';
import {  Dimensions, FlatList, Image, Text, View } from 'react-native';
import styles from './styles';

const listImage = {
	uri: 'https://a2.tvspielfilm.de/imedia/2744/9012744,b34Y8kPGwmUVDQcGEIcXDrnb9MeSlLMNdDB6LTriKkkE7bcaQlVg3wUCZOWDaQVAx7KGDDsanFkjLYqGucXUYw==.jpg',
};

const { width, height } = Dimensions.get('window');

const CharacterList = () => {
	const [episodes, setEpisodes] = useState([

	]);

	const loadMoreEpisodes = () => {
		const additionalEpisodes = [
		

		];

		setEpisodes((prevEpisodes) => []);
	};

	useEffect(() => {
		loadMoreEpisodes();
	}, []);

	const renderItem = ({ item }) => (
		<View style={styles.renderItems}>
			<View style={styles.listImage}>
				<Image
					source={{ uri: listImage.uri }}
					resizeMode='stretch'
					width={width * 0.25}
					height={height * 0.1}
				/>
				<Text style={styles.listText}>{item.title}</Text>
			</View>
			<View style={styles.textGroup}>
				<Text style={styles.listText}>{item.title}</Text>
				<Text style={styles.listText}>{item.title}</Text>
			</View>
		</View>
	);

	return (
			<FlatList
				data={episodes}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				onEndReached={loadMoreEpisodes}
				onEndReachedThreshold={0.3}
			/>
	);
};

export default CharacterList;
