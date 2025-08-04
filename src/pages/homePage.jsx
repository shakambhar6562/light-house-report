import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import domainRegex from "../regex";
import axios from "axios";

export const HomePage = () => {
  const [domain, setDomain] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [report, setReport] = useState(null);
  const [err, setErr] = useState(false);

  const getDomain = async () => {
    if (domainRegex.test(domain)) {
      // Logic to handle valid domain input
      console.log("Valid domain:", domain);
      try {
        setIsLoading(true);
        const response = await axios.post(
          "http://localhost:5000/api/light-house-report",
          { domain },
          { responseType: "text" }
        );
        setReport(response.data);
      } catch (error) {
        console.error("Error running Lighthouse:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setErr(true);
    }
  };

  if (report) {
    return (
      <iframe
        title="Lighthouse Report"
        srcDoc={report}
        style={{
          width: "100%",
          height: "88vh",
          border: "1px solid #ccc",
          marginTop: "20px",
        }}
      />
    );
  }

  return (
    <Box sx={{ width: "50vw" }}>
      <FormControl fullWidth>
        <Typography
          variant="subtitle1"
          sx={{ mb: 1, color: "text.primary", fontWeight: 500 }}
        >
          Enter Domain Name
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Enter domain name"
          fullWidth
          value={domain}
          onChange={(e) => {
            setDomain(e.target.value);
            setErr(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getDomain();
            }
          }}
          error={err}
          helperText={err ? "Please enter a valid URL" : ""}
        />
        <Button
          onClick={getDomain}
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          loading={loading}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};
