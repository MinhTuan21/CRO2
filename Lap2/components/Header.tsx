import React, { memo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export type UserType = {
    name: string;
    avatar: string;
};

type HeaderProps = {
    user: UserType;
};

export const Header = memo(({ user }: HeaderProps) => {
    console.log('🔄 Re-render Header');

    return (
        <View style={styles.container}>
            <Image 
                resizeMode="center" 
                style={styles.avatar} 
                source={{ uri: user.avatar }} 
            />
            <View>
                <Text>Chào ngày mới</Text>
                <Text style={styles.userName}>{user.name ? user.name : 'Chưa có tên'}</Text>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});
