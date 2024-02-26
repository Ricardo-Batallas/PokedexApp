import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation/NavigationStack";
import NavigationTab from "./src/navigation/NavigationTab";
import NavigationDrawer from "./src/navigation/NavigationDrawer";

export default function App() {
  return (
    <NavigationContainer>
      {/*<NavigationStack />*/}
      <NavigationTab />
      {/*<NavigationDrawer />*/}
    </NavigationContainer>
  );
}
