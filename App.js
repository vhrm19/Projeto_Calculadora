import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      resultText:"",
      calculationText:""
    }
    this.operations = ['DEL', '/', '*', '-', '+']
  }

  calculateResult(){
    let text = this.state.resultText
    this.setState({
      calculationText: eval(text)
    })
  }

  buttonPressed(text){
    if(this.state.resultText[this.state.resultText.length - 1] == '0' && text == '0') return
    if(this.state.resultText == '' && text == 0) return
    this.setState({
      resultText: this.state.resultText+text
    })
    this.setState({
      calculationText: eval(this.state.resultText+text)
    })
  }

  operate(operation){

    switch(operation){
      case 'DEL': 
        let text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText: text.join('')
        })
        break
      case '+':
      case '-':
      case '*':
      case '/':
      case '.':
        const lastChar = this.state.resultText.split('').pop()
        console.log(lastChar)
        if(this.operations.indexOf(lastChar) > 0 || lastChar == '.') return
        if(this.state.text == "" ) return
        if((this.state.resultText + operation).split(".").length - 1 > 1) return
        this.setState({
          resultText: this.state.resultText + operation
        })
    }
  }

  holdDEL(text){
    if(text == 'DEL')
      this.setState({
        resultText: ""
      })
  }

  magnify(input){
    const text = this.state.calculationText
    this.setState({
      resultText: text.toString(),
      calculationText: ""
    })
  }

  render(){
    
    let rows = []
    for(let i=0;i<3;i++){
      let row = []
      for(let j=0;j<3;j++){
        row.push(<TouchableOpacity key={3*i+j+1} onPress={() => this.buttonPressed(3*i+j+1)} style={styles.btn}>
          <Text style={styles.btntxt}>{3*i+j+1}</Text>
        </TouchableOpacity>)
      }
    rows.push(<View key={i} style={styles.row}>{row}</View>)
    }

    let ops = []
    for(let i=0; i<5; i++)
      ops.push(<TouchableOpacity key={this.operations[i]} onPress={()=> this.operate(this.operations[i])} onPressOut={()=> this.holdDEL(this.operations[i])} style={styles.btn}>
        <Text style={styles.btntxt}>{this.operations[i]}</Text>
      </TouchableOpacity>)

    return(
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
            <View style={styles.row}>
              <TouchableOpacity key={"."} onPress={() => this.operate(".")} style={styles.btn}>
                <Text style={styles.btntxt}>{"."}</Text>
              </TouchableOpacity>
              <TouchableOpacity key={"0"} onPress={() => this.buttonPressed("0")} style={styles.btn}>
                <Text style={styles.btntxt}>{"0"}</Text>
              </TouchableOpacity>
              <TouchableOpacity key={"="} onPress={() => this.magnify()} style={styles.btn}>
                <Text style={styles.btntxt}>{"="}</Text>
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
    color: 'black',
  },

  calculationText:{
    fontSize: 24,
    color: 'black',
  },

  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  calculation: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  buttons: {
    flex: 7,
    flexDirection:'row',
  },

  numbers: {
    flex: 3,
    backgroundColor:'#434343',
    color: 'white'
  },

  operations: {
    flex: 1,
    backgroundColor: '#636363',
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
    color: 'white'
  },
});
