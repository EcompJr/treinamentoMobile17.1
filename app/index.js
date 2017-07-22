//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , FlatList, Image} from 'react-native';
import ButtonEcompJr from './components/ButtonEcompJr';

// create a component
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    componentWillMount(){

    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image
                    source={require('./assets/logo.png')}
                    />
                </View>
                <View>
                    <ButtonEcompJr handleClick={()=>{this.incrementCount()}} count={this.state.count}>Continuar</ButtonEcompJr>
                </View>
                <FlatList
                    data={[{valor: 'a'}, {valor: 'b'},{valor: 'a'}, {valor: 'b'},{valor: 'a'}, {valor: 'b'},{valor: 'a'}, {valor: 'b'},]}
                    renderItem={({item}) => <Text style={{color: '#fff', fontSize: 30}}>{item.valor}</Text>}
                />
            </View>
        );
    }

    incrementCount(){
        this.setState({
            count: this.state.count + 1
        })
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000022',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    titulo: {
        color: '#fff', 
        fontSize: 32
    }
});

//make this component available to the app
export default App;
