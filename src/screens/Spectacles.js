import React from 'react';
import {Text} from 'react-native';
import {Content, Container} from 'native-base';
import HeaderBar from '../components/HeaderBar';

class SpectacleScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <Container>
                <HeaderBar title="Spectacles" />
                <Content>
                    <Text style={{marginTop:100, textAlign:"center", justifyContent:"center"}}>
                    Coming Soon. 
                    Please keep your app updated to the latest version for updates on this section.
                    </Text>
                </Content>
            </Container>
        )
    }
}

export default SpectacleScreen;