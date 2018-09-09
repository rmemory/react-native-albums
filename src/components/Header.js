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
		<View style={[styles.container,
			Platform.OS === 'ios'
				? styles.containerIos
				: styles.containerAndroid]}
		>
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
			: Constants.statusBarHeight,
		paddingBottom: 10,

		borderBottomWidth: StyleSheet.hairlineWidth,
		backgroundColor: '#f8f8f8',

		elevation: 2,
		position: 'relative',
	},
	containerIos: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
	},
	containerAndroid: {

	},
	text: {
		fontSize: 20,
	},
});

export default Header;
