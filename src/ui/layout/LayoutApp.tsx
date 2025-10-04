import type { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}
export const LayoutApp = ({ children }: Props) => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">{children}</div>
    </div>
  );
};
