import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {Header} from './components/Header';
import Main from './components/Main';
import {Body} from './components/Body';
import {Footer} from './components/Footer';

const App = () => {
    const [user, setUser] = useState({ name: 'Chưa có tên', avatar: '' });
    const [bgColor, setBgColor] = useState('#f1f1f1');

    const handleUpdateInfor = (newUser) => {
      setUser(newUser);
    };

    const handleChangeBgFooter = () => {
        setBgColor(bgColor === '#f1f1f1' ? '#87CEEB' : '#f1f1f1');
    };

    return (
        <View style={styles.container}>
            <Header user={user} />
            <Main>
                <Body onUpdateInfor={handleUpdateInfor} onClickChangeBgFooter={handleChangeBgFooter} />
            </Main>
            <Footer timeUpdate={new Date().toLocaleTimeString()} backgroundColor={bgColor} />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
