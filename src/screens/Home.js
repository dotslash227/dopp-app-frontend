import React from 'react';
import {Container, Content, Card, CardItem, Left, Body, Right, Footer} from 'native-base';
import {Text, View, StyleSheet, Image} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import axios from "axios";
import {SliderBox} from 'react-native-image-slider-box';
import {userLogin} from '../actions/authActions';
import {connect} from 'react-redux';

class HomeScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {   
            slides: []
        }        
    }     


    componentDidMount(){
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
        })        
    }
    
    showBanners(){        
        return ''
    }    

    render(){               
        return(            
            <Container>
                <HeaderBar title="Home" />                
                <Content padder>          
                    <SliderBox parentWidth={390} images={this.state.slides} style={styles.slider} /> 
                    <Card>
                        <CardItem header>
                            <Text style={styles.headerText}>Today's Top Deals</Text>
                        </CardItem>                        
                        <CardItem style={{borderBottomColor:"grey", borderBottomWidth:2}}>
                            <Left>
                                <Image source={{uri:"https://static.feelgoodcontacts.net/contact-lenses/img/dailies-total-1786-131.png"}}
                                style={{width:150, height:150}}
                                />
                            </Left>
                            <Body>
                                <Text style={{color:"maroon", marginBottom:10}}>Dailies Total 1</Text>
                                <Text style={{marginBottom: 10}}>Water gradient daily disposable lenses by Alcon, comes in pack of 30 lenses.</Text>                                
                                <Text>Buy Now: ₹2100 | MRP: ₹2600</Text>
                            </Body>                              
                        </CardItem>                                                                        
                    </Card>                     
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
});

const mapStateToProps = (state) =>{
    return{
        auth: state.auth
    }
};

const  mapDispatchToProps = (dispatch) =>{
    return{
        login: (user)=>{
            dispatch(userLogin(user));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);