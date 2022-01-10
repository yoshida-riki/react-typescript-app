import { memo, ReactNode, VFC } from "react";

import { Header } from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
};

export const Header: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
