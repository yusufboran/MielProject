import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Delete } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import ProjectModal from "./ProjectModal";
import { Edit, Add } from "@mui/icons-material";

const rows = [
  {
    id: 0,
    title: "Project 1",
    country: "City 1",
    imgUrl: "www.imageurl.com",
    details: "Exercitation consequat commodo esse labore aute anim anim.",
    amount: 312.44,
  },
  {
    id: 1,
    title: "Project 2",
    country: "City 2",
    imgUrl: "www.imageurl.com",
    details: "Dolor magna eiusmod laborum proident labore ex ad occaecat enim irure ex.",
    amount: 866.99,
  },
  {
    id: 2,
    title: "Project 3",
    country: "City 3",
    imgUrl: "www.imageurl.com",
    details: "Aute proident et incididunt officia veniam elit tempor fugiat dolore labore exercitation esse.",
    amount: 100.81,
  },
  {
    id: 3,
    title: "Project 4",
    country: "City 4",
    imgUrl: "www.imageurl.com",
    details: "Veniam excepteur cillum incididunt excepteur.",
    amount: 654.39,
  },
  {
    id: 4,
    title: "Project 5",
    country: "City 5",
    imgUrl: "www.imageurl.com",
    details: "Sit ut velit in labore velit quis amet dolor mollit aliquip deserunt quis exercitation aute.",
    amount: 212.79,
  },
];
// function arrayRemove(arr, value) {
//   return arr.filter(function (ele) {
//     return ele !== value;
//   });
// }

function clickMe(row) {
  console.log(row);
  // var result = arrayRemove(rows, row);
  // console.log(result);
}
const data = [
  {
    icon: <Edit />,
    country: "Edit",
  },
  {
    icon: <Add />,
    country: "New",
  },
];

export default function Orders() {
  return (
    <React.Fragment>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Recent Orders
        </Typography>

        <Tooltip>
          <ProjectModal data={data[1]} />
        </Tooltip>
      </Toolbar>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>İmage</TableCell>
            <TableCell>Details</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.country}</TableCell>
              <TableCell>{row.imgUrl}</TableCell>
              <TableCell>{row.details}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
              <TableCell aria-label="delete">
                <IconButton onClick={() => clickMe(row)} aria-label="delete">
                  <Delete />
                </IconButton>
              </TableCell>
              <TableCell>
                <ProjectModal data={data[0]} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
