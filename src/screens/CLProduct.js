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
            rSpherical:null,
            rCylindrical:null,
            rAxis:null,
            lSpherical:null,
            lCylindrical:null,
            lAxis:null,
            quantity: 1,
            product: []
        }
        this.changeRightPower = this.changeRightPower.bind(this);
        this.changeLeftPower = this.changeLeftPower.bind(this);
    }

    componentWillMount(){        
        let sub_query = `
        query{
            product(id:${Number(this.state.productId)}){
                id, name, image, manufacturer{name}, categories{name}, mrp, discount, salePrice, available, build, description,
                sphPowers{power}, cylPowers{power}, axis{axis}
            }
        }
        `
        axios({
            method:'post',
            url: "http://localhost:8000/graphql",
            data: {"query":sub_query}
        }).then((response)=>{
            console.log(response.data.data.product);
            this.setState({product:response.data.data.product});
        }).catch((error)=>{
            console.log(error);
        })
    }       

    changeRightPower(power){
        this.setState({rSpherical:power});
    }
    changeLeftPower(power){
        this.setState({lSpherical:power});
    }
    changeCylinderData(data, type, side){
        switch(side){
            case "right":
                console.log("updating right data");
                switch(type){
                    case "sph":
                        this.setState({rSpherical:data});
                        break;
                    case "cyl":
                        this.setState({rCylindrical:data});
                        break;
                    case "axis":
                        this.setState({rAxis:data});
                        break;
                }
                break;
            case "left":
                console.log("updating left data");
                switch(type){
                    case "sph":
                        this.setState({lSpherical:data});
                        break;
                    case "cyl":
                        this.setState({lCylindrical:data});
                        break;
                    case "axis":
                        this.setState({lAxis:data});
                        break;
                }
                break;
        }
    }

    renderSphericalForm(){                          
        return(
            <Row style={{alignContent:"center"}}>
                <Col>
                    <Text style={{textAlign:"center"}}>Right Eye</Text>
                    <Grid>
                        <Row>
                            <Col>
                                <Form>
                                    <Item picker>
                                        <Picker dropdown style={{width:210}} placeholder="Select RE Spherical" selectedValue={this.state.rSpherical} onValueChange={this.changeRightPower}>
                                            {this.state.product.sphPowers.map((item,key)=>{
                                                return <Picker.Item label={item.power} value={item.power} key={key} />
                                            })}
                                        </Picker>                                        
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
                                    <Item picker>
                                        <Picker dropdown style={{width:210}} placeholder="Select LE Spherical" selectedValue={this.state.lSpherical} onValueChange={this.changeLeftPower}>
                                            {this.state.product.sphPowers.map((item,key)=>{
                                                return <Picker.Item label={item.power} value={item.power} key={key} />
                                            })}
                                        </Picker>
                                    </Item>                                    
                                </Form>
                            </Col>
                        </Row>
                    </Grid>
                </Col>
            </Row>            
        )        
    }

    renderCylinderForm(){
        return(
            <Row style={{alignContent:"center"}}>
                <Col>
                    <Text style={{textAlign:"center"}}>Right Eye</Text>
                    <Grid>
                        <Row>
                            <Col>
                                <Form>
                                    <Item picker>
                                        <Picker dropdown style={{width:210}} placeholder="Select RE Spherical" selectedValue={this.state.rSpherical} onValueChange={(data)=>this.changeCylinderData(data, 'sph', 'right')}>
                                            {this.state.product.sphPowers.map((item,key)=>{
                                                return <Picker.Item label={item.power} value={item.power} key={key} />
                                            })}
                                        </Picker>                                        
                                    </Item>                                    
                                    <Item picker>
                                        <Picker dropdown style={{width:210}} placeholder="Select RE Cylinder" selectedValue={this.state.rCylindrical} onValueChange={(data)=>this.changeCylinderData(data, 'cyl', 'right')}>
                                            {this.state.product.sphPowers.map((item,key)=>{
                                                return <Picker.Item label={item.power} value={item.power} key={key} />
                                            })}
                                        </Picker>                                        
                                    </Item>                                    
                                    <Item picker>
                                        <Picker dropdown style={{width:210}} placeholder="Select RE Axis" selectedValue={this.state.rAxis} onValueChange={(data)=>this.changeCylinderData(data, 'axis', 'right')}>
                                            {this.state.product.axis.map((item,key)=>{
                                                return <Picker.Item label={item.axis} value={item.axis} key={key} />
                                            })}
                                        </Picker>                                        
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
                                    <Item picker>
                                        <Picker dropdown style={{width:210}} placeholder="Select LE Spherical" selectedValue={this.state.lSpherical} onValueChange={(data)=>this.changeCylinderData(data, 'sph', 'left')}>
                                            {this.state.product.sphPowers.map((item,key)=>{
                                                return <Picker.Item label={item.power} value={item.power} key={key} />
                                            })}
                                        </Picker>                                        
                                    </Item>                                    
                                    <Item picker>
                                        <Picker dropdown style={{width:210}} placeholder="Select LE Cylinder" selectedValue={this.state.lCylindrical} onValueChange={(data)=>this.changeCylinderData(data, 'cyl', 'left')}>
                                            {this.state.product.sphPowers.map((item,key)=>{
                                                return <Picker.Item label={item.power} value={item.power} key={key} />
                                            })}
                                        </Picker>                                        
                                    </Item>                                    
                                    <Picker dropdown style={{width:210}} placeholder="Select LE Axis" selectedValue={this.state.lAxis} onValueChange={(data)=>this.changeCylinderData(data, 'axis', 'left')}>
                                        {this.state.product.axis.map((item,key)=>{
                                            return <Picker.Item label={item.axis} value={item.axis} key={key} />
                                        })}
                                    </Picker>                                        
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
                        {(product.build == "TORIC") && this.renderCylinderForm()}
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
        const productData = {
            id: product.id,
            name: product.name,
            image: product.image,
            build: product.build,
            quantity: this.state.quantity,
            total: this.state.quantity*product.salePrice,            
        }            
        switch(productData.build){
            case 'SPHERICAL':
                if(!this.state.rSpherical && !this.state.lSpherical){
                    alert("You need to add power of at least one lens");
                }
                else{
                    if(this.state.rSpherical){
                        let power = {sph:this.state.rSpherical};
                        const productInfo = {...productData, power:power}
                        this.props.addToCart(productInfo);
                    }
                    if(this.state.lSpherical){
                        let power = {sph:this.state.lSpherical};
                        const productInfo = {...productData, power:power}
                        this.props.addToCart(productInfo);
                    }
                }
            break;
            case 'TORIC':{         
                if(!this.state.rCylindrical && !this.state.lCylindrical){
                    alert("Cylinder is need for either of the eye");
                }
                else{
                    if(this.state.rSpherical || this.state.rCylindrical || this.state.rAxis){
                        if(!this.state.rCylindrical || !this.state.rAxis){
                            alert("Cylinder and Axis for Right Eye is needed to proceed for this product");
                        }
                        else{
                            let power = {sph:this.state.rSpherical, cyl:this.state.rCylindrical, axis:this.state.rAxis}
                            const productInfo = {...productData, power:power}
                            this.props.addToCart(productInfo);
                        }                        
                    }
                    if(this.state.lSpherical || this.state.lCylindrical || this.state.lAxis){
                        if(!this.state.lCylindrical || !this.state.lAxis){
                            alert("Cylinder and Axis for Left Eye is needed to proceed for this product");
                        }
                        else{
                            let power = {sph:this.state.lSpherical, cyl:this.state.lCylindrical, axis:this.state.lAxis}
                            const productInfo = {...productData, power:power}
                            this.props.addToCart(productInfo);
                        }                        
                    }
                }
            }
            break;
        }   
        console.log(productData);
        alert("Contact Lenses added to cart");
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