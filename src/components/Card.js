/* eslint-disable react/jsx-indent */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const Card = ({ children }) => (
	<View style={styles.container}>
		{ children }
	</View>
);

Card.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderRadius: 2, // Round edges
		borderColor: '#ddd', // light gray border
		borderBottomWidth: 0, // Hide border bottom
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
	},
});

export default Card;
