import useTheme from '@src/theme/useTheme';
import Box from '@src/components/Box/Box';
import Text from '@src/components/Text/Text';
import Image from '@src/components/Image/Image';
import Icon from "@src/components/Icon/Icon";
import Button from "@src/components/Button/Button";


export default function HomeScreen() {
  const theme = useTheme();

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
      <Menu />
      <Background />
      <HomeBody />
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
        paddingHorizontal: theme.space.x4,
        paddingVertical: theme.space.x4,
        width: theme.space.percent["x1/1"],
        position: 'absolute',
        top: theme.space.x0,
        left: theme.space.x0,
        right: theme.space.x0,
        justifyContent: 'space-between',
      }}
    >
      <Box
        styleSheet={{
          width: theme.space.x10,
          height: theme.space.x10,
          backgroundColor: theme.colors.primary.x500,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: theme.borderRadius.full,
        }}
      >
        MS
      </Box>
      <Box>
        <Box styleSheet={{
          width: theme.space.x10,
          height: theme.space.x10,
          backgroundColor: theme.colors.neutral.x500,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: theme.borderRadius.full,
        }}>
          <Icon name="menu" />
        </Box>
      </Box>
    </Box>
  );
}


function HomeBody() {
  const theme = useTheme();

  return (
    <Box styleSheet={{
      marginTop: `-${theme.space.x56}`,
      borderTopLeftRadius: theme.borderRadius.lg,
      borderTopRightRadius: theme.borderRadius.lg,
      width: theme.space.percent["x1/1"],
      maxWidth: theme.space.container.sm,
      backgroundColor: theme.colors.neutral.x000,
      alignSelf: 'center',
      paddingVertical: theme.space.x10,
      paddingHorizontal: theme.space.x9,
      flexDirection: 'column',
      alignItems: 'stretch',
      color: theme.colors.neutral.x500,
    }}>
      <Box
        styleSheet={{
          flex: 1,
          alignItems: 'stretch',
          justifyContent: 'space-between',
        }}
      >
        <Image
          src="https://github.com/omariosouto.png"
          styleSheet={{
            borderRadius: theme.borderRadius.full,
            width: theme.space.x32,
            height: theme.space.x32,
          }}
        />

        <Box
          styleSheet={{
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Button>
            Newsletter <Icon name="arrow_upward" />
          </Button>
          <Button>
            Newsletter <Icon name="arrow_upward" />
          </Button>
        </Box>
      </Box>
      <Box
        styleSheet={{
          flexDirection: 'column',
        }}
      >
        <Text>Mario Souto</Text>
        <Text>@omariosouto - DevSoutinho - Brasil</Text>
        <Text>Sr Lead Software Engineer, Nubank</Text>
      </Box>

      <Box>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem amet odio possimus quia facere quaerat eos iusto, repellendus aperiam nemo dolorem? Laboriosam optio libero architecto dignissimos deserunt rem nulla?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem amet odio possimus quia facere quaerat eos iusto, repellendus aperiam nemo dolorem? Laboriosam optio libero architecto dignissimos deserunt rem nulla?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem amet odio possimus quia facere quaerat eos iusto, repellendus aperiam nemo dolorem? Laboriosam optio libero architecto dignissimos deserunt rem nulla?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem amet odio possimus quia facere quaerat eos iusto, repellendus aperiam nemo dolorem? Laboriosam optio libero architecto dignissimos deserunt rem nulla?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem amet odio possimus quia facere quaerat eos iusto, repellendus aperiam nemo dolorem? Laboriosam optio libero architecto dignissimos deserunt rem nulla?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem amet odio possimus quia facere quaerat eos iusto, repellendus aperiam nemo dolorem? Laboriosam optio libero architecto dignissimos deserunt rem nulla?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem amet odio possimus quia facere quaerat eos iusto, repellendus aperiam nemo dolorem? Laboriosam optio libero architecto dignissimos deserunt rem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem amet odio possimus quia facere quaerat eos iusto, repellendus aperiam nemo dolorem? Laboriosam optio libero architecto dignissimos deserunt rem nulla?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem amet odio possimus quia facere quaerat eos iusto, repellendus aperiam nemo dolorem? Laboriosam optio libero architecto dignissimos deserunt rem nulla?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem amet odio possimus quia facere quaerat eos iusto, repellendus aperiam nemo dolorem? Laboriosam optio libero architecto dignissimos deserunt rem nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem amet odio possimus quia facere quaerat eos iusto, repellendus aperiam nemo dolorem? Laboriosam optio libero architecto dignissimos deserunt rem nulla?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem amet odio possimus quia facere quaerat eos iusto, repellendus aperiam nemo dolorem? Laboriosam optio libero architecto dignissimos deserunt rem nulla?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem amet odio possimus quia facere quaerat eos iusto, repellendus aperiam nemo dolorem? Laboriosam optio libero architecto dignissimos deserunt rem nulla?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem amet odio possimus quia facere quaerat eos iusto, repellendus aperiam nemo dolorem? Laboriosam optio libero architecto dignissimos deserunt rem nulla?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem amet odio possimus quia facere quaerat eos iusto, repellendus aperiam nemo dolorem? Laboriosam optio libero architecto dignissimos deserunt rem nulla?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem amet odio possimus quia facere quaerat eos iusto, repellendus aperiam nemo dolorem? Laboriosam optio libero architecto dignissimos deserunt rem nulla?

      </Box>
    </Box>
  )
}
