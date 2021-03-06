import React from 'react';
import {Content, Container, Card, CardItem, Body, Left, Right, Button, Icon, Grid, Row, Col} from 'native-base';
import {Text, Image, View} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import {connect} from 'react-redux';
import {removeFromCart} from '../actions/cartActions';

class CartPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    removeProduct(productKey){        
        this.props.removeProduct(productKey);        
    }

    renderPower(product){
        if (product.power.cyl){            
            return <Text>Power: {product.power.sph} Spherical/{product.power.cyl} Cylinder x {product.power.axis} Axis</Text>;
        }
        else{
            return <Text>Power: {product.power.sph} Spherical</Text>;
        }        
    }

    renderCart(){ 
        if(this.props.cart.count == 0){
            return <Text style={{textAlign:"center", marginTop:30}}>No Products Added to Your Cart</Text>;
        }
        else
        return this.props.cart.products.map((item, key)=>{
            return(                
                <Card>
                    <CardItem header bordered>
                        <Left>
                            <Text style={{color:"maroon", fontWeight:"bold"}}>{item.name}</Text>
                        </Left>
                        <Body style={{marginLeft:-120}}>
                            {this.renderPower(item)}
                        </Body>                                                                    
                    </CardItem>
                    <CardItem>
                        <Image source={{uri:item.image}} style={{width:"100%", height:200}}></Image>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Text>₹{item.total} ({item.quantity} units)</Text>
                        </Left>                        
                        <Right>
                            <Button bordered danger block transparent iconLeft small onPress={()=>this.removeProduct(key)}>
                                <Icon name="close" style={{marginRight:5}} />
                                <Text>Remove From Cart</Text>                                
                            </Button>
                        </Right>
                    </CardItem>
                </Card>
            )
        })
    }

    render(){
        const checkoutBar = () =>{            
            if(this.props.cart.count) return(
                <Content padder style={{marginBottom:-470, marginLeft: 45}}>
                    <View>
                        <Grid>
                            <Row>
                                <Col>
                                    <Text>Total Units: {this.props.cart.count}</Text>
                                </Col>
                                <Col>
                                    <Text>Total Price: {this.props.cart.sub_total}</Text>
                                </Col>
                            </Row>
                        </Grid>
                        <Button block small success style={{maxWidth:300, marginTop:10}} onPress={()=>this.props.navigation.navigate("Checkout")}>
                            <Text style={{color:"white"}}>Checkout</Text>
                        </Button>
                    </View>    
                </Content>      
            )
        }                                        

        return(            
            <Container>
                <HeaderBar title="Your Cart" />                                                    
                {checkoutBar()}
                <Content padder>                                    
                    {this.renderCart()}                    
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

const mapDispatchToProps = (dispatch) =>{
    return{
        removeProduct: (productKey) =>{
            dispatch(removeFromCart(productKey));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)