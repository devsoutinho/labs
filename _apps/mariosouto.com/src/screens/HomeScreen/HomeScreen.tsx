import Box from '@src/components/Box/Box';
import Text from '@src/components/Text/Text';
import useTheme from '@src/theme/useTheme';

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        background: theme.colors.primary.x100,
      }}
    >
      <Text
        styleSheet={{
          color: theme.colors.primary.x800,
        }}
      >
        Página Inicial
      </Text>
    </Box>
  );
}
