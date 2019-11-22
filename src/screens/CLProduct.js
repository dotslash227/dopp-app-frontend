import React from 'react';
import {Container, Content, Text} from 'native-base';
import HeaderBar from '../components/HeaderBar';
import axios from "axios";


class CLProduct extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rSpherical:'',
            rCylindrical: '',
            rAxis: '',
            lSpherical: '',
            lCylindrical: '',
            lAxis: '',
            quantity: ''            
        }
    }

    componentWillMount(){

    }

    render(){
        return(
            <Container>
                <HeaderBar title="Contact Lens" />
                <Content padder>

                </Content>
            </Container>
        )
    }

}

export default CLProduct;