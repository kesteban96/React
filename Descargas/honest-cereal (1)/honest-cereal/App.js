import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Clock extends React.Component {

    constructor() {
        super();
        this.state = {
          hora: new Date().getHours(),
          minuto: new Date().getMinutes(),
          segundo: new Date().getSeconds(),
        };
      }

      tick() {
        this.setState({
            hora: new Date().getHours(),
            minuto: new Date().getMinutes(),
            segundo: new Date().getSeconds(),
        });
      }

      componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }

  render() {
    return (
      <View style={styles.container}>
        <Text  text-align="center" style={styles.text} >{this.state.hora}:{this.state.minuto}:{this.state.segundo}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  text:{
    
    body:'	#ADFF2F',
    fontSize: 80,
    fontWeight: 'bold',
    color: '#FFD700',
  }
});
