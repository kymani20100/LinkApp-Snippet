import React, {Component} from 'react';
import { 
  Animated, 
  Dimensions, 
  Keyboard, 
  StyleSheet, 
  TextInput,
  UIManager,
 } from 'react-native';

const {State: TextInputState} = TextInput;
export default class KeyboardShift extends Component {
  
constructor() {
  super();
  this.state = {
    shift: new Animated.Value(0)
  }

  this.keyboardDidShowSub = Keyboard.addListener("keyboardDidShow", this.handleKeyboardDidShow);
  this.keyboardDidHideSub = Keyboard.addListener("keyboardDidHide", this.handleKeyboardDidHide);
}

componentDidMount() {
  this.keyboardDidShowSub.remove();
  this.keyboardDidHideSub.remove();
}

handleKeyboardDidShow = (event) => {
  const {height: windowHeight} = Dimensions.get('window');
  const keyboardHeight = event.endCoordinated.height;
  const currentlyFocusedField = TextInputState.currentlyFocusedInput();

  UIManager.ref.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
    const fieldHeight = height;
    const fieldTop = pageY;
    const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
    if(gap >= 0) {
      return;
    }

    Animated.timing(
      this.state.shift, {
      toValue: gap,
      duration: 1000,
      useNativeDriver: true
    }
    ).start();
  })
}

handleKeyboardDidHide = () => {
  Animated.timing(
    this.state.shift, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true
  }
  ).start();
}

  render() {
    const {children: renderProp, style} = this.props;
    const {shift} = this.state;
    return (
     <Animated.View style={[styles.container, style, {transform: [{translateY: shift}]}]}>
        {renderProp()}
     </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
})