import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Typography, Button } from "heroui-native";
import { Uniwind, useUniwind} from "uniwind";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { theme } = useUniwind();

  return (
    <View
      className="flex-1 bg-black px-10"
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
      }}
    >
      <Typography.Heading className="text-white py-17" >
        Did you shit today
      </Typography.Heading>
      <Button className="bg-white" onPress={() => Uniwind.setTheme(theme === 'light' ? 'dark' : 'light')}>
        <Typography className="text-black">
          Touch me
        </Typography>
      </Button> 
    </View>
  );
}
