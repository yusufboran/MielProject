import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Orders from "../List/Orders";
import ListIcon from "@mui/icons-material/List";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function MapList() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);

  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <Box sx={{ pb: 7 }} ref={ref}>
        <Paper sx={{ top: 0, left: 0, right: 0 }} elevation={0}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Favorites" icon={<ListIcon />} />
            <BottomNavigationAction label="Archive" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Paper>
        {value !== 0 ? <h1>Harita</h1> : <Orders />}
      </Box>
    </Paper>
  );
}
