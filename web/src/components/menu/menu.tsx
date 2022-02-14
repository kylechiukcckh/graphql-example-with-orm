import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
const Menu: React.FC = () => {
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <Divider />
        <nav>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="User Management" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </>
  );
};

export default Menu;
