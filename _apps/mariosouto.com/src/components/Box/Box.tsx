import React from 'react';


interface BoxProps {
  children: React.ReactNode;
}
export default function Box({ children }) {
  return (
    <div>
      Box Component
    </div>
  );
}
