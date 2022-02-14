import {
  TableRow,
  TableCell,
  IconButton,
  Collapse,
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { cityEnglishName } from "../../utils/data";
import { IUser } from "../../types/user";
import { IWeatherInfo } from "../../types/weatherInfo";

interface IUserTableRow {
  user: IUser;
  weatherInfo: IWeatherInfo;
}

const UserTableRow: React.FC<IUserTableRow> = ({
  user,
  weatherInfo,
}: IUserTableRow) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDeleteButtonClick = (id: string = "") => {
    // call delete api
  };

  return (
    <>
      <TableRow
        style={{ cursor: "pointer" }}
        sx={{ "& > *": { borderBottom: "unset" } }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <TableCell>
          <IconButton aria-label="expand row" size="small">
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {user.name}
        </TableCell>
        <TableCell align="right">{user.age}</TableCell>
        <TableCell align="right">
          {cityEnglishName.get(user.cityOfBirth)}
        </TableCell>
        <TableCell align="right">{user.email}</TableCell>
        <TableCell align="right">
          {user.gender === "M" ? "Male" : "Female"}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Button
                style={{ float: "right" }}
                onClick={() => handleDeleteButtonClick(user.id)}
              >
                Delete User
              </Button>
              <Typography variant="h6" gutterBottom component="div">
                {cityEnglishName.get(user.cityOfBirth)} temperature
              </Typography>

              {Array.apply(null, weatherInfo.min).map((e, i) => {
                //TODO: make this to component
                const {
                  startTime,
                  endTime,
                  parameter: { parameterName: minTemp },
                } = weatherInfo.min[i];
                const {
                  parameter: { parameterName: maxTemp },
                } = weatherInfo.max[i];
                return (
                  <div key={i}>
                    {startTime} to {endTime}
                    <div>
                      {minTemp}℃ - {maxTemp}℃
                    </div>
                  </div>
                );
              })}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default UserTableRow;
