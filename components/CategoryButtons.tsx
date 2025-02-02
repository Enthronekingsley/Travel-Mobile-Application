import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Colors from '@/constants/Colors'
import destinationCategories from '@/data/categories'
import { MaterialCommunityIcons } from '@expo/vector-icons'


type Props = {
    onCategoryChanged: (category: string) => void
}

const CategoryButtons = ({onCategoryChanged}: Props) => {
    const itemRef = useRef<TouchableOpacity[] | null[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<ScrollView>(null)

    const handleSelectCategory = (index : number) => {
        const selected = itemRef.current[index];
        setActiveIndex(index)

        selected?.measure((x) => {
            scrollRef.current?.scrollTo({x:x, y:0, animated:true})
        })
        
        onCategoryChanged(destinationCategories[index].title)

    }

  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        horizontal
        ref={scrollRef}
        contentContainerStyle={{ gap: 10, paddingVertical: 10, marginBottom: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        {destinationCategories.map(( item, index ) => (
            <TouchableOpacity 
                key={index}
                onPress={() => handleSelectCategory(index)}
                style={activeIndex == index ? styles.categoryBtnActive : styles.categoryBtn}
                ref={(el) => itemRef.current[index] = el}
            >
                    <MaterialCommunityIcons name={item.iconName as any} size={20} color={Colors.black} />
                    <Text style={activeIndex == index ? styles.categoryBtnTxtActive : styles.categoryBtnTxt}>{item.title}</Text>
            </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default CategoryButtons

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: Colors.black,
    },
    categoryBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: '#333333',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    categoryBtnActive: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: '#333333',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    categoryBtnTxt: {
        marginLeft: 5,
        color: Colors.black,
    },
    categoryBtnTxtActive: {
        marginLeft: 5,
        color: Colors.white,
    }
})