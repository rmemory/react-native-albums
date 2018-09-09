/* eslint-disable react/jsx-indent, no-bitwise, no-plusplus,
   react/jsx-indent-props, implicit-arrow-linebreak */

import React from 'react';
import {
	StyleSheet,
	ActivityIndicator,
	ScrollView,
	View,
} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
	state = {
		loading: true,
		albums: [],
	};

	componentDidMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({
				loading: false,
				albums: response.data,
			}));
	}

	renderAlbums = () => {
		const { albums } = this.state;

		return (
			albums.map(album => (
				<AlbumDetail
					key={this.keyExtractor(album.title)}
					album={album}
				/>))
		);
	};

	keyExtractor = (title) => {
		let hash = 0;
		let chr;

		if (title.length === 0) return hash;

		for (let i = 0; i < title.length; i++) {
			chr = title.charCodeAt(i);
			hash = ((hash << 5) - hash) + chr;
			hash |= 0; // Convert to 32bit integer
		}
		return hash.toString();
	}

	render() {
		const { loading } = this.state;

		return (
			<View style={styles.container}>
				{loading && (
					<ActivityIndicator style={StyleSheet.absoluteFill} size="large" />
				)}
				{!loading
					&& <ScrollView>{this.renderAlbums()}</ScrollView>
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

export default AlbumList;
