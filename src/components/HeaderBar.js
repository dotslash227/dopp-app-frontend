import React from 'react';
import {Header, Body, Left, Right, Icon} from 'native-base';
import {Text} from 'react-native';

export default class HeaderBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){        
        return(
            <Header>
                <Left>
                    {this.props.left && <Icon name="arrow-back" />}
                </Left>
                <Body>
                    <Text>{this.props.title}</Text>
                </Body>
                <Right></Right>
            </Header>
        )
    }
}