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
    Text,
    View,
    Image,
    ListView
} = React;

var MovieSearch = Featured;

AppRegistry.registerComponent('MovieSearch', () => MovieSearch);