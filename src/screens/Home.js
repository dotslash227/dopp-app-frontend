import React from 'react';
import {Container, Content} from 'native-base';
import {Text} from 'react-native';
import HeaderBar from '../components/HeaderBar';

class HomeScreen extends React.Component{
    render(){
        return(
            <Container>
                <HeaderBar title="Home" />
                <Content>
                    <Text>Hello</Text>
                </Content>
            </Container>
        )
    }
}

export default HomeScreen;