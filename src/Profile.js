import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

/**
 * Profile screen
 */

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
         
        };
      }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name'),
        };
    };
    componentDidMount() {
        fetch('http://192.168.1.6:9000/emp/10')
          .then((response) => response.json())
          .then((json) => {
            this.setState({ data: json.name });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
      }
    render() {
        const { data } = this.state;
        const { navigate, state } = this.props.navigation;
        
        return (
            <View style={styles.container}>
                <Text>{data}</Text>

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