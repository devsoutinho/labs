import MaterialIcon from '@mui/material/Icon';




interface IconProps {
  name: 'menu';
}
export default function Icon({ name }: IconProps) {
  return (
    <MaterialIcon>
      {name}
    </MaterialIcon>
  );
}
