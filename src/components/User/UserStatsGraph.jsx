import React from "react";
import { SectionAnimated } from "../../styles/GlobalStyles";
import { GraphContent, GraphWrapper } from "./UserStatsGraphStyles";
import Paragraph from "../../ui/typography/Paragraph";

const UserStatsGraph = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );

    console.log(data);
  }, [data]);

  return (
    <SectionAnimated>
      <GraphWrapper>
        <GraphContent>
          <Paragraph>Acessos: {total}</Paragraph>
        </GraphContent>
      </GraphWrapper>
    </SectionAnimated>
  );
};

export default UserStatsGraph;
