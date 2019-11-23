import React from 'react';
import {Container, Content} from 'native-base';
import {Image, Text} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import axios from "axios";


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
            quantity: '',
            product: []
        }
    }

    componentWillMount(){        
        let sub_query = `
        query{
            product(id:${Number(this.state.productId)}){
                id, name
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

    render(){
        return(
            <Container>
                <HeaderBar back title={this.state.product.name} {...this.props} />
                <Content padder>

                </Content>
            </Container>
        )
    }

}

export default CLProduct;