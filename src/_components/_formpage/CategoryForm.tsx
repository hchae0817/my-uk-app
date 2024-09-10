// CategoryComponent.tsx
import React, { useState } from 'react';
import { Box, MenuItem, Select, Typography, TextField } from '@mui/material';
import { categories } from '../data/categories';
import { Category } from '../_homepage/_body/IBody';

const CategoryComponent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
  const [otherDescription, setOtherDescription] = useState<string>('');

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value as string;

    if (selectedValue === 'other') {
      setIsOtherSelected(true);
      setSelectedCategory(null);
    } else {
      const selected = categories.find(cat => cat.name === selectedValue);
      setSelectedCategory(selected || null);
      setIsOtherSelected(false);  // Reset the "Other" selection
    }
  };

  const handleOtherInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtherDescription(event.target.value);
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
          <Typography sx={{ marginTop: '10px' }}>
            Form of {selectedCategory.displayName}
          </Typography>
        </Box>
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
            sx={{ width: '300px', marginBottom: '20px' }}
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

export default CategoryComponent;
