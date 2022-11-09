import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Dashboard,
  ShoppingCart,
  People,
  BarChart,
  Layers,
} from "@mui/icons-material";

const menuList = [
  {
    icons: <Dashboard />,
    text: "Dashboard",
  },
  {
    icons: <ShoppingCart />,
    text: "Orders",
  },
  {
    icons: <People />,
    text: "Customers",
  },
  {
    icons: <BarChart />,
    text: "Reports",
  },
  {
    icons: <Layers />,
    text: "Integrations",
  },
];
export const mainListItems = (
  <React.Fragment>
    {menuList.map((item) => (
      <ListItemButton>
        <ListItemIcon>{item.icons}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    ))}
  </React.Fragment>
);
