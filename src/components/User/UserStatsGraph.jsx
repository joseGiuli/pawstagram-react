import React from "react";
import { SectionAnimated } from "../../styles/GlobalStyles";
import { GraphItem, GraphWrapper } from "./UserStatsGraphStyles";
import Paragraph from "../../ui/typography/Paragraph";
import { VictoryBar, VictoryPie, VictoryChart } from "victory";

const UserStatsGraph = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );
    setGraph(graphData);
  }, [data]);

  if (total === 0)
    return (
      <Paragraph weight="500" margin="1rem 0 0">
        Faça uma postagem para ter acesso às estatísticas.
      </Paragraph>
    );
  return (
    <SectionAnimated>
      <GraphWrapper>
        <GraphItem>
          <Paragraph>Acessos: {total}</Paragraph>
        </GraphItem>
        <GraphItem>
          <VictoryPie
            data={graph}
            innerRadius={50}
            padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
            style={{
              data: {
                fillOpacity: 0.9,
                stroke: "#fff",
                strokeWidth: 2,
              },
              labels: {
                fontSize: 14,
                fill: "#333",
              },
            }}
          />
        </GraphItem>
        <GraphItem>
          <VictoryChart>
            <VictoryBar alignment="start" data={graph} />
          </VictoryChart>
        </GraphItem>
      </GraphWrapper>
    </SectionAnimated>
  );
};

export default UserStatsGraph;
