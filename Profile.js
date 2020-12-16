import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

/**
 * Profile screen
 */

export default class Profile extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name'),
        };
    };
    getproFromApi = () => {
        fetch("https://192.168.1.6:9000/emp/10")
            .then(response => response.json())
            .then((responseJson) => {
                console.log('getting data from fetch', responseJson)
                setTimeout(() => {
                    this.setState({
                        
                        s: responseJson
                        
                    })
                }, 2000)

            })
            .catch(error => console.log(error))
    
      };
    render() {

        const { navigate, state } = this.props.navigation;
        
        return (
            <View style={styles.container}>

                <Text>Hello {this.getproFromApi()[0]}</Text>

                <Button
                    title="Go to home screen"
                    onPress={() => navigate('Home')}
                />

            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});