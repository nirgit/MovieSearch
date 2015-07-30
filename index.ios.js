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
    Image,
    ListView
} = React;

var MovieSearch = React.createClass({
    getInitialState: function() {
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
        movies: null
      };
    },

    componentWillMount: function() {
      var $this = this;
      fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData.movies.length);
        this.setState({
          movies: $this.ds.cloneWithRows(responseData.movies),
        });
      }).done();
    },

    render: function() {
      if (!this.state.movies) {
        return <View style={styles.container}><Text>'Loading'</Text></View>;
      }
      return (
          <ListView
          dataSource={this.state.movies} renderRow={(movie) => this.renderRow(movie)} />
        );
    },

    renderRow: function(movie) {
      return (
        <View style={styles.container} >
          <View style={styles.movieThumbContainer}>
            <Image style={styles.movieThumb} 
                   source={{uri: movie.posters.thumbnail}} />
          </View>
          <View style={styles.movieDescription}>
            <Text>{movie.title}</Text>
            <Text>{movie.year}</Text>
          </View>
        </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'row'
    },
    movieDescription: {
      height: 100,
      left: 0,
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