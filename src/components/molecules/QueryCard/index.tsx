import { Card, Spin, Typography } from "antd";
import { CheckCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { QueryCardProps } from "./types";
import Styles from './index.module.scss';

export const QueryCard = (props: QueryCardProps) => {
  return (
    <Card
      className={Styles.QueryCard}
    >
      <div className={Styles.Row}>
        <Typography.Text>
          { props.data }
        </Typography.Text>
        { props.isLoading && <Spin></Spin> }
        { props.isFailed && <CloseOutlined></CloseOutlined> }
        { props.isSuccess && <CheckCircleOutlined></CheckCircleOutlined> }
      </div>
    </Card>
  );
};
