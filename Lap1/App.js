import React from "react";

import { StyleSheet, Text, View, SafeAreaView } from "react-native";

/*Bai3 */
import { CustomTextInput } from "./Bai3/components/CustomInput";
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomTextInput label="Họ và tên"/>
      <CustomTextInput label="Gmail"/>
      <CustomTextInput label="Cư trú" editable={false} />
      <CustomTextInput label="năm sinh" error="Description" editable={true}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
/*Bai1 */
// import { Header } from "./Bai1/components/Header";
// const App = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Header title="Header" showBackButton  showRightIcon />
//       <Header title="Trang chủ"  />
//       <Header title="Hồ sơ"  />
//     </SafeAreaView>
//   );
// };
/*Bai2 */
// import { SectionView } from "./Bai2/components/SectionView";
// const App = () => {
//   return (
//     <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: "#f4f4f4" }}>
//         <View>
//           <SectionView
//             title="Lịch trình"
//             data={[
//               { label: "Địa điểm", value: "Hồ Tràm, Vũng Tàu" },
//               { label: "Thời gian", value: "09:00 AM - 12:00 AM, 12/12/2024" },
//               { label: "Phương tiện di chuyển", value: "Xe bus" },
//               { label: "Thời gian", value: "21:00 - 22:00" },
//             ]}
//             image="https://hanoispiritofplace.com/wp-content/uploads/2018/03/hinh-anh-bien-dep-29.jpg"
//           />
          
//           <SectionView
//             title="Khách sạn"
//             data={[
//               { label: "Tên khách sạn", value: "Hồng Quỳnh" },
//               { label: "Giờ mở cửa", value: "06:00 AM - 12:00 AM" },
//               { label: "Địa điểm", value: "234 Quang Trung, Hồ Chí Minh" },
//             ]}
//             showButton
//           />
//         </View>
//     </SafeAreaView>
//   );
// };
export default App; 
