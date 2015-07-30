/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var Featured = require('./featured').Featured;
var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    TabBarIOS,
    Text
} = React;

var MovieSearch = React.createClass({
  getInitialState: function() {
      return {selectedTab: null};
    },

  render: function() {
    return (
      <TabBarIOS 
        tintColor="purple"
        barTintColor="white">
        <TabBarIOS.Item title="Search Tab"
          selected={this.state.selectedTab === 'search'}
          icon={{uri:'search'}}
          onPress={() => {
            this.setState({
              selectedTab: 'search',
            });
          }}>
          <Text>Search</Text>
        </TabBarIOS.Item>

        <TabBarIOS.Item 
          title="Featured"
          icon={{uri:'featured'}}
          selected={this.state.selectedTab === 'featured'}
          onPress={() => {
            this.setState({
              selectedTab: 'featured',
            });
          }}>
          <Featured />
        </TabBarIOS.Item>

      </TabBarIOS>
      );
  }
});



AppRegistry.registerComponent('MovieSearch', () => MovieSearch);