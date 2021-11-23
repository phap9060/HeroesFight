import * as React from "react";
import { Button, Img, Div1, Ul, Li, P } from "./style";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { ModalContext } from "../../context/context";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [loading, setLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const ctx = React.useContext(ModalContext);

  const handleClickOpen = () => {
    setOpen(true);
    setLoading(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const morePower = () => {
    const total1 = Object.values(ctx.selectChamp[0].stats).reduce(
      (a, b) => a + b
    );
    const total2 = Object.values(ctx.selectChamp[1].stats).reduce(
      (a, b) => a + b
    );
    if (total1 > total2) {
      return total1;
    } else {
      return total2;
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Fight
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          FIGHT
        </BootstrapDialogTitle>
        {!loading && ctx.selectChamp.length === 2 && (
          <DialogContent dividers>
            {ctx.selectChamp.map((champion) => (
              <Typography gutterBottom>
                <Div1>
                  <Img src={champion.image} />
                  <Ul>
                    {Object.keys(champion.stats).map((stats) => (
                      <Li>
                        {stats.charAt(0).toUpperCase() + stats.slice(1)}:{" "}
                        {champion.stats[stats]}
                      </Li>
                    ))}
                    <Li>
                      TotalPower:{" "}
                      {Object.values(champion.stats).reduce((a, b) => a + b)}
                    </Li>
                  </Ul>
                  {Object.values(champion.stats).reduce((a, b) => a + b) ===
                    morePower() && <P>WINNER</P>}
                </Div1>
              </Typography>
            ))}
          </DialogContent>
        )}
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
