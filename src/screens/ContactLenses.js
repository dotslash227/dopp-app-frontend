import React from 'react';
import HeaderBar from '../components/HeaderBar';
import {Content, Container, Form, Input, Item, Label, Picker, Grid, Row, Col, Card, CardItem, Left, Body, Button} from 'native-base';
import {Text, View, Image} from 'react-native';
import axios from "axios";
import fetchProductList from "../services/fetchProductList";
import {connect} from 'react-redux';

class ContactLenses extends React.Component{
    constructor(props){
        super(props);
        this.state = {            
            manufacturerList: [],
            modalityList: [],            
            manufacturer:'',
            modality: '',            
            productList: []            
        }
        this.changeManufacturerFilter = this.changeManufacturerFilter.bind(this);
    }

    componentWillMount(){
        let query = {"query":`
            query{
                allManufacturers{
                    id, name
                }
                allCategories{
                    id, name
                }
                allProducts{
                    id, name, mrp, discount, salePrice, mrp, manufacturer{name}, available
                }          
            }
        `}
        axios({
            method: 'post',
            url: 'http://localhost:8000/graphql',
            data: query
        }).then((response)=>{
            this.setState({
                manufacturerList:response.data.data.allManufacturers,
                modalityList: response.data.data.allCategories,                
                productList: response.data.data.allProducts
            });            
        })        
    }    
    
    changeManufacturerFilter(manufacturer){        
        this.setState({manufacturer}, ()=>fetchProductList(this.state.manufacturer, this.state.modality).then((response)=>{
            this.setState({productList:response.data.data.products});
        }));
        
    }
    changeModalityFilter(modality){
        this.setState({modality}, ()=>fetchProductList(this.state.manufacturer, this.state.modality).then((response)=>{
            this.setState({productList:response.data.data.products});
        }));
    }

    goToProductPage(productId){
        console.log(productId);
        this.props.navigation.navigate("CLProductPage", {"productId":productId});
    }

    renderProductList(){        
        return this.state.productList.map((item)=>{
            return (
                <Card>
                    <CardItem header>
                        <Text style={{fontSize:15, color:"navy"}}>{item.name} by {item.manufacturer.name}</Text>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Image source={{uri:"https://static.feelgoodcontacts.net/contact-lenses/img/dailies-total-1786-131.png"}} 
                            style={{height:150, width:150}} />
                        </Left>
                        <Body>                            
                            <Text>MRP: ₹{item.mrp}</Text>
                            <Text>Discount: {item.discount}%</Text>
                            <Text>Buy Now Price: ₹{item.salePrice}</Text>
                            <Button full                             
                            style={{marginTop:10}}
                            disabled={!item.available}                            
                            onPress={()=>{this.goToProductPage(item.id)}}
                            >
                                <Text style={{color:"white"}}>{(item.available)?"Buy Now":"Out of Stock"}</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            )
        })
    }


    render(){
        return(
            <Container>
                <HeaderBar title="Contact Lenses" />
                <Content padder style={{padding:0, marginBottom:-500}}>
                    <Text style={{textAlign:"center", color:"maroon"}}>Filter contact lenses by</Text>
                    <Form>  
                        <Grid>
                            <Row>                                    
                                <Col>
                                    <Item picker>
                                        <Picker mode="dropdown" placeholder="Manufacturer"
                                        selectedValue={this.state.manufacturer}
                                        onValueChange={this.changeManufacturerFilter}>
                                            {this.state.manufacturerList.map((item)=>{
                                                return <Picker.Item label={item.name} value={item.id} />
                                            })}                                                
                                        </Picker>                                
                                    </Item>
                                </Col>
                                <Col>
                                    <Item picker>
                                        <Picker mode="dropdown" placeholder="Modality"
                                        selectedValue={this.state.modality}
                                        onValueChange={(text)=>this.changeModalityFilter(text)}>
                                            {this.state.modalityList.map((item)=>{
                                                return <Picker.Item label={item.name} value={item.id} />
                                            })}                                                
                                        </Picker>                                
                                    </Item>
                                </Col>
                            </Row>
                        </Grid>                                                                                  
                    </Form>
                </Content> 
                <Content padder>                    
                    <View>
                        {this.renderProductList()}            
                    </View>                          
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

const mapDispatchToProps = (dispatch) =>{
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactLenses);