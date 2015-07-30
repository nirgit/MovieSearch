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
        tintColor="white"
        barTintColor="blue">
        <TabBarIOS.Item title="Search Tab"
          selected={this.state.selectedTab === 'search'}
          onPress={() => {
            this.setState({
              selectedTab: 'search',
            });
          }}>
          <Text>Search</Text>
        </TabBarIOS.Item>

        <TabBarIOS.Item 
          title="Featured"
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