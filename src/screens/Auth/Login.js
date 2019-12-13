import React from 'react';
import {Content, Container, Button, Form, Item, Label, Input} from 'native-base';
import {Text, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import HeaderBar from '../../components/HeaderBar';
import {anonymousLogin} from '../../actions/authActions';

class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mobile: '',
            otp:''        
        }        
    }

    checkoutAsGuest(){
        this.props.anonyLogin();
        console.log(this.props.auth);
        this.props.navigation.navigate("Checkout");
    }

    render(){
        return(
            <Container>                
                <HeaderBar title="Login" backToCart {...this.props} />
                <Content padder>
                    <Text style={{textAlign:"center"}}>Please login or signup to continue the checkout process</Text>
                    <Form style={{marginTop:100}}>                        
                        <Item stackedLabel>     
                            <Label style={{marginLeft:100}}>Enter Mobile Number</Label>                       
                            <Input padder style={{paddingLeft:100}} keyboardType="phone-pad" />
                        </Item>
                        <View style={{maxWidth:300, marginLeft:50, marginTop:20}}>
                            <Button block large bordered danger>
                                <Text>Log In</Text>
                            </Button>
                            <Button block large bordered style={{marginTop:20}}>
                                <Text>Signup</Text>
                            </Button>  
                            <Button block large dark bordered style={{marginTop:20}} onPress={()=>this.checkoutAsGuest()}>
                                <Text>Checkout As Guest</Text>
                            </Button>                            
                        </View>
                    </Form>
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

const mapDispatchToProps = (dispatch) => {
    return{
        anonyLogin: () =>{
            dispatch(anonymousLogin());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);