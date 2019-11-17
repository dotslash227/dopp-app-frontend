import React from 'react';
import {Container, Content, Card, CardItem, Left, Body, Right} from 'native-base';
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
    
    showBanners(){
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
        return <SliderBox parentWidth={450} images={this.state.slides} style={styles.slider} />;
    }

    componentDidMount(){        
    }

    render(){               
        return(            
            <Container>
                <HeaderBar title="Home" />
                {this.showBanners()}
                <Content padder>                    
                    <View style={styles.bottomBar}>
                        <Text style={styles.headerText}>Today's Top Deals</Text>
                    </View>                    
                    <Card>
                        <CardItem header bordered>
                            <Text style={styles.headerText}>Your recent orders</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Left><Text>Order # 2180</Text></Left>
                            <Body><Text>27th March 2019</Text></Body>
                            <Right><Text>INR 400</Text></Right>
                        </CardItem>
                        <CardItem bordered>
                            <Left><Text>Order # 2180</Text></Left>
                            <Body><Text>27th March 2019</Text></Body>
                            <Right><Text>INR 400</Text></Right>
                        </CardItem>
                        <CardItem bordered>
                            <Left><Text>Order # 2180</Text></Left>
                            <Body><Text>27th March 2019</Text></Body>
                            <Right><Text>INR 400</Text></Right>
                        </CardItem>
                    </Card>                       
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    bottomBar:{
        marginTop:5,
        borderBottomColor:"#cb4335", 
        borderBottomWidth:1
    },    
    slider:{        
        height: 100,
        marginBottom: 20,        
    },
    headerText:{        
        color: "#cb4335",
        fontSize:25,        
    }
})

export default HomeScreen;