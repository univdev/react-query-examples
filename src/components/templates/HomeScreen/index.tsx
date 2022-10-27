import { Layout, Menu } from "antd";
import { MenuItemType } from "antd/lib/menu/hooks/useItems";
import { Header } from "components/organisms/Header";
import { useRouter } from "next/router";
import { MenuClickEventHandler } from "rc-menu/lib/interface";
import { useState } from "react";
import { useMemo } from "react";
import Styles from './index.module.scss';

export const HomeScreen = () => {
  const router = useRouter();
  const type = (router.query.type ?? 'useQuery') as string;
  const [page, setPage] = useState<string>(type);

  const menu = useMemo(() => {
    const navigations = [
      { label: 'useQuery', key: 'useQuery' },
      { label: 'useQueries', key: 'useQueries' },
      { label: 'useInfiniteQuery', key: 'useInfiniteQuery' },
    ];

    return navigations;
  }, []);

  const onClickMenu: MenuClickEventHandler = (item) => {
    const { key } = item;
    router.push({ query: { type: key } });
    setPage(key);
  };

  return (
    <Layout className={Styles.HomeScreen}>
      <Layout>
        <Layout.Sider
          className={Styles.Sider}
        >
          <Menu
            className={Styles.Menu}
            activeKey={page}
            items={menu}
            onClick={onClickMenu}
          />
        </Layout.Sider>
        <Layout.Content>
          
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
