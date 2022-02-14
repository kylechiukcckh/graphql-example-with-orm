import React, { useEffect, useState } from "react";
import { useGetUsers, useGetWeather } from "../../utils/useRequest";
import dummyData, { cityEnglishName } from "../../utils/data";

import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Pagination,
  Skeleton,
} from "@mui/material";
import UserTableRow from "../userTableRow/userTableRow";
import { RowingTwoTone } from "@mui/icons-material";

const UserTable: React.FC = () => {
  // Don't have any idea why cors setting not work for apollo server
  // running out of time use dummy data instead
  // const { data, isLoading, error, isSuccess } = useGetUsers();

  const { data, isLoading, error, isSuccess } = useGetWeather();

  return (
    <>
      {isLoading && <Skeleton animation="wave" />}
      {error && <h1>Something were wrong</h1>}

      {isSuccess && (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Name</TableCell>
                  <TableCell align="right">age</TableCell>
                  <TableCell align="right">City of Birth</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Gender</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dummyData?.users?.map((row) => (
                  <UserTableRow
                    user={row}
                    key={row.id}
                    weatherInfo={data[row.cityOfBirth]}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            count={dummyData?.totalPages}
            color="primary"
            variant="outlined"
            shape="rounded"
          />
        </>
      )}
    </>
  );
};
export default UserTable;
