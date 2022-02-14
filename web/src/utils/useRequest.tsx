import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const REQUEST_API_URL = `${process.env.API_URL || "localhost"}:${
  process.env.API_PORT || 4000
}`;

const graphQLClient = new GraphQLClient(REQUEST_API_URL);

export function useGetUsers() {
  return useQuery("getUsers", async () => {
    const { getUserList } = await graphQLClient.request(gql`
      query getUserList($pageSize: Float, $page: Float) {
        getUsers(pageSize: $pageSize, page: $page) {
          users {
            id
            name
            age
            gender
            email
            cityOfBirth
          }
          totalPages
        }
      }
    `);
    return getUserList;
  });
}

export function useGetWeather() {
  // TODO useMemo or localStorage(ttl 1 day) to save api result
  return useQuery("getWeathers", async () => {
    const res = await fetch(
      `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${
        process.env.API_TOKEN || "CWB-8413857A-713E-416E-9D4A-B8317D1FB008"
      }&elementName=MinT,MaxT`
    );

    const data = await res.json();

    const result = data.records.location.reduce((map: any, obj: any) => {
      // TODO: remove magic number
      map[obj.locationName] = {
        min: obj.weatherElement[0].time,
        max: obj.weatherElement[1].time,
      };
      return map;
    }, {});

    return result;
  });
}
