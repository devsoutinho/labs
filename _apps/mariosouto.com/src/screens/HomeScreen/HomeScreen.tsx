import Box from '@src/components/Box/Box';
import Text from '@src/components/Text/Text';
import useTheme from '@src/theme/useTheme';

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <>
      <Box
        tabIndex={0}
      >
        <Text
          tag="p"
          styleSheet={{
            padding: '20px',
            background: theme.colors.primary.x100,
            hover: {
              background: theme.colors.primary.x200,
            },
            focus: {
              background: theme.colors.primary.x300,
            },
            dark: {
              background: theme.colors.primary.x700,
            }
          }}
        >
          Página Inicial
        </Text>
      </Box>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ab amet officiis nihil eveniet illum maiores dolorum eos, voluptate tenetur sunt facilis. Obcaecati porro qui voluptatum odio, corrupti repellat ipsum.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ab amet officiis nihil eveniet illum maiores dolorum eos, voluptate tenetur sunt facilis. Obcaecati porro qui voluptatum odio, corrupti repellat ipsum.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ab amet officiis nihil eveniet illum maiores dolorum eos, voluptate tenetur sunt facilis. Obcaecati porro qui voluptatum odio, corrupti repellat ipsum.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ab amet officiis nihil eveniet illum maiores dolorum eos, voluptate tenetur sunt facilis. Obcaecati porro qui voluptatum odio, corrupti repellat ipsum.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ab amet officiis nihil eveniet illum maiores dolorum eos, voluptate tenetur sunt facilis. Obcaecati porro qui voluptatum odio, corrupti repellat ipsum.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ab amet officiis nihil eveniet illum maiores dolorum eos, voluptate tenetur sunt facilis. Obcaecati porro qui voluptatum odio, corrupti repellat ipsum.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ab amet officiis nihil eveniet illum maiores dolorum eos, voluptate tenetur sunt facilis. Obcaecati porro qui voluptatum odio, corrupti repellat ipsum.
    </>
  );
}
