import {StyleSheet, Text, View, FlatList, Pressable, Image} from 'react-native';
import React from 'react';
import {getWindowHeight, getWindowWidth} from '../../utils/layout';
import {colors, images} from '../../theme';

const CategoryListCard = ({categoryName, iconName, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={images[iconName]}
        style={{
          resizeMode: 'contain',
        }}
      />
      <Text style={styles.title}>{categoryName}</Text>
    </Pressable>
  );
};
export const CategoryList = ({categories}) => {
  console.log('Category List', categories);
  const getKeyExtractor = item => item.id.toString();

  const renderItem = ({item}) => {
    return <CategoryListCard {...item} onPress={() => {}} />;
  };
  return (
    <FlatList
      data={categories.data}
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
  );
};

const styles = StyleSheet.create({
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
  title: {
    fontSize: 11,
    paddingTop: 5,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
});
