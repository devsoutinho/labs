import useTheme from '@src/theme/useTheme';
import Box from '@src/components/Box/Box';
import Text from '@src/components/Text/Text';
import Icon from "@src/components/Icon/Icon";
import { useColorScheme } from "@src/infra/ColorScheme/ColorSchemeProvider";


export default function HomeScreen() {
  const theme = useTheme();
  const { isLightColorScheme, isDarkColorScheme, colorScheme, setColorScheme } = useColorScheme();

  return (
    <Box
      tag="main"
      styleSheet={{
        width: '100%',
        flexDirection: 'column',
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        modeDark: {
          backgroundColor: theme.colors.neutral.x900,
        },
      }}
    >
      <Background />
      <Text>
        Scheme Dark
        <input
          type="radio"
          name="colorscheme"
          checked={isDarkColorScheme}
          value="dark"
          onChange={(e) => setColorScheme(e.target.value as unknown as any)} 
        />
      </Text>
      <Text tag="label">
        Scheme Light
        <input
          type="radio"
          name="colorscheme"
          checked={isLightColorScheme}
          value="light"
          onChange={(e) => setColorScheme(e.target.value as unknown as any)}
        />
      </Text>
      <Text>
        Active: {colorScheme}
      </Text>

      <Menu />
    </Box>
  );
}

function Background() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x100,
        backgroundImage: `url("https://via.placeholder.com/1512x400")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '400px',
      }}
    />
  )
}


function Menu() {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        paddingHorizontal: theme.space.x5,
        paddingVertical: theme.space.x5,
        width: theme.space.percent["x1/1"],
        position: 'absolute',
        top: theme.space.x0,
        left: theme.space.x0,
        right: theme.space.x0,
        justifyContent: 'space-between',
      }}
    >
      <Box>
        Logo
      </Box>
      <Box>
        <Icon name="menu" />
      </Box>
    </Box>
  );
}
