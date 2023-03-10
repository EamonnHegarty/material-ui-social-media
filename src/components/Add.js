import { Fab, Tooltip } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
const Add = () => {
  return (
    <>
      <Tooltip title="Delete" sx={{ position: "fixed", bottom: "20" }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default Add;
