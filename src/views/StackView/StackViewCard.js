import React from 'react';
import { StyleSheet } from 'react-native';
import createPointerEventsContainer from './createPointerEventsContainer';

import { Screen } from 'react-native-screens';

/**
 * Component that renders the scene as card for the <StackView />.
 */
class Card extends React.Component {
  render() {
    const { children, pointerEvents, style } = this.props;
    return (
      <Screen
        pointerEvents={pointerEvents}
        ref={this.props.onComponentRef}
        style={[styles.main, style]}
      >
        {children}
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#E9E9EF',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

Card = createPointerEventsContainer(Card);

export default Card;
