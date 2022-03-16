import { PropsWithChildren } from 'react';

export default function PageWrapper({ children }: PropsWithChildren<unknown>) {
  return <div className="px-4 md:max-w-screen-lg mx-auto">{children}</div>;
}
