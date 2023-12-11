import React from "react";
import { ResultListProps } from "../utils/types";
import { Typography } from "antd";

const { Text } = Typography;

const ResultList: React.FC<ResultListProps> = ({ loading, founded }) => {
  return (
    <div className="result">
      <div className="result__container">
        {!loading ? (
          founded.length > 0 && founded[0].email !== "" ? (
            <div className="result__list">
              <Text>Совпадения:</Text>
              {founded.map((item, idx) => (
                <div key={idx} className="result__list-item">
                  <Text className="result__list-email">
                    <Text strong>email:</Text> {item.email}
                  </Text>
                  <Text className="result__list-number">
                    <Text strong>number:</Text> {item.number}
                  </Text>
                </div>
              ))}
            </div>
          ) : founded[0] ? (
            <span className="result__list-null">
              Отправьте форму для поиска
            </span>
          ) : (
            <span className="result__list-null">
              По вашему запросу ничего не найдено
            </span>
          )
        ) : (
          <p>Поиск...</p>
        )}
      </div>
    </div>
  );
};

export default ResultList;
