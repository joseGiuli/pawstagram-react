import React from "react";
import Head from "../Helpers/Head";
import useFetch from "../../Hooks/useFetch";
import Loading from "../Helpers/Loading";

import { STATS_GET } from "../../Api";
import Error from "../Helpers/Error";
import Title from "../../ui/typography/Title";

const UserStatsGraph = React.lazy(() => import("./UserStatsGraph"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  if (data)
    return (
      <React.Suspense fallback={<Loading />}>
        <Head title="Estatísticas" />
        <UserStatsGraph data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
