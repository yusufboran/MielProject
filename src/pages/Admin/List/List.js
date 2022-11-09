import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ProjectModal from "./ProjectModal";
import { Edit, Add, Delete } from "@mui/icons-material";

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

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell align="left">{row.title}</TableCell>
        <TableCell align="left">{row.country}</TableCell>
        <TableCell align="left">{row.imgUrl}</TableCell>
        <TableCell align="left">{row.amount}</TableCell>
        <TableCell aria-label="delete">
          <IconButton onClick={() => console.log("")} aria-label="delete">
            <Delete />
          </IconButton>
        </TableCell>
        <TableCell>
          <ProjectModal data={data[0]} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>{row.details}</TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

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
    details:
      "Dolor magna eiusmod laborum proident labore ex ad occaecat enim irure ex.",
    amount: 866.99,
  },
  {
    id: 2,
    title: "Project 3",
    country: "City 3",
    imgUrl: "www.imageurl.com",
    details:
      "Aute proident et incididunt officia veniam elit tempor fugiat dolore labore exercitation esse.",
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
    details:
      "Sit ut velit in labore velit quis amet dolor mollit aliquip deserunt quis exercitation aute.",
    amount: 212.79,
  },
];

export default function ProjectList() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Title</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>İmage</TableCell>
            <TableCell>Country</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
