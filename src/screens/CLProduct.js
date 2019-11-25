import React from 'react';
import {Container, Content, Grid, Col, Row, Form, Item, Input, Picker, Label, Button} from 'native-base';
import {Image, Text, StyleSheet, View} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import axios from "axios";
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions';

class CLProduct extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productId: this.props.navigation.getParam("productId"),
            rSpherical:'',
            rCylindrical: '',
            rAxis: '',
            lSpherical: '',
            lCylindrical: '',
            lAxis: '',
            quantity: 1,
            product: []
        }
        this.changeRightPower = this.changeRightPower.bind(this);
    }

    componentWillMount(){        
        let sub_query = `
        query{
            product(id:${Number(this.state.productId)}){
                id, name, image, manufacturer{name}, categories{name}, mrp, discount, salePrice, available, build, description
            }
        }
        `
        axios({
            method:'post',
            url: "http://localhost:8000/graphql",
            data: {"query":sub_query}
        }).then((response)=>{
            this.setState({product:response.data.data.product});
        }).catch((error)=>{
            console.log(error);
        })
    }   
    
    rangeGenerator(){
        let ar = [-10];
        let i = -10;
        while (i<=15){
            i = i+0.25;            
            ar.push(i);                    
        }        
        return ar;        
    }    

    changeRightPower(power){
        this.setState({rSpherical:power}, ()=>console.log(this.state.rSpherical));
    }
    changeLeftPower(power){
        this.setState({lSpherical:power}, ()=>console.log(this.state.lSpherical));
    }

    updateQuantity(quant){
        console.log(quant);
    }

    renderSphericalForm(){        
        const range = this.rangeGenerator()             
        return(
            <Row style={{alignContent:"center"}}>
                <Col>
                    <Text style={{textAlign:"center"}}>Right Eye</Text>
                    <Grid>
                        <Row>
                            <Col>
                                <Form>
                                    <Item>
                                        <Input keyboardType="numbers-and-punctuation" placeholder="Enter Right Spherical" onChangeText={(power)=>this.changeRightPower(power)} />
                                    </Item>                                    
                                </Form>
                            </Col>
                        </Row>
                    </Grid>
                </Col>
                <Col>
                    <Text style={{textAlign:"center"}}>Left Eye</Text>
                    <Grid>
                        <Row>
                            <Col>
                                <Form>
                                    <Item>
                                        <Input keyboardType="numbers-and-punctuation" placeholder="Enter Left Spherical" onChangeText={(power)=>this.changeLeftPower(power)} />
                                    </Item>                                    
                                </Form>
                            </Col>
                        </Row>
                    </Grid>
                </Col>
            </Row>            
        )        
    }

    render(){
        const {product} = this.state;
        return(
            <Container>
                <HeaderBar back title={product.name} {...this.props} />
                <Content padder>
                    <Image source={{uri:product.image}} style={{width:"100%", height:250}} />                    
                    <Grid style={{marginBottom:20, marginTop:15}}>
                        <Row>
                            <Col>
                                <Text style={styles.labelHeader}>MRP</Text>
                                <Text>₹{product.mrp}</Text>                                
                            </Col>
                            <Col>
                                <Text style={styles.labelHeader}>Discount</Text>
                                <Text>{product.discount}%</Text>
                            </Col>
                            <Col>
                                <Text style={styles.labelHeader}>Price (unit)</Text>
                                <Text>₹{product.salePrice}</Text>
                            </Col>
                            <Col>
                                <Text style={styles.labelHeader}>Type</Text>
                                <Text>{product.build}</Text>
                            </Col>
                        </Row>
                    </Grid>
                    <Text style={{textAlign:"justify"}}>{product.description}</Text>
                    <Grid style={{marginTop:20}}>
                        {(product.build == "SPHERICAL") && this.renderSphericalForm()}
                    </Grid>
                    <Text style={{marginTop:10, textAlign:"center", fontSize:20}}>Quantity</Text>
                    <Grid>
                        <Row>
                            <Col>
                                <Button transparent
                                style={{alignSelf:"flex-end"}}
                                onPress={()=>{           
                                    let num = this.state.quantity + 1;
                                    if (num > 10) alert("You cannot order more than 10 boxes");
                                    else this.setState({quantity:num});
                                }}>
                                    <Text style={{fontSize:30, textAlign:"right"}}>+</Text>
                                </Button>
                            </Col>
                            <Col>
                                <Text style={{textAlign:"center", fontSize:35}}>{this.state.quantity}</Text>
                            </Col>
                            <Col>
                                <Button transparent
                                style={{alignSelf:"flex-start"}}
                                onPress={()=>{
                                    let num = this.state.quantity - 1;
                                    if (num<1) alert("Quantity cannot be less than 1");
                                    else this.setState({quantity:num});
                                }}>
                                    <Text style={{fontSize:30}}>-</Text>
                                </Button>
                            </Col>                            
                        </Row>

                    </Grid>
                    <Button full onPress={()=>this.addToCart()}>
                        <Text style={{color:"white"}}>Add To Cart</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

    addToCart(){
        const {product} = this.state;        
        let productData = {
            id: product.id,
            name: product.name,
            image: product.image,
            quantity: this.state.quantity,
            total: this.state.quantity*product.salePrice,            
        }
        if (this.state.rSpherical || this.state.rCylindrical){
            productData["right"] = [this.state.rSpherical, this.state.rCylindrical, this.state.rAxis];
            this.props.addToCart(productData);            
        }
        if (this.state.lSpherical || this.state.lCylindrical){
            productData["left"] = [this.state.lSpherical, this.state.lCylindrical, this.state.lAxis];
            this.props.addToCart(productData);            
        }
        alert("Product Added to Cart");
        console.log(this.props.cart);
    }

}

const styles = StyleSheet.create({
    labelHeader:{
        fontSize: 20
    }
})

const mapStateToProps = (state) =>{
    return{
        auth: state.auth,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addToCart: (product) =>{
            dispatch(addToCart(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CLProduct);