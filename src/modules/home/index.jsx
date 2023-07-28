import React, {useCallback, useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';

import {useRootNavigation} from '../../hooks/use-navigation';
import {Header} from '../../components/header';
import {colors, images, spacing} from '../../theme';
import services from '../../data/services.json';
import section from '../../data/section.json';
import {getWindowHeight, getWindowWidth} from '../../utils/layout';
import {CategoryHeader} from './category-header';
import {shadows} from '../../theme/shadow';
import {CategoryList} from './category-list';

// const CategoryHeader = ({title}) => (
//   <View style={[styles.header, {backgroundColor: '#1E1E1E'}]}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );
export const Home = () => {
  const [selectedCard, setSelectedCard] = useState(section[0].title);
  const categoryIndex = section.findIndex(item => item.title === selectedCard);
  const categories = section[categoryIndex];
  console.log('categories', categories);
  return (
    <ScrollView style={styles.root}>
      <View style={styles.categoryWrap}>
        {section.map((item, index) => {
          return (
            <CategoryHeader
              card={item}
              key={item.title + index}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          );
        })}
      </View>
      <CategoryList categories={categories ? categories : null} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainerStyle: {
    padding: 16,
    rowGap: 13,
  },

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
    color: colors.white,
    padding: 5,
    textAlign: 'center',
  },

  categoryWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-around',
    gap: 15,
  },
});
