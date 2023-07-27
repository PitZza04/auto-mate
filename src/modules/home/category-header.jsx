import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {spacing} from '../../theme';

export const CategoryHeader = ({card, setSelectedCard, selectedCard}) => {
  const isActive = card?.title === selectedCard;
  const activeBg = isActive ? '#1E1E1E' : '#fff';
  const activeColor = isActive ? '#fff' : '#1E1E1E';

  return (
    <TouchableOpacity
      style={[styles.header, {backgroundColor: activeBg}]}
      onPress={() => setSelectedCard(card.title)}>
      <Text style={[styles.title, {color: activeColor}]}>{card?.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.extraSmall,
    borderRadius: 5,
    width: '50%',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',

    padding: 5,
    textAlign: 'center',
  },
});
