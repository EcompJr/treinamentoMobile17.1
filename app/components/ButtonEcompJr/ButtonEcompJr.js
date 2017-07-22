//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class ButtonEcompJr extends Component {

    render() {

        let {children , handleClick , count} = this.props;

        return (
            <TouchableOpacity onPress={()=>{handleClick()}}>
                <View style={styles.container}>
                    <Text style={{fontSize: 35, color: '#002'}}>{children + '   ' + count}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 4,
        paddingHorizontal: 45,
        borderRadius: 3
    },
});

//make this component available to the app
export default ButtonEcompJr;
