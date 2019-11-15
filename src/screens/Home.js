import React from 'react';
import {Container, Content} from 'native-base';
import {Text, View, StyleSheet} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import axios from "axios";

class HomeScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {   
            slides: []
        }        
    }        

    componentDidMount(){
        let query = {"query":"{slides:allSliders{id, title, image}}"}
        axios({
            method: 'post',
            url: 'http://localhost:8000/graphql',
            data: query
        }).then((response)=>{
            let slides = response.data.data.slides;
            this.setState({slides});            
        })                
    }

    render(){                
        return(            
            <Container>
                <HeaderBar title="Home" />
                <Content>                    
                    <Text>Hello World</Text>
                    {/* {slides} */}
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 100
    }
})

export default HomeScreen;