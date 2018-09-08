/* eslint-ignore react/jsx-indent */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
	return (
		<View style={styles.container}>
			<Text>Albums</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Header;
