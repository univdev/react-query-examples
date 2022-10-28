import { useQueries, useQuery } from "@tanstack/react-query";
import { Card, Col, Row, Typography } from "antd";
import { QueryCard } from "components/molecules/QueryCard";
import Styles from './index.module.scss';

export const UseQueriesScreen = () => {
  const request = (responseTime: number): Promise<string> => {
    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve(`Success! ms: ${responseTime}`);
      }, responseTime);
    });
  };

  const results = useQueries({
    queries: [
      { queryKey: ['usequeries-1'], queryFn: () => request(1000) },
      { queryKey: ['usequeries-2'], queryFn: () => request(3000) },
      { queryKey: ['usequeries-3'], queryFn: () => request(5000) },
      { queryKey: ['usequeries-4'], queryFn: () => request(7000) },
    ]
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
          <Typography.Title>useQueries</Typography.Title>
        </Col>
        <Col
          span={20}
        >
          {
            results.map((result, key) => {
              return (
                <QueryCard
                  key={key}
                  isLoading={result.isLoading || result.isFetching}
                  isSuccess={result.isSuccess}
                  isFailed={result.isError}
                  data={result.data}
              ></QueryCard>
              );
            })
          }
        </Col>
      </Row>
    </div>
  );
};