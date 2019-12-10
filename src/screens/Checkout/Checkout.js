import React from 'react';
import {Text} from 'react-native';
import {Container, Content} from 'native-base';
import HeaderBar from '../../components/HeaderBar';
import {connect} from 'react-redux';

class CheckoutScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }    

    render(){        
        return(
            <Container>
                <HeaderBar title="Checkout" {...this.props} back />
                <Content>
                    <Text>This is the checkout screen</Text>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        auth: state.auth,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CheckoutScreen)