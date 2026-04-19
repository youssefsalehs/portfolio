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
          mb: 2,
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
            fontSize: { xs: "1.8em", lg: "2.6em" },
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
            mt: 1,
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

export function SubHeader({ title }) {
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mb: 2,
          px: 4,
          py: 4,
          width: "fit-content",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            right: 15,
            bottom: 0,
            width: 40,
            height: 40,
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
            width: 40,
            height: 40,
            borderLeft: 2,
            borderTop: 2,
            borderColor: "text.primary",
          }}
        />

        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5em", lg: "2em" },
            textAlign: "center",
            zIndex: 1,
          }}
        >
          {title}
        </Typography>
      </Box>
    </div>
  );
}
