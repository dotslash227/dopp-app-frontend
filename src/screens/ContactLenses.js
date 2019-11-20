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
            materialList: [],
            manufacturer:'',
            modality: '',
            material: '',
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
                allProductTypes{
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
                materialList: response.data.data.allProductTypes
            });
            console.log(this.state)
        })
    }

    fetchProductList(){
        let query = {"query":`
        query{
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
            console.log(response.data.data.allProducts);            
        }).catch((error)=>{
            console.log(error);
        })
    }

    changeMaterialFilter(material){        
        this.setState({material});   
        this.fetchProductList();     
    }
    changeManufacturerFilter(manufacturer){
        this.setState({manufacturer})
    }
    changeModalityFilter(modality){
        this.setState({modality});
    }

    renderProductList(){
        console.log("hello world");        
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
                                            <Picker mode="dropdown" placeholder="Material" 
                                            selectedValue={this.state.material}
                                            onValueChange={(text)=>this.changeMaterialFilter(text)}>
                                                {this.state.materialList.map((item)=>{
                                                    return <Picker.Item label={item.name} value={item.id} />
                                                })}                                                
                                            </Picker>                                
                                        </Item>
                                    </Col>
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
                    {this.renderProductList()}
                </Content>
            </Container>
        )
    }
}

export default ContactLenses;