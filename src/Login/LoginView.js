import React, { useState } from 'react';
import { View, Text } from 'react-native';
export function Login() {
  // Khai báo 1 biến số đếm, gọi là "count"
  const [count, setCount] = useState(0);

  return (
<View style={{flex:1,backgroundColor:'blue'}}>
    <Text>Login</Text>
</View>
  );
}