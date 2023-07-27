import React, {useCallback, useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useRootNavigation} from '../../hooks/use-navigation';
import {Header} from '../../components/header';
import {colors, images} from '../../theme';
import services from '../../data/services.json';
import added from '../../data/added.json';
import {getWindowHeight, getWindowWidth} from '../../utils/layout';

const CategoryHeader = ({title}) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
export const Home = () => {
  const navigation = useRootNavigation();
  const getKeyExtractor = item => item.id.toString();
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.container}>
        <Image
          source={images.maintenance}
          style={{
            resizeMode: 'contain',
          }}
        />
        <Text style={styles.categoryName}>{item.categoryName}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView style={styles.root}>
      <CategoryHeader title={'Maintenance & Repair Service'} />
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
    backgroundColor: colors.black,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
    padding: 5,
  },
});
