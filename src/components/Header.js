/* eslint-disable react/jsx-indent */

import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import { Constants } from 'expo';

const Header = ({ headerText }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{headerText}</Text>
		</View>
	);
};

Header.propTypes = {
	headerText: PropTypes.string.isRequired,
};

const platformVersion = Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',

		paddingTop: Platform.OS === 'android' || platformVersion < 11
			? Constants.statusBarHeight
			: 0,
		paddingBottom: 10,

		borderBottomWidth: StyleSheet.hairlineWidth,
		backgroundColor: '#f8f8f8',
		// shadowColor: '#000',
		// shadowOffset: { width: 0, height: 20 },
		// shadowOpacity: 0.9,

		elevation: 2,
		position: 'relative',
	},
	text: {
		fontSize: 20,
	},
});

export default Header;
