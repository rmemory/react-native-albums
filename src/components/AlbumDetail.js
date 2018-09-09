import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AlbumDetail extends React.Component {
	render() {
		return (
			<View>
				<Text>This is an album item</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
