/* eslint-disable react/jsx-indent, react/forbid-prop-types, */
import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => (
	<Card>
		<CardSection>
			<Text>{album.title}</Text>
		</CardSection>
	</Card>
);

AlbumDetail.propTypes = {
	album: PropTypes.object.isRequired,
};

export default AlbumDetail;
