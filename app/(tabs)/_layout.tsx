import { Tabs } from 'expo-router';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
        tabBarStyle: {height: 80, paddingLeft: 15, paddingRight: 15, paddingTop: 15, paddingBottom: 20}
      }}>

      <Tabs.Screen
        name="(home)"
        options={{
          tabBarLabel: () => { return null },
          tabBarIcon: () => <HomeIcon />,
        }}
      />

      <Tabs.Screen
        name="(report)"
        options={{
          tabBarLabel: () => { return null },
          tabBarIcon: () => <ReportIcon />,
        }}
      />

      <Tabs.Screen
        name="(outgoing)"
        options={{
          tabBarLabel: () => { return null },
          tabBarIcon: () => <OutgoingButtonIcon />,
        }}
      />
      <Tabs.Screen
        name="(cash_flow)"
        options={{
          tabBarLabel: () => { return null },
          tabBarIcon: () => <CashFlowIcon />,
        }}
      />
      <Tabs.Screen
        name="(settings)"
        options={{
          tabBarLabel: () => { return null },
          tabBarIcon: () => <SettingsIcon />,
        }}
      />
    </Tabs>
  );
}

function HomeIcon() {
  return (
    <Svg width="23" height="23" viewBox="0 0 23 23" fill="none">
      <Path d="M21.3333 20.2718V9.47816C21.3333 9.28103 21.2882 9.0866 21.2014 8.91027C21.1146 8.73395 20.9886 8.58057 20.8333 8.46229L12.0833 1.79562C11.867 1.63077 11.6038 1.54166 11.3333 1.54166C11.0629 1.54166 10.7997 1.63077 10.5833 1.79562L1.83334 8.46229C1.6781 8.58057 1.55209 8.73395 1.46531 8.91027C1.37852 9.0866 1.33334 9.28103 1.33334 9.47816V20.2718C1.33334 20.6086 1.46504 20.9316 1.69946 21.1697C1.93388 21.4079 2.25182 21.5417 2.58334 21.5417H7.58334C7.91486 21.5417 8.23281 21.4079 8.46723 21.1697C8.70165 20.9316 8.83334 20.6086 8.83334 20.2718V16.4623C8.83334 16.1255 8.96504 15.8025 9.19946 15.5644C9.43388 15.3262 9.75182 15.1925 10.0833 15.1925H12.5833C12.9149 15.1925 13.2328 15.3262 13.4672 15.5644C13.7016 15.8025 13.8333 16.1255 13.8333 16.4623V20.2718C13.8333 20.6086 13.965 20.9316 14.1995 21.1697C14.4339 21.4079 14.7518 21.5417 15.0833 21.5417H20.0833C20.4149 21.5417 20.7328 21.4079 20.9672 21.1697C21.2016 20.9316 21.3333 20.6086 21.3333 20.2718Z" stroke="#B7B7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

function ReportIcon() {
  return (
    <Svg width="23" height="23" viewBox="0 0 23 23" fill="none">
      <Path d="M1.5 1.5V21.5H21.5" stroke="#B7B7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M5.94446 17.0556L10.3889 8.16667L15.9445 13.1667L21.5 1.5V17.0556H5.94446Z" stroke="#B7B7B7" strokeWidth="2" strokeLinejoin="round" />
    </Svg>
  )
}

function OutgoingButtonIcon() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', width: 70, height: 35, backgroundColor: "#4DB97F", borderRadius: 30 }}>
      <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
        <Path d="M11.5952 1.59523C11.5952 1.21635 11.4447 0.852985 11.1768 0.585076C10.9089 0.317167 10.5455 0.166656 10.1667 0.166656C9.78778 0.166656 9.42441 0.317167 9.1565 0.585076C8.8886 0.852985 8.73808 1.21635 8.73808 1.59523V8.73808H1.59523C1.21635 8.73808 0.852985 8.8886 0.585076 9.1565C0.317167 9.42441 0.166656 9.78778 0.166656 10.1667C0.166656 10.5455 0.317167 10.9089 0.585076 11.1768C0.852985 11.4447 1.21635 11.5952 1.59523 11.5952H8.73808V18.7381C8.73808 19.117 8.8886 19.4803 9.1565 19.7482C9.42441 20.0161 9.78778 20.1667 10.1667 20.1667C10.5455 20.1667 10.9089 20.0161 11.1768 19.7482C11.4447 19.4803 11.5952 19.117 11.5952 18.7381V11.5952H18.7381C19.117 11.5952 19.4803 11.4447 19.7482 11.1768C20.0161 10.9089 20.1667 10.5455 20.1667 10.1667C20.1667 9.78778 20.0161 9.42441 19.7482 9.1565C19.4803 8.8886 19.117 8.73808 18.7381 8.73808H11.5952V1.59523Z" fill="white"/>
      </Svg>
    </View>
  )
}

