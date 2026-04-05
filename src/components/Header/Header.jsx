import { Box, Typography } from "@mui/material";

export default function Header({ title, desc }) {
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mb: 5,
          px: 4,
          py: 2,
          width: "fit-content",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            right: 15,
            bottom: 0,
            width: 30,
            height: 30,
            borderRight: 2,
            borderBottom: 2,
            borderColor: "text.primary",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            left: 15,
            top: 0,
            width: 30,
            height: 30,
            borderLeft: 2,
            borderTop: 2,
            borderColor: "text.primary",
          }}
        />

        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2em", lg: "3em" },
            textAlign: "center",
            zIndex: 1,
            textTransform: "capitalize",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: ".8em", md: "1em" },
            maxWidth: 600,
            fontWeight: 600,
            mt: 2,
            color: "text.secondary",
            opacity: 0.8,
            zIndex: 1,
          }}
        >
          {desc}
        </Typography>
      </Box>
    </div>
  );
}
