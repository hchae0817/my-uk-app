// CategoryComponent.tsx
import React, { useState } from 'react';
import { Box, MenuItem, Select, Typography, TextField } from '@mui/material';
import { categories } from '../data/categories';
import { Category } from '../_homepage/_body/IBody';

// TODO: Add this to category JSON
const sampleMessages: Record<string, string> = {
  musical: "I would like to enquire about a musical performance...",
  landmarks: "I would like to know more about the landmark details...",
  restaurant: "I would like to ask about the dining options at the restaurant...",
  alcohol: "I have questions about local alcoholic beverages...",
  view: "I'd like to hear about the scenic viewpoints available...",
  // Add more categories and their corresponding messages as needed
};


const CategoryForm: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
  const [otherDescription, setOtherDescription] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value as string;

    if (selectedValue === 'other') {
      setIsOtherSelected(true);
      setSelectedCategory(null);
      setMessage("")
    } else {
      const selected = categories.find(cat => cat.name === selectedValue);
      setSelectedCategory(selected || null);
      setIsOtherSelected(false);  // Reset the "Other" selection
      setMessage(sampleMessages[selectedValue] || '');
    }
  };

  const handleOtherInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtherDescription(event.target.value);
  };
  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value); 
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
      }}
    >
      {/* Dropdown */}
      <Select
        value={selectedCategory ? selectedCategory.name : (isOtherSelected ? 'other' : '')}
        onChange={handleSelectChange}
        displayEmpty
        sx={{ marginBottom: '20px', width: '300px', fontSize: '16px' }}
      >
        <MenuItem value="">
          <em>Select a category</em>
        </MenuItem>
        {categories.map(category => (
          <MenuItem key={category.name} value={category.name}>
            {category.displayName}
          </MenuItem>
        ))}
        <MenuItem value="other">Other</MenuItem>
      </Select>

      {/* Dynamic Content */}
      {selectedCategory && (
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ marginBottom: '10px' }}>
            {selectedCategory.displayName}
          </Typography>
          {/* <Typography sx={{ marginTop: '10px' }}>
            Form of {selectedCategory.displayName}
          </Typography> */}
        </Box>
      )}

        {/* Message Input Field */}
        {selectedCategory && (
        <TextField
          label="Enquiry"
          variant="outlined"
          value={message}
          onChange={handleMessageChange}
          sx={{ marginTop: '20px', width: "100%" }}
          multiline
          rows={4}
          placeholder="Type your message here..."
        />
      )}

      {/* Display "Other" option */}
      {isOtherSelected && (
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ marginBottom: '10px' }}>
            Other Category
          </Typography>
          <TextField
            label="Enter description"
            variant="outlined"
            value={otherDescription}
            onChange={handleOtherInputChange}
            sx={{ marginTop: '20px', width: "100%" }}
          />
          {otherDescription && <Typography>{otherDescription}</Typography>}
        </Box>
      )}

      {!selectedCategory && !isOtherSelected && (
        <Typography>Please select a category</Typography>
      )}
    </Box>
  );
};

export default CategoryForm;
