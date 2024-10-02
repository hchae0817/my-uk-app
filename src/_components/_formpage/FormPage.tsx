import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { categories } from "../data/categories";
import { FormData } from "./FormData";

// Sample messages corresponding to categories
const sampleMessages: Record<string, string> = {
  musical: "I would like to enquire about a musical performance...",
  landmarks: "I would like to know more about the landmark details...",
  restaurant: "I would like to ask about the dining options at the restaurant...",
  alcohol: "I have questions about local alcoholic beverages...",
  view: "I'd like to hear about the scenic viewpoints available...",
  other: "This is what interests me...",
};

const FormPage: React.FC = () => {
  const [formData] = useState(new FormData());
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = event.target;

    // Update form data
    (formData as any)[name!] = value as string;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name!]: "", 
    }));
  };

  const validateAllFields = (): boolean => {
    const validationErrors = formData.validate();
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateAllFields()) {
      console.log("Form submitted:", formData);
      Object.assign(formData, new FormData()); 
      setErrors({});
    } else {
      console.log("Form has errors:", errors);
    }
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    const selectedCategory = event.target.value as string;
    formData.category = selectedCategory;
    formData.message = sampleMessages[selectedCategory] || ""; 
    setErrors((prevErrors) => ({
      ...prevErrors,
      message: "", 
    }));
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          Enquiry Form
        </Typography>

        {/* Category Dropdown */}
        <Select
          value={formData.category}
          onChange={handleCategoryChange}
          displayEmpty
          sx={{ marginBottom: "20px", width: "100%", fontSize: "16px" }}
          name="category"
        >
          <MenuItem value="">
            <em>Select a category</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.name} value={category.name}>
              {category.displayName}
            </MenuItem>
          ))}
          <MenuItem value="other">Other</MenuItem>
        </Select>

        {/* Message Text Field */}
        <TextField
          label="Enquiry Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          margin="dense"
          multiline
          rows={4}
          error={Boolean(errors.message)}
          helperText={errors.message}
          inputProps={{ maxLength: 500 }}
          placeholder="Type your message here..."
        />

        <Typography variant="h4" gutterBottom sx={{ marginTop: 3 }}>
          Your Details
        </Typography>

        {/* Name Field */}
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="dense"
          error={Boolean(errors.name)}
          helperText={errors.name}
        />

        {/* Email Field */}
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="dense"
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        {/* Submit Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default FormPage;
