import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { ListRenderItem } from 'react-native';
import { GroupType } from '@/types/groupType'
import { Ionicons } from '@expo/vector-icons';

type Props = {
    listings: any[];
}

const GroupListings = ({listings}: Props) => {

    const renderItems: ListRenderItem<GroupType> = ({ item }) => {
        return (
            <View style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={{ marginLeft: 5 }}>
                    <Text style={styles.itemTxt}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='star' size={20} color={Colors.primaryColor} />
                        <Text style={styles.itemRating}>{item.rating}</Text>
                        <Text style={styles.itemReviews}>({item.reviews})</Text>
                    </View>
                </View>
            </View>
        )
    }

  return (
    <View>
      <Text style={styles.title}>Top Travel Groups</Text>
      <FlatList data={listings} renderItem={renderItems} horizontal showsHorizontalScrollIndicator={false} />
    </View>
  )
}

export default GroupListings

const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 100,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 10,
    },
    itemTxt: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 8,
    },
    itemRating: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
        marginLeft: 5,
    },
    itemReviews: {
        fontSize: 14,
        color: '#999',
    },
})

