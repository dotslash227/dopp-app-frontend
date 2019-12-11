import React from 'react';
import {Text} from 'react-native';
import {Container, Content, Form, Input, Label, Item, Button} from 'native-base';
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
            pincode: ''
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

    render(){  
        if(true){
            console.log(this.props.auth)
            return(
                <Container>
                    <HeaderBar title="Select/Add Address" {...this.props} back />
                    <Content>
                        <Form>
                            <Item stackedLabel>
                                <Label>First Name</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Last Name</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Address Line 1</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Address Line 2</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Locality</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Landmark</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>City</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Pincode</Label>
                                <Input />
                            </Item>
                        </Form>
                        <Button block full primary disabled>
                            <Text style={{color:"white"}}>Save and Continue</Text>
                        </Button>
                    </Content>
                </Container>
            )
        }
        else{
            alert("hooray");
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