import { Box, Tab } from "@mui/material";
import UserTable from "../../components/userTable";
import { useGetUsers } from "../../utils/useRequest";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { SetStateAction, useState } from "react";
import CreateUser from "../../components/createUser";

const User = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: any, newValue: SetStateAction<string>) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="User List" value="1" />
              <Tab label="Create User" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <UserTable />
          </TabPanel>
          <TabPanel value="2">
            <CreateUser />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};
export default User;
