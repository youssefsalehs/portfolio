"use client";

import { Modal, Box, Typography, Button, Stack } from "@mui/material";

export default function DeleteModal({ open, onClose, onConfirm }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: 500,
          bgcolor: "background.paper",
          p: 3,
          borderRadius: 2,
          boxShadow: 24,
        }}
      >
        <Typography variant="h6" mb={2}>
          Are you sure you want to delete?
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={onConfirm}>
            Delete
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
