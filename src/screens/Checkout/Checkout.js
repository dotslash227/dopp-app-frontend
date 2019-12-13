import React from 'react';
import {Text} from 'react-native';
import {Container, Content, Form, Input, Label, Item, Button, CheckBox, Grid, Row, Col} from 'native-base';
import HeaderBar from '../../components/HeaderBar';
import {connect} from 'react-redux';

class CheckoutScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            lastName: '',
            add1: '',
            add2: '',
            locality: '',
            landmark: '',
            city: '',
            pincode: '',                     
        }        
    }    

    handleData(data, dataType){
        switch(dataType){
            case 'firstName':
                this.setState({firstName:data});
                break;
            case 'lastName':
                this.setState({lastName:data});
                break;
            case 'add1':
                this.setState({add1:data});
                break;
            case 'add2':
                this.setState({add2:data});
                break;
            case 'locality':
                this.setState({locality:data});
                break;
            case 'landmark':
                this.setState({landmark:data});
                break;
            case 'city':
                this.setState({city:data});
                break;
            case 'pincode':
                this.setState({pincode:data});
                break;            
        }
    }

    handleSubmit(){
        const {firstName, lastName, add1, add2, locality, landmark, city, pincode} = this.state;
        if(!firstName || !lastName || !add1 || !add2 || !locality || !landmark || !city || !pincode) alert("All fields are compulsory");
        else{
            alert("Form submiitted")
        }
    }

    render(){  
        if(this.props.auth.token){            
            return(
                <Container>
                    <HeaderBar title="Select/Add Address" {...this.props} back />
                    <Content>                        
                        <Form>                                                 
                            <Item stackedLabel>
                                <Label>First Name</Label>
                                <Input onChangeText={(data)=>this.handleData(data, "firstName")} />
                            </Item>
                            <Item stackedLabel>
                                <Label>Last Name</Label>
                                <Input onChangeText={(data)=>this.handleData(data, "lastName")} />
                            </Item>
                            <Item stackedLabel>
                                <Label>Address Line 1</Label>
                                <Input onChangeText={(data)=>this.handleData(data, "add1")} />
                            </Item>
                            <Item stackedLabel>
                                <Label>Address Line 2</Label>
                                <Input onChangeText={(data)=>this.handleData(data, "add2")} />
                            </Item>
                            <Item stackedLabel>
                                <Label>Locality</Label>
                                <Input onChangeText={(data)=>this.handleData(data, "locality")} />
                            </Item>
                            <Item stackedLabel>
                                <Label>Landmark</Label>
                                <Input onChangeText={(data)=>this.handleData(data, "landmark")} />
                            </Item>
                            <Item stackedLabel>
                                <Label>City</Label>
                                <Input onChangeText={(data)=>this.handleData(data, "city")} />
                            </Item>
                            <Item stackedLabel>
                                <Label>Pincode</Label>
                                <Input onChangeText={(data)=>this.handleData(data, "pincode")} />
                            </Item>
                        </Form>
                        <Button block full primary onPress={()=>this.handleSubmit()}>
                            <Text style={{color:"white"}}>Save and Continue</Text>
                        </Button>
                    </Content>
                </Container>
            )
        }
        else{            
            this.props.navigation.navigate("Login");
            return null;
        }
    }
}

const mapStateToProps = (state) =>{
    return{
        auth: state.auth,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CheckoutScreen)