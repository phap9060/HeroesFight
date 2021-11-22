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
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const ctx = React.useContext(ModalContext);

  const handleClickOpen = () => {
    setOpen(true);
    setLoading(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const totalPower1 = () => {
    let total =
      ctx.power1[0][0] +
      ctx.power1[0][1] +
      ctx.power1[0][2] +
      ctx.power1[0][3] +
      ctx.power1[0][4] +
      ctx.power1[0][5];
    return total;
  };
  const totalPower2 = () => {
    let total =
      ctx.power2[0][0] +
      ctx.power2[0][1] +
      ctx.power2[0][2] +
      ctx.power2[0][3] +
      ctx.power2[0][4] +
      ctx.power2[0][5];
    return total;
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
        {loading && (
          <DialogContent dividers>
            <Typography gutterBottom>
              <Div1>
                <Img src={ctx.selectChamp[0]} />
                <Ul>
                  <Li>Intelligence:{ctx.power1[0][0]}</Li>
                  <Li>Strength:{ctx.power1[0][1]}</Li>
                  <Li>Speed:{ctx.power1[0][2]}</Li>
                  <Li>Durability:{ctx.power1[0][3]}</Li>
                  <Li>Power:{ctx.power1[0][4]}</Li>
                  <Li>Combat:{ctx.power1[0][5]}</Li>
                  <Li>TotalPower:{totalPower1()}</Li>
                </Ul>
                {totalPower1() > totalPower2() && <P> WINNER </P>}
              </Div1>
            </Typography>

            <Typography gutterBottom>
              <Div1>
                <Img src={ctx.selectChamp[1]} />
                <Ul>
                  <Li>Intelligence:{ctx.power2[0][0]}</Li>
                  <Li>Strength:{ctx.power2[0][1]}</Li>
                  <Li>Speed:{ctx.power2[0][2]}</Li>
                  <Li>Durability:{ctx.power2[0][3]}</Li>
                  <Li>Power:{ctx.power2[0][4]}</Li>
                  <Li>Combat:{ctx.power2[0][5]}</Li>
                  <Li>TotalPower:{totalPower2()}</Li>
                </Ul>
                {totalPower1() < totalPower2() && <P> WINNER </P>}
              </Div1>
            </Typography>
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
