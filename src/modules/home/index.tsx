import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import {colors, spacing} from '../../theme';

import section from '../../data/section.json';

import {CategoryHeader} from './category-header';

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
              title={item.title}
              key={item.title + index}
              selectedCard={selectedCard}
              onPress={() => setSelectedCard(item.title)}
            />
          );
        })}
      </View>
      <CategoryList categories={categories.data && categories.data} />
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
