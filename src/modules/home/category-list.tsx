import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
  ListRenderItemInfo,
} from 'react-native';
import React from 'react';
import {getWindowHeight, getWindowWidth} from '../../utils/layout';
import {colors, images, spacing} from '../../theme';

interface Category {
  id: number;
  categoryName: string;
  iconName: string;
}
interface CategoryListProps {
  categories?: Category[];
}
const CategoryListCard = ({id, categoryName, iconName}: Category) => {
  return (
    <Pressable style={styles.container} onPress={() => console.log(id)}>
      <Image source={images[iconName]} style={styles.iconImage} />
      <Text style={styles.title}>{categoryName}</Text>
    </Pressable>
  );
};

export const CategoryList = ({categories}: CategoryListProps) => {
  const getKeyExtractor = (item: Category) => item.id.toString();

  const renderItem = ({item}: ListRenderItemInfo<Category>) => {
    return <CategoryListCard {...item} />;
  };
  return (
    <FlatList<Category>
      data={categories}
      renderItem={renderItem}
      numColumns={3}
      nestedScrollEnabled={true}
      scrollEnabled={false}
      contentContainerStyle={styles.contentContainerStyle}
      columnWrapperStyle={styles.columnWrapper}
      ListFooterComponent={<View style={{marginBottom: spacing.extraSmall}} />}
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
  iconImage: {
    resizeMode: 'contain',
  },
});
