import { Layout } from "antd";
import { HeaderProps } from "./types";
import Styles from './index.module.scss';

export const Header = (props: HeaderProps) => {
  return (
    <Layout.Header
      className={Styles.Header}
    >
    </Layout.Header>
  );
};