function CashFlowIcon() {
  return (
    <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
      <Path d="M15.31 1.21887C15.1727 1.1055 15.0071 1.01458 14.8231 0.951512C14.6391 0.888447 14.4404 0.854537 14.239 0.851803C14.0376 0.84907 13.8376 0.877569 13.6508 0.935601C13.464 0.993634 13.2944 1.08001 13.1519 1.18958C13.0095 1.29914 12.8972 1.42966 12.8218 1.57333C12.7463 1.71701 12.7093 1.8709 12.7128 2.02582C12.7164 2.18075 12.7605 2.33354 12.8424 2.47508C12.9244 2.61662 13.0426 2.744 13.19 2.84964L15.63 4.72656H2.25C1.85218 4.72656 1.47064 4.84812 1.18934 5.06451C0.908035 5.2809 0.75 5.57439 0.75 5.8804C0.75 6.18642 0.908035 6.47991 1.18934 6.6963C1.47064 6.91269 1.85218 7.03425 2.25 7.03425H15.63L13.19 8.91117C12.925 9.1299 12.7808 9.41921 12.7876 9.71813C12.7945 10.0171 12.9519 10.3023 13.2268 10.5137C13.5016 10.7251 13.8724 10.8462 14.261 10.8514C14.6496 10.8567 15.0257 10.7458 15.31 10.5419L20.31 6.69579C20.5909 6.47944 20.7487 6.18618 20.7487 5.8804C20.7487 5.57464 20.5909 5.28137 20.31 5.06502L15.31 1.21887ZM8.31 12.8496C8.57496 12.6309 8.71921 12.3416 8.71235 12.0427C8.70549 11.7438 8.54807 11.4585 8.27324 11.2471C7.99842 11.0357 7.62765 10.9146 7.23905 10.9094C6.85044 10.9041 6.47435 11.0151 6.19 11.2189L1.19 15.065C0.909099 15.2814 0.75132 15.5746 0.75132 15.8804C0.75132 16.1862 0.909099 16.4794 1.19 16.6958L6.19 20.5419C6.47435 20.7458 6.85044 20.8567 7.23905 20.8514C7.62765 20.8462 7.99842 20.7251 8.27324 20.5137C8.54807 20.3023 8.70549 20.0171 8.71235 19.7181C8.71921 19.4192 8.57496 19.1299 8.31 18.9112L5.87 17.0343H19.25C19.6478 17.0343 20.0294 16.9127 20.3107 16.6963C20.592 16.4799 20.75 16.1864 20.75 15.8804C20.75 15.5744 20.592 15.2809 20.3107 15.0645C20.0294 14.8481 19.6478 14.7266 19.25 14.7266H5.87L8.31 12.8496Z" fill="#B7B7B7"/>
    </Svg>
  )
}

