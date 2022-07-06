import Box from '@src/components/Box/Box';
import Text from '@src/components/Text/Text';
import useTheme from '@src/theme/useTheme';
// Move to files
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <>
      <Box
        tabIndex={0}
        styleSheet={{
          marginTop: '50px',
        }}
      >
        {/* Material UI */}
        <Box
          styleSheet={{
            padding: '50px',
            backgroundColor: '#FFFFFF'
          }}
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button variant="contained">Sample Button</Button>
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
