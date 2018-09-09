/* eslint-disable react/jsx-indent */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const CardSection = ({ children }) => (
	<View style={styles.container}>
		{ children }
	</View>
);

CardSection.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		padding: 5,
		borderColor: '#ddd',
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative',
	},
});

export default CardSection;
