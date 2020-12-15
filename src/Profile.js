import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

/**
 * Profile screen
 */
const getproFromApi = () => {
    return fetch('http://192.168.1.6:5000/emp')
      .then((response) => response.json())
      .then((json) => {
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  };
export default class Profile extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name'),
        };
    };
  

    render() {

        const { navigate, state } = this.props.navigation;
        s=getproFromApi()
        return (
            <View style={styles.container}>

                <Text>Hello {s.name}</Text>

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