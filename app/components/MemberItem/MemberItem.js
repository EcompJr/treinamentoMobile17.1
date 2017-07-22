//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';

// create a component
class MemberItem extends Component {
    render() {
        let {name , text , email , job , image} = this.props.membro;
        return (
            <View style={[styles.container,{flexDirection: 'column'}]}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1,flexDirection: 'column'}}>
                        <Text style={styles.titulo}>{name}</Text>
                        <Text style={styles.email}>{email}</Text>
                    </View>
                </View>
                <Text style={{textAlign: 'center'}}>{job}</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    titulo: {color: '#000' , fontSize: 20, fontWeight: 'bold'},
    email: {color:'#222', fontSize: 18}
});

//make this component available to the app
export default MemberItem;
