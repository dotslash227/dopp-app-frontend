import React from 'react';
import {Content, Container, Card, CardItem, Body, Left, Right, Grid, Row, Col} from 'native-base';
import {Text, Image} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import {connect} from 'react-redux';

class CartPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        console.log(this.props.cart);
    }

    renderPower(product){
        if (product.right){
            if (product.right[2]){
                return <Text>Powered: {product.right[0]} Spherical/{product.right[1]} Cylinder x {product.right[2]} Axis</Text>
            }
            else{
                return <Text>Power: {product.right[0]} Spherical</Text>
            }
        }
        if (product.left){
            if (product.left[2]){
                return <Text>{product.left[0]} Spherical /{product.left[1]} Cylinder x {product.left[2]} Axis</Text>
            }
            else{
                return <Text>{product.left[0]} Spherical</Text>
            }
        }
    }

    renderCart(){
        const {products} = this.props.cart;
        return products.map((item)=>{
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
                </Card>
            )
        })
    }

    render(){
        return(
            <Container>
                <HeaderBar title="Your Cart" />
                <Content>
                    {(this.props.cart.products)?this.renderCart():<Text style={{textAlign:"center", marginTop:30}}>No Products Added to Your Cart</Text>}
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

export default connect(mapStateToProps)(CartPage)