import React from 'react';
import HeaderBar from '../components/HeaderBar';
import {Content, Container, Card, CardItem, Body, Left, Right} from 'native-base';
import {Text, View} from 'react-native';

class ContactLenses extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <Container>
                <HeaderBar title="Contact Lenses" />
                <Content padder>
                    <View>
                        <Text>Hello</Text>
                    </View>
                    <Card>
                        <CardItem>
                            <Left><Text>Hello</Text></Left>
                            <Body><Text>Hello</Text></Body>
                            <Right><Text>Hello</Text></Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default ContactLenses;