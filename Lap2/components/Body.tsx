import React, { useState, memo } from 'react';
import { View, Text, TextInput, Button, ToastAndroid, StyleSheet } from 'react-native';

type BodyType = {
    onUpdateInfor: (user: { name: string; avatar: string }) => void;
    onClickChangeBgFooter: () => void;
};

export const Body: React.FC<BodyType> = memo((props) => {

    const { onUpdateInfor, onClickChangeBgFooter } = props;//props.onUpdateInfor; props.onClickChangeBgFooter
    const [name, setName] = useState('');
    const [linkImage, setLinkImage] = useState('');

    const handleChangeInfo = () => {
        if (name.length > 0 && linkImage.length > 0) {
            onUpdateInfor({ name, avatar: linkImage });
        } else {
            ToastAndroid.show('Không được để trống!', ToastAndroid.SHORT);
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nhập tên:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Nhập tên mới"
            />

            <Text style={styles.label}>Nhập link ảnh đại diện:</Text>
            <TextInput
                style={styles.input}
                value={linkImage}
                onChangeText={setLinkImage}
                placeholder="Dán link ảnh vào đây"
            />

            <View style={styles.buttonContainer}>
                <Button title="Cập nhật thông tin" onPress={handleChangeInfo} color="#007AFF" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Đổi màu Footer" onPress={onClickChangeBgFooter} color="#FF9500" />
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    buttonContainer: {
        marginVertical: 5,
    },
});
