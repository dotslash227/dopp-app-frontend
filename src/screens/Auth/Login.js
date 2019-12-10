import React from 'react';
import {Content, Container, Button} from 'native-base';
import {Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }        
    }

    render(){
        return(
            <Container>
                <Content>
                    <Text>Hello</Text>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(LoginScreen);