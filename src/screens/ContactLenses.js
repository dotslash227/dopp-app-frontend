import React from 'react';
import HeaderBar from '../components/HeaderBar';
import {Content, Container, Form, Input, Item, Label, Picker, Grid, Row, Col} from 'native-base';
import {Text, View} from 'react-native';

class ContactLenses extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            manufacturer:'',
            modality: '',
            material: ''
        }
    }
    changeMaterialFilter(material){        
        this.setState({material});        
    }
    changeManufacturerFilter(manufacturer){
        this.setState({manufacturer})
    }
    changeModalityFilter(modality){
        this.setState({modality});
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
                                                <Picker.Item label="Hydrogel" value="hydrogel" />
                                                <Picker.Item label="Silicon Hydrogel" value="silicon-hydrogel" />
                                                <Picker.Item label="RGP" value="rgp" />
                                            </Picker>                                
                                        </Item>
                                    </Col>
                                    <Col>
                                        <Item picker>
                                            <Picker mode="dropdown" placeholder="Manufacturer"
                                            selectedValue={this.state.manufacturer}
                                            onValueChange={(text)=>this.changeManufacturerFilter(text)}>
                                                <Picker.Item label="Hydrogel" value="hydrogel" />
                                                <Picker.Item label="Silicon Hydrogel" value="silicon-hydrogel" />
                                                <Picker.Item label="RGP" value="rgp" />
                                            </Picker>                                
                                        </Item>
                                    </Col>
                                    <Col>
                                        <Item picker>
                                            <Picker mode="dropdown" placeholder="Modality"
                                            selectedValue={this.state.modality}
                                            onValueChange={(text)=>this.changeModalityFilter(text)}>
                                                <Picker.Item label="Hydrogel" value="hydrogel" />
                                                <Picker.Item label="Silicon Hydrogel" value="silicon-hydrogel" />
                                                <Picker.Item label="RGP" value="rgp" />
                                            </Picker>                                
                                        </Item>
                                    </Col>
                                </Row>
                            </Grid>                                                                                  
                        </Form>
                    </View>                    
                </Content>
            </Container>
        )
    }
}

export default ContactLenses;