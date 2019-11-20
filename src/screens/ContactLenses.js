import React from 'react';
import HeaderBar from '../components/HeaderBar';
import {Content, Container, Form, Input, Item, Label, Picker, Grid, Row, Col} from 'native-base';
import {Text, View} from 'react-native';
import axios from "axios";

class ContactLenses extends React.Component{
    constructor(props){
        super(props);
        this.state = {            
            manufacturerList: [],
            modalityList: [],            
            manufacturer:null,
            modality: null,            
            productList: []            
        }
    }

    componentDidMount(){
        let query = {"query":`
            query{
                allManufacturers{
                    id, name
                }
                allCategories{
                    id, name
                }
                allProducts{
                    id, name
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
        console.log(this.state.productList);
    }

    fetchProductList(){       
        let sub_query = '';
        if (this.state.manufacturer && !this.state.modality){
            sub_query = `
            query{
                products(manufacturer:${Number(this.state.manufacturer)}){
                    id, name
                }
            }
            `
        }
        if (this.state.modality && !this.state.manufacturer){
            sub_query = `
            query{
                products(category:${Number(this.state.modality)}){
                    id, name
                }
            }
            `
        }
        if (this.state.manufacturer && this.state.modality){
            sub_query = `
            query{
                products(category:${Number(this.state.modality)}, manufacturer:${Number(this.state.manufacturer)}){
                    id, name
                }
            }
            `
        }
        if (!this.state.manufacturer && !this.state.modality){
            sub_query = `
            query{
                products:allProducts{
                    id, name
                }
            }
            `
        }        
        axios({
            method: 'post',
            url: 'http://localhost:8000/graphql',
            data: {"query":sub_query}
        }).then((response)=>{
            this.setState({productList:response.data.data.products});            
        }).catch((error)=>{
            console.log(error);
        })
    }
    
    changeManufacturerFilter(manufacturer){        
        this.setState({manufacturer})
        this.fetchProductList();             
    }
    changeModalityFilter(modality){
        this.setState({modality});
        this.fetchProductList();     
    }

    renderProductList(){        
        return this.state.productList.map((item)=>{
            return <Text>{item.name}</Text>;
        })
    }


    render(){
        return(
            <Container>
                <HeaderBar title="Contact Lenses" />
                <Content padder>
                    <View>
                        <Text style={{textAlign:"center", color:"maroon"}}>Filter contact lenses by</Text>
                        <Form>  
                            <Grid>
                                <Row>                                    
                                    <Col>
                                        <Item picker>
                                            <Picker mode="dropdown" placeholder="Manufacturer"
                                            selectedValue={this.state.manufacturer}
                                            onValueChange={(text)=>this.changeManufacturerFilter(text)}>
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
                    </View> 
                    <View>
                        {this.renderProductList()}            
                    </View>                          
                </Content>
            </Container>
        )
    }
}

export default ContactLenses;