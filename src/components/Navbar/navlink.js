import { Box, Typography } from "@mui/material";
export default function NavLink({ link }) {
  return (
    <Box
      component="li"
      sx={{
        position: "relative",

        listStyle: "none",
        cursor: "pointer",
        "&:hover": {
          color: "text.main",
        },
      }}
    >
      <Typography
        component={"a"}
        href={`#${link[0].toLowerCase() + link.slice(1)}`}
        sx={{
          px: 2,
          py: 1,
          borderRadius: 1,
          zIndex: 1,
          display: "block",
          w: "100%",
          position: "relative",
          fontWeight: 800,
          bgcolor: "transparent",
          transition: "background-color 0.3s",
          "&:hover": {
            bgcolor: "background.tertiary",
          },
        }}
      >
        {link}
      </Typography>

      <Box
        className="underline"
        sx={{
          position: "absolute",
          bottom: -2,
          left: 0,
          height: 3,
          width: 0,
          bgcolor: "primary.main",
          borderRadius: 1.5,
          transition: "width 0.3s",
        }}
      />
    </Box>
  );
}
