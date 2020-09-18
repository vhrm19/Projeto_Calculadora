import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(){
    super()
    this.state={}
  }

  render(){
    
    let rows = []
    for(let i=0;i<3;i++){
      let row = []
      for(let j=0;j<3;j++){
        row.push(<TouchableOpacity style={styles.btn}>
          <Text style={styles.btntxt}>{3*i+j+1}</Text>
        </TouchableOpacity>)
      }
    rows.push(<View style={styles.row}>{row}</View>)
    }

    let operation = ['÷', '×', '-', '+']
    let ops = []
    for(let i=0; i<4; i++)
      ops.push(<TouchableOpacity style={styles.btn}>
        <Text style={styles.btntxt}>{operation[i]}</Text>
      </TouchableOpacity>)

    return(
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>12123</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>123132</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>=</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.operations}>
            {ops}
          </View>
        </View>
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  resultText:{
    fontSize: 30,
    color: 'white',
  },

  calculationText:{
    fontSize: 24,
    color: 'white',
  },

  result: {
    flex: 2,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  calculation: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  buttons: {
    flex: 7,
    flexDirection:'row',
  },

  numbers: {
    flex: 3,
    backgroundColor:'red',
  },

  operations: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },

  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },

  btn:{
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  btntxt:{
    fontSize: 30,
  }

});