function SettingsIcon() {
  return (
    <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
      <Path fillRule="evenodd" clipRule="evenodd" d="M8.97185 2.62473H11.2196C11.294 2.62473 11.3655 2.65282 11.4181 2.70283C11.4708 2.75283 11.5004 2.82065 11.5004 2.89136C11.5004 5.30171 14.2493 6.80951 16.4479 5.603C16.5121 5.56855 16.5879 5.55944 16.6591 5.57765C16.7303 5.59586 16.7911 5.63992 16.8284 5.70032L17.9543 7.55074C17.991 7.61181 18.0009 7.68417 17.9817 7.75209C17.9625 7.82 17.9158 7.87797 17.8518 7.91336C15.6532 9.11853 15.6532 12.1315 17.8518 13.338C17.9154 13.3734 17.9618 13.4311 17.981 13.4987C18.0002 13.5663 17.9906 13.6383 17.9543 13.6993L16.8284 15.5497C16.7911 15.6101 16.7303 15.6541 16.6591 15.6723C16.5879 15.6906 16.5121 15.6815 16.4479 15.647C14.2493 14.4405 11.5004 15.947 11.5004 18.356C11.5004 18.4265 11.471 18.4941 11.4186 18.544C11.3663 18.594 11.2952 18.6222 11.221 18.6226H8.97325C8.89878 18.6226 8.82736 18.5945 8.7747 18.5445C8.72204 18.4945 8.69246 18.4267 8.69246 18.356C8.69246 15.9456 5.94353 14.4392 3.74494 15.6443C3.68064 15.6792 3.60443 15.6885 3.53291 15.6703C3.46139 15.6521 3.40034 15.6078 3.36307 15.547L2.23991 13.6966C2.2035 13.6358 2.1937 13.5639 2.21261 13.4963C2.23151 13.4287 2.27762 13.3709 2.34099 13.3353C4.53958 12.1288 4.53958 9.11587 2.34099 7.90936C2.27776 7.87399 2.23162 7.8165 2.21247 7.74923C2.19331 7.68195 2.20266 7.61022 2.2385 7.54941L3.36307 5.69766C3.40057 5.63712 3.46172 5.59309 3.53322 5.57511C3.60472 5.55714 3.68081 5.56668 3.74494 5.60167C5.94353 6.80818 8.69246 5.30038 8.69246 2.89003C8.69246 2.74338 8.81741 2.62473 8.97185 2.62473ZM6.58654 2.89136C6.58654 1.6382 7.65354 0.625 8.97185 0.625H11.2196C12.5393 0.625 13.6063 1.6382 13.6063 2.89136C13.6067 3.08996 13.6621 3.28496 13.7669 3.45683C13.8716 3.6287 14.0221 3.77141 14.2033 3.87065C14.3844 3.96989 14.5899 4.02218 14.799 4.02228C15.0082 4.02239 15.2137 3.9703 15.3949 3.87123C15.9428 3.57162 16.5935 3.49065 17.2041 3.64612C17.8148 3.80159 18.3355 4.18077 18.6521 4.70046L19.7781 6.55088C20.4365 7.63473 20.0448 9.01855 18.9048 9.6438C18.7235 9.74328 18.5729 9.88632 18.4682 10.0585C18.3635 10.2308 18.3084 10.4261 18.3084 10.625C18.3084 10.8239 18.3635 11.0192 18.4682 11.1915C18.5729 11.3637 18.7235 11.5067 18.9048 11.6062C19.4521 11.9068 19.8514 12.4013 20.0151 12.9812C20.1788 13.561 20.0936 14.1789 19.7781 14.6991L18.6521 16.5495C18.3355 17.0692 17.8148 17.4484 17.2041 17.6039C16.5935 17.7593 15.9428 17.6784 15.3949 17.3788C15.2137 17.2797 15.0082 17.2276 14.799 17.2277C14.5899 17.2278 14.3844 17.2801 14.2033 17.3794C14.0221 17.4786 13.8716 17.6213 13.7669 17.7932C13.6621 17.965 13.6067 18.16 13.6063 18.3586C13.6063 19.6105 12.5393 20.625 11.221 20.625H8.97325C8.3405 20.6246 7.73379 20.3857 7.2865 19.9607C6.8392 19.5357 6.58794 18.9595 6.58794 18.3586C6.58752 18.16 6.53215 17.965 6.42737 17.7932C6.32259 17.6213 6.17209 17.4786 5.99093 17.3794C5.80978 17.2801 5.60434 17.2278 5.3952 17.2277C5.18606 17.2276 4.98057 17.2797 4.79931 17.3788C4.25144 17.6784 3.60077 17.7593 2.99011 17.6039C2.37944 17.4484 1.85869 17.0692 1.54214 16.5495L0.416175 14.6991C0.100647 14.1789 0.0153861 13.561 0.179107 12.9812C0.342828 12.4013 0.742153 11.9068 1.28943 11.6062C1.47044 11.5066 1.6207 11.3636 1.72516 11.1915C1.82962 11.0194 1.8846 10.8243 1.8846 10.6257C1.8846 10.427 1.82962 10.2319 1.72516 10.0598C1.6207 9.8877 1.47044 9.7447 1.28943 9.64513C0.742153 9.34455 0.342828 8.85005 0.179107 8.27018C0.0153861 7.69031 0.100647 7.07245 0.416175 6.55221L1.54074 4.70046C1.85728 4.18077 2.37804 3.80159 2.9887 3.64612C3.59936 3.49065 4.25004 3.57162 4.7979 3.87123C4.97917 3.9703 5.18466 4.02239 5.3938 4.02228C5.60294 4.02218 5.80838 3.96989 5.98953 3.87065C6.17068 3.77141 6.32119 3.6287 6.42597 3.45683C6.53075 3.28496 6.58612 3.08996 6.58654 2.89136ZM12.2023 10.6237C12.2023 11.154 11.9805 11.6627 11.5855 12.0377C11.1906 12.4127 10.6549 12.6234 10.0964 12.6234C9.53789 12.6234 9.00224 12.4127 8.6073 12.0377C8.21236 11.6627 7.99049 11.154 7.99049 10.6237C7.99049 10.0933 8.21236 9.58466 8.6073 9.20964C9.00224 8.83462 9.53789 8.62393 10.0964 8.62393C10.6549 8.62393 11.1906 8.83462 11.5855 9.20964C11.9805 9.58466 12.2023 10.0933 12.2023 10.6237ZM14.3083 10.6237C14.3083 11.6844 13.8645 12.7017 13.0746 13.4517C12.2848 14.2018 11.2135 14.6231 10.0964 14.6231C8.97936 14.6231 7.90806 14.2018 7.11818 13.4517C6.32831 12.7017 5.88456 11.6844 5.88456 10.6237C5.88456 9.56294 6.32831 8.54566 7.11818 7.79562C7.90806 7.04557 8.97936 6.6242 10.0964 6.6242C11.2135 6.6242 12.2848 7.04557 13.0746 7.79562C13.8645 8.54566 14.3083 9.56294 14.3083 10.6237Z" fill="#B7B7B7"/>
    </Svg>
  )
}