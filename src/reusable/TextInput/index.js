import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, TextInput } from 'react-native';
import styles from './styles';

class CustomTextInput extends React.Component {
  constructor() {
    super();
    this.state = { text: '' };
  }

  onFocus = () => {
    this.textInput.focus();
  };

  onChangeText = text => {
    this.setState({
      text,
    });
  };

  setReferenceForTextInput = ref => {
    this.textInput = ref;
  };

  render() {
    const { props, state } = this;
    const { text } = state;
    const { sourceIcon, ...extractedProps } = props;
    return (
      <TouchableWithoutFeedback onPress={this.onFocus}>
        <View style={styles.container}>
          <View style={styles.inputSection}>
            <Image source={sourceIcon} style={styles.iconsStyle} resizeMode="contain" />
            <TextInput
              {...extractedProps}
              ref={this.setReferenceForTextInput}
              style={styles.inputContainer}
              onChangeText={this.onChangeText}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default CustomTextInput;
