import React, { useState } from "react";
import {
  MenuItem,
  TextField,
  Grid,
  Button,
  Modal,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  IconButton,
  Select,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const data = [
  {
    name: "John Doe",
    dateBuy: "2024-07-01",
    dateExpiry: "2024-07-31",
    update: "Update",
    randomData: "12345",
  },
  {
    name: "John Doe",
    dateBuy: "2024-07-01",
    dateExpiry: "2024-07-31",
    update: "Update",
    randomData: "12345",
  },
  {
    name: "John Doe",
    dateBuy: "2024-07-01",
    dateExpiry: "2024-07-31",
    update: "Update",
    randomData: "12345",
  },

  {
    name: "John Doe",
    dateBuy: "2024-07-01",
    dateExpiry: "2024-07-31",
    update: "Update",
    randomData: "12345",
  },
  {
    name: "John Doe",
    dateBuy: "2024-07-01",
    dateExpiry: "2024-07-31",
    update: "Update",
    randomData: "12345",
  }
  // Add more data as needed
];

const packageData = [
  {
    id: 1,
    data: "1GB",
    call: "100 mins",
    sms: "50",
    validity: "30 days",
    countryCode: "US",
  },
  {
    id: 1,
    data: "1GB",
    call: "100 mins",
    sms: "50",
    validity: "30 days",
    countryCode: "US",
  },
  {
    id: 1,
    data: "1GB",
    call: "100 mins",
    sms: "50",
    validity: "30 days",
    countryCode: "US",
  },
  {
    id: 1,
    data: "1GB",
    call: "100 mins",
    sms: "50",
    validity: "30 days",
    countryCode: "US",
  },
  {
    id: 1,
    data: "1GB",
    call: "100 mins",
    sms: "50",
    validity: "30 days",
    countryCode: "US",
  },
  {
    id: 1,
    data: "1GB",
    call: "100 mins",
    sms: "50",
    validity: "30 days",
    countryCode: "US",
  }
  // Add more data as needed
];

function OrderNow() {
  const [open, setOpen] = useState(false);
  const [selectedPackages, setSelectedPackages] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCheckboxChange = (id) => {
    setSelectedPackages((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  const handleSave = () => {
    console.log("Selected packages:", selectedPackages);
    handleClose();
  };

  return (
    <Grid
      container
      direction="column"
      style={{
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        style={{ marginBottom: "10px" }}
      >
        <Grid item>
          <h1 style={{ color: "black", fontWeight: "bold" }}>Orders</h1>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Order <AddIcon />
          </Button>
        </Grid>
      </Grid>
      <hr />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date Buy</TableCell>
            <TableCell>Date Expiry</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Random Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.dateBuy}</TableCell>
              <TableCell>{row.dateExpiry}</TableCell>
              <TableCell>{row.update}</TableCell>
              <TableCell>{row.randomData}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "600px",
            maxHeight: "90%",
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 24,
            p: 4,
            overflow: "auto",
          }}
        >
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <h2>Order Form</h2>
            </Grid>
            <Grid item>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
          <hr />
          <br />
          <Box
            style={{
              border: "1px solid lightgrey",
              padding: "30px",
              borderRadius: "7px",
              height: "auto",
            }}
          >
            <Box
              style={{
                border: "2px solid lightgrey",
                padding: "10px",
                borderRadius: "7px",
              }}
            >
              <h3 style={{ color: "black", fontWeight: "bold" }}>
                Package Selection
              </h3>
              <hr />
              <br />
              <Table>
                <TableHead style={{ backgroundColor: "#69a0ebde" }}>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Data</TableCell>
                    <TableCell>Call</TableCell>
                    <TableCell>SMS</TableCell>
                    <TableCell>Validity</TableCell>
                    <TableCell>Country Code</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {packageData.map((pkg) => (
                    <TableRow key={pkg.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedPackages.includes(pkg.id)}
                          onChange={() => handleCheckboxChange(pkg.id)}
                        />
                      </TableCell>
                      <TableCell>{pkg.data}</TableCell>
                      <TableCell>{pkg.call}</TableCell>
                      <TableCell>{pkg.sms}</TableCell>
                      <TableCell>{pkg.validity}</TableCell>
                      <TableCell>{pkg.countryCode}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            <br />
            <TextField
              variant="outlined"
              size="medium"
              value="2 Piece"
              fullWidth
              style={{ marginBottom: "10px" }}
            />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              size="small"
              value="29.ihsan Goksen"
              fullWidth
              style={{ marginBottom: "10px" }}
            >
              <MenuItem value="29.ihsan Goksen">29.ihsan Goksen</MenuItem>
              <MenuItem value="4GB">4GB</MenuItem>
              <MenuItem value="5GB">5GB</MenuItem>
              <MenuItem value="8GB">8GB</MenuItem>
            </Select>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              style={{ float: "right" }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
}

export default OrderNow;
