import { NavigationContainer } from "@react-navigation/native";
import Feed from "../pages/Feed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notification from "../pages/Notification";
import Settings from "../pages/Settings";

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabGroup(){
    return(
        <Tab.Navigator
            screenOptions={() => ({
                tabBarShowLabel: false
            })}
        >
            <Tab.Screen name="Feed" component={Feed}
            options={{
                tabBarIcon: ({focused}) => (<Entypo name="home" size={24} color={focused? '#0FB455':'#8B8C8B'} />)
            }}
            />
            <Tab.Screen name="Notification" component={Notification}
            options={{
                tabBarIcon: ({focused}) => (<Ionicons name="notifications" size={24} color={focused? '#0FB455':'#8B8C8B'} />)
            }}
            />
            <Tab.Screen name="Settings" component={Settings} 
            options={{
                tabBarIcon: ({focused}) => (<Ionicons name="settings" size={24} color={focused? '#0FB455':'#8B8C8B'} />)
            }}
            />
        </Tab.Navigator>
    );
}



export default function BottonTab() {
    return (
        <NavigationContainer>
            <TabGroup/>
        </NavigationContainer>
    );
}