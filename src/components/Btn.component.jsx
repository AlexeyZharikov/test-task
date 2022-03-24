import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';

export default function Btn(props) {
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Box mb={1} mt={1}>
        <Button onClick={props.onClick} variant="outlined">{props.children}</Button>
      </Box>
    </Stack>

  );
}