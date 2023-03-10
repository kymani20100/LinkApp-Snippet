import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    Animated,
    TouchableOpacity,
    TouchableWithoutFeedback
 } from 'react-native';

 import Icon from "react-native-vector-icons/MaterialCommunityIcons";
 import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default class FloatingActionButton extends Component {
  state = {
    animation: new Animated.Value(0)
  }

  toggleOpen = () => {
    const toValue = this._open ? 0 : 1;

    Animated.timing(this.state.animation, {
        toValue,
        duration: 200,
        useNativeDriver: false
    }).start();

    this._open = !this._open;
  }
    render() {

        const bgStyle = {
            transform: [{
                scale: this.state.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 30]
                })
            }]
        }

        const reloadStyle = {
            transform: [{
                scale: this.state.animation
            }, {
                translateY: this.state.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -70]
                })
            }]
        }

        const OrderStyle = {
            transform: [{
                scale: this.state.animation
            }, {
                translateY: this.state.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -140]
                })
            }]
        }

        const labelPositionInterplate = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [-30, -90]
        });

        const opacityInterpolate = this.state.animation.interpolate({
            inputRange: [0, .2, 1],
            outputRange: [0, 0, 1]
        })

        const labelStyle = {
            opacity: opacityInterpolate,
            transform: [{
                translateX: labelPositionInterplate
            }]
        }

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.background, bgStyle]} />
        <TouchableWithoutFeedback onPress={() => {}}>
            <Animated.View style={[styles.button, styles.other, OrderStyle]}>
                <Animated.Text style={[styles.label, labelStyle]}>Reload</Animated.Text>
                <MaterialCommunityIcons name="email-receive" size={20} color="#555" />
            </ Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => {}}>
            <Animated.View style={[styles.button, styles.other, reloadStyle]}>
            <Animated.Text style={[styles.label, labelStyle]}>Order</Animated.Text>
                <FontAwesome name="send-o" size={24} color="#555" />
            </ Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleOpen}>
            <View style={[styles.button, styles.pay]}>
            <Animated.Text style={[styles.label, labelStyle]}>Pay</Animated.Text>
                <Text style={styles.payText}>
                    <Ionicons name="ios-qr-code" size={20} color="#555" />
                </Text>
            </View>
        </TouchableWithoutFeedback>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        backgroundColor: "rgba(0,0,0,.2)",
        position: "absolute",
        width: 60,
        height: 60,
        bottom: 20,
        right: 20,
        borderRadius: 30
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: "center",
        shadowColor: "#333",
        shadowOpacity: .1,
        shadowOffset: {x:2, y: 0},
        shadowRadius: 2,
        borderRadius: 30,
        position: "absolute",
        bottom: 20,
        right: 20,
    },
    other: {
        backgroundColor: "#FFF"
    },
    pay: {
        backgroundColor: "#00B15E",
    },
    payText: {
        color: "#FFF"
    },
    label: {
        color: "#FFF",
        position: "absolute",
        fontSize: 18,
        backgroundColor: "transparent"
    }
})