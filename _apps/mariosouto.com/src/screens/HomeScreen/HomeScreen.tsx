import Box from '@src/components/Box/Box';
import Text from '@src/components/Text/Text';
import useTheme from '@src/theme/useTheme';

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <>
      <Box
        styleSheet={{
          padding: '20px',
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
      <Box
        styleSheet={{
          padding: '20px',
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
      <Box
        styleSheet={{
          padding: '20px',
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
