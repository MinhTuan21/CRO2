import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type FooterType = {
    timeUpdate: string;
    backgroundColor: string;
};

const formatTime = (time: string): string => {
    return `Cập nhật lúc: ${time}`;
};

export const Footer: React.FC<FooterType> = memo(({ timeUpdate, backgroundColor }) => {
    console.log('Re-render Footer');

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.text}>{formatTime(timeUpdate)}</Text>
        </View>
    );
});
const styles = StyleSheet.create({
    container: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
