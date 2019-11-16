import React from 'react';
import {Container, Content} from 'native-base';
import {Text, View, StyleSheet} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import axios from "axios";
import {SliderBox} from 'react-native-image-slider-box'

class HomeScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {   
            slides: []
        }        
    }        

    componentWillMount(){
        let query = {"query":"{slides:allSliders{id, title, imageUrl}}"}        
        axios({
            method: 'post',
            url: 'http://localhost:8000/graphql',
            data: query
        }).then((response)=>{
            let slides = response.data.data.slides;            
            let slider_arr = []
            slides.map((item)=>{
                slider_arr.push(item.imageUrl);
            })
            this.setState({slides:slider_arr});
            // this.setState({slides});
            console.log(this.state.slides);
        })                
    }

    render(){               
        return(            
            <Container>
                <HeaderBar title="Home" />
                <Content>                    
                    <Text>Hello World</Text>
                    <SliderBox images={this.state.slides} sliderBoxHeight={200} style={styles.slider} />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 100
    },
    slider:{
        marginTop:100,
        height: 100
    }
})

export default HomeScreen;