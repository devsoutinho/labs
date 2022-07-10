import MaterialIcon from '@mui/material/Icon';




interface IconProps {
  name: 'menu' | 'arrow_upward';
}
export default function Icon({ name }: IconProps) {
  return (
    <MaterialIcon>
      {name}
    </MaterialIcon>
  );
}
