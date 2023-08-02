import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import React from 'react';
import {colors, spacing} from '../../theme';
import {shadows} from '../../theme/shadow';

interface CategoryHeaderProps {
  title: string;
  selectedCard: string;
  onPress: () => void;
}

export const CategoryHeader = ({
  title,
  onPress,
  selectedCard,
}: CategoryHeaderProps) => {
  const isActive = title === selectedCard;
  const activeBg = isActive ? '#1E1E1E' : colors.white;
  const activeColor = isActive ? colors.white : '#1E1E1E';

  return (
    <TouchableOpacity
      style={[styles.header, {backgroundColor: activeBg}]}
      onPress={onPress}>
      <Text style={[styles.title, {color: activeColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.extraSmall,
    borderRadius: 5,

    ...shadows.light,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',

    padding: 5,
    textAlign: 'center',
  },
});
