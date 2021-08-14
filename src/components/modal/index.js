// import React from 'react';
// import {Button,Modal} from "react-bootstrap";
// // import Modal from '@material-ui/core/Modal';

// export function CustomModal(props){
//     return (
//       <Modal show={props.modalProps.show} onHide={props.modalProps.handleClose} >
//         <Modal.Header closeButton>
//           <Modal.Title>{props.modalProps.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>{props.children}</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" size="sm" onClick={props.modalProps.handleClose}>
//             Close
//           </Button>
//           <Button variant="danger" size="sm" onClick={props.modalProps.handleAccept}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//   )
// }

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';

const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Headtext = styled.div`
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
  font-family: LatoBold;
  font-size: 16px;
  color: rgb(82 148 93);
  line-height: 16px;
  font-weight: bold;
`;

const HeadCloseWrapper = styled.div`
  color: rgba(21,27,57,.6);
  cursor:pointer
`;

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const ButtonWrappers = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const styles = (theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    "max-height":"70vh",
    overflowY:"auto"

    // borderTop: '4px solid green',
    // borderBottom: '4px solid yellow',
  },
});


class CustomModal extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const {  open, model_name,handleClose,handleAccept } = this.props.modalProps;
    const {classes, children} = this.props;
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal-class"
      >
        <div>
        <div style={getModalStyle()}  className={classes.paper} >
            <HeadWrapper>
              <Headtext>{model_name}</Headtext>
              <HeadCloseWrapper>
                <CloseIcon onClick={handleClose} />
              </HeadCloseWrapper>
            </HeadWrapper>
            <div style={{padding: '20px'}}> 
              {children}
            </div>
            <ButtonWrappers>
              <Button style={{marginRight:'12px'}} className={classes.cancelButton} variant="contained" onClick={handleClose}>Cancel</Button>
              <Button variant="contained" color="primary" onClick={handleAccept}>
                Save
              </Button>
            </ButtonWrappers>
        </div>
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(CustomModal);