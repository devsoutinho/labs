import Box from '@src/components/Box/Box';
import Text from '@src/components/Text/Text';
import useTheme from '@src/theme/useTheme';
// Move to files
import Button from '@src/components/Button/Button';
import TextField from '@src/components/TextField/TextField';

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <>
      <Box
        tabIndex={0}
        styleSheet={{
          marginTop: theme.space.x20,
        }}
      >
        <Box
          styleSheet={{
            padding: theme.space.x20,
            backgroundColor: theme.colors.neutral.x000,
          }}
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button colorPallete="accent" variant="contained" >Sample Button</Button>
        </Box>

        <Text
          tag="p"
          styleSheet={{
            background: theme.colors.primary.x100,
            paddingVertical: theme.space.x5,
            paddingHorizontal: theme.space.x5,
            hover: {
              background: theme.colors.primary.x050,
            },
            focus: {
              background: theme.colors.primary.x300,
            },
            modeDark: {
              background: theme.colors.primary.x700,
            },
          }}
        >
          Página Inicial
        </Text>
      </Box>
    </>
  );
}
