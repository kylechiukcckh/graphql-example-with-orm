import {
  FormControl,
  InputLabel,
  Input,
  Autocomplete,
  TextField,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";
import { useState } from "react";
import { IUser } from "../../types/user";
import { cityEnglishName } from "../../utils/data";

const initUser: IUser = {
  name: "",
  email: "",
  age: 0,
  gender: "F",
  cityOfBirth: "",
};

const cityList = Array.from(cityEnglishName, ([id, label]) => ({
  id,
  label,
}));

const CreateUser = () => {
  const [user, setUser] = useState<IUser>(initUser);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: event.target.value });
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, age: parseInt(event.target.value) });
  };
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, gender: event.target.value });
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, email: event.target.value });
  };

  return (
    <>
      <FormControl variant="standard">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={user?.name}
          onChange={handleNameChange}
        />

        <Autocomplete
          style={{ marginTop: "10px" }}
          disablePortal
          id="combo-box-demo"
          onChange={(event, newValue) => {
            setUser({ ...user, cityOfBirth: newValue?.id });
          }}
          options={cityList}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="City of Birth" />
          )}
        />

        <TextField
          style={{ marginTop: "10px" }}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          onChange={handleAgeChange}
          value={user?.age}
          variant="outlined"
          label="age"
        />

        <TextField
          style={{ marginTop: "10px" }}
          id="outlined-basic"
          onChange={handleEmailChange}
          label="Email"
          variant="outlined"
          value={user?.email}
        />

        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="F"
          name="radio-buttons-group"
          value={user?.gender}
          onChange={handleGenderChange}
        >
          <FormControlLabel value="F" control={<Radio />} label="Female" />
          <FormControlLabel value="M" control={<Radio />} label="Male" />
          <FormControlLabel value="O" control={<Radio />} label="Other" />
        </RadioGroup>
        <Button
          onClick={() => {
            // call create api
            console.log(user);
          }}
        >
          Create User
        </Button>
      </FormControl>
    </>
  );
};

export default CreateUser;
