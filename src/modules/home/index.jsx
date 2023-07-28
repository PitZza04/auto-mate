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

// const CategoryHeader = ({title}) => (
//   <View style={[styles.header, {backgroundColor: '#1E1E1E'}]}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );
export const Home = () => {
  const navigation = useRootNavigation();
  const [selectedCard, setSelectedCard] = useState(section[0]?.title);
  const getKeyExtractor = item => item.id.toString();

  const renderItem = ({item}) => {
    return (
      <Pressable style={styles.container}>
        <Image
          source={images.maintenance}
          style={{
            resizeMode: 'contain',
          }}
        />
        <Text style={styles.categoryName}>{item.categoryName}</Text>
      </Pressable>
    );
  };
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
      <FlatList
        data={services}
        renderItem={renderItem}
        numColumns={3}
        nestedScrollEnabled={true}
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapper}
        ListFooterComponent={<View style={{marginBottom: 5}} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={getKeyExtractor}
      />
      {/* <CategoryHeader title={'Added Services'} />
      <FlatList
        data={added}
        renderItem={renderItem}
        numColumns={3}
        nestedScrollEnabled={true}
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapper}
        ListFooterComponent={<View style={{marginBottom: 5}} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={getKeyExtractor}
      /> */}
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
  columnWrapper: {
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: '#fff',
    width: getWindowWidth(28),
    height: getWindowHeight(11),

    justifyContent: 'center',
    alignItems: 'center',

    borderColor: '#CECECE',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 10,
  },
  categoryName: {
    fontSize: 11,
    paddingTop: 5,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
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
