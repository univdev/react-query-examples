import { useQuery } from "@tanstack/react-query";
import { Col, Row, Typography } from "antd";
import { QueryCard } from "components/molecules/QueryCard";
import Styles from './index.module.scss';

export const UseQueryScreen = () => {
  const request = (): Promise<string> => {
    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve('Success!');
      }, 5000);
    });
  };

  const {
    isLoading,
    isFetching,
    isFetched,
    isError,
    data,
  } = useQuery(['query'], () => request());

  return (
    <div className={Styles.UseQueryScreen}>
      <Row
        justify="center"
        gutter={16}
      >
        <Col
          span={20}
        >
          <Typography.Title>useQuery</Typography.Title>
        </Col>
        <Col
          span={20}
        >
          <QueryCard
            isLoading={isLoading || isFetching}
            isSuccess={isFetched}
            isFailed={isError}
            data={data}
          ></QueryCard>
        </Col>
      </Row>
    </div>
  );
};