/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var MOCKED_MOVIES_DATA = [{
    title: 'Boxer',
    year: '2015',
    posters: {
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Boxer_puppy_fawn_portrai.jpg'
    }
}];


var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} = React;

var MovieSearch = React.createClass({
    getInitialState: function() {
      return {
        movies: null
      };
    },

    componentWillMount: function() {
      fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          movies: responseData.movies,
        });
      }).done();
    },

    render: function() {
      if (!this.state.movies) {
        return <View style={styles.container}><Text>'Loading'</Text></View>;
      }
      return (
        <View style={styles.container}>
          <View style={styles.movieThumbContainer}>
            <Image style={styles.movieThumb} 
                   source={{uri: this.state.movies[0].posters.thumbnail}} />
          </View>
          <View style={styles.movieDescription}>
            <Text>{this.state.movies[0].title}</Text>
            <Text>{this.state.movies[0].year}</Text>
          </View>
        </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'row'
    },
    movieDescription: {
      height: 100,
      justifyContent: 'space-around'
    },
    movieThumbContainer: {
      paddingRight: 10
    },
    movieThumb: {
      width: 160,
      height: 100
    }
});

AppRegistry.registerComponent('MovieSearch', () => MovieSearch);