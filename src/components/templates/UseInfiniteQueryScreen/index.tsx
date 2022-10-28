import { useInfiniteQuery, useQueries, useQuery } from "@tanstack/react-query";
import { Card, Col, Row, Spin, Typography } from "antd";
import { QueryCard } from "components/molecules/QueryCard";
import { ReactNode, useRef } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Styles from './index.module.scss';

export const UseInfiniteQueryScreen = () => {
  const scrollableContainer = useRef<HTMLDivElement>(null);
  const request = (page: number): Promise<{ result: string[], page: number }> => {
    console.log(page);
    const limit = 40;
    const label = limit * (page - 1);
    const result = Array(limit).fill('').map((_, index) => `Item: ${(label + index)}`)

    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve({ result, page });
      }, 3000);
    });
  };

  const {
    fetchNextPage,
    fetchPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    ...result
  } = useInfiniteQuery(['useinfinitequery'], (context) => request(context.pageParam ?? 1), {
    getNextPageParam: (last) => last.page + 1,
  });

  return (
    <div className={Styles.UseQueryScreen}>
      <Row
        justify="center"
        gutter={16}
      >
        <Col
          span={20}
        >
          <Typography.Title>useInfiniteQuery</Typography.Title>
        </Col>
        <Col
          span={20}
        >
          <div
            ref={scrollableContainer}
            className={Styles.List}
          >
            <InfiniteScroll
              dataLength={result.data?.pageParams.length ?? 0}
              next={fetchNextPage}
              hasMore={result.hasNextPage ?? false}
              loader={
                <Spin></Spin>
              }
            >
              {
                result.data?.pages.map((item) => {
                  return item.result.map((result) => {
                    return (
                      <QueryCard
                        data={result}
                      ></QueryCard>
                    );
                  })
                })
              }
            </InfiniteScroll>
          </div>
        </Col>
      </Row>
    </div>
  );
};