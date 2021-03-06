import React from 'react';
import styled from 'styled-components';
import {Animated, TouchableOpacity, Dimensions} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import MenuItem from './MenuItem';


class Menu extends React.Component {
    state = {
        top: new Animated.Value(900)
    };

    componentDidMount () {
        Animated.spring(this.state.top, {
            toValue: 0,
            useNativeDriver: false,
        }).start();
    }

    toggleMenu = () => {
        Animated.spring(this.state.top, {
            toValue: 900,
            useNativeDriver: false,
        }).start();
    }

    render() {
        return (
            <AnimatedContainer style={{ top: this.state.top}}>
                <Cover>
                    <Image source={require('../assets/background2.jpg')} />
                    <Title>Richard</Title>
                    <Subtitle>UI | UX Design</Subtitle>
                </Cover>
                <TouchableOpacity 
                onPress={this.toggleMenu} 
                style={{
                    position:"absolute", 
                    top:120, 
                    left:"50%", 
                    marginLeft: -22,
                    zIndex:1
                    }}>
                    <CloseView>
                        <Ionicons name="ios-close" size={32} color="#546bfb" />
                    </CloseView>
                </TouchableOpacity>
                <Content>
                    {items.map((item, index) => (
                        <MenuItem 
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </Content>
            </AnimatedContainer>
        );
    }
}

export default Menu;


const Image = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const Title = styled.Text`
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
`;

const Subtitle = styled.Text`
    color: rgba(255,255,255,0.8);
    font-size: 18px;
    margin-top: 8px;
`;

const Container = styled.View`
    position: absolute;
    background: rgba(255,255,255,0.8);
    width: 100%;
    height: 100%;
    z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container)

const Cover = styled.View`
    height: 142px;
    background: #ffffff;
    justify-content: center;
    align-items: center;
`;

const Content = styled.View`
    height: 900px;
    background: #ffffff;
    padding: 50px;
`;

const CloseView = styled.View`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: #ffffff;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0,0,0,0.5);
`;

const items = [
    {
        icon: "ios-settings",
        title: "Account",
        text: "settings"
    },
    {
        icon: "ios-card",
        title: "Billing",
        text: "payments"
    },
    {
        icon: "ios-compass",
        title: "Learn React",
        text: "start course"
    },
    {
        icon: "ios-exit",
        title: "Log out",
        text: "see you soon!"
    }
]





