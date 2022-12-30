import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
export default function ModalUser(props) {
  const { isOpen, toggleIsModal } = props;

  return (
    <>
      <Modal
        className="modal-user-container"
        isOpen={isOpen}
        toggle={toggleIsModal}
        size="lg"
        centered
      >
        <ModalHeader toggle={toggleIsModal}>Create a New User</ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email:</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label>Password:</label>
              <input type="password" />
            </div>
            <div className="input-container">
              <label>FirstName:</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label>LastName:</label>
              <input type="text" />
            </div>
            <div className="input-container max-width-input">
              <label>Address:</label>
              <input type="text" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" className="px-3">
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
