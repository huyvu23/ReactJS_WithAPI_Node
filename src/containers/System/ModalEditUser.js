import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export default function ModalEditUser(props) {
  const { isOpen, toggleIsModal, handleSaveUser, userEdit } = props;

  const [id, setId] = useState();
  const [email, setEmail] = useState();
  const [passWord, setPassWord] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    setId(userEdit?.id);
    setEmail(userEdit?.email);
    setPassWord("hardcode");
    setFirstName(userEdit?.firstName);
    setLastName(userEdit?.lastName);
    setAddress(userEdit?.address);
  }, [userEdit?.id]);

  const update = () => {
    let model = {
      id,
      email,
      passWord,
      firstName,
      lastName,
      address,
    };
    if (!email || !passWord || !firstName || !lastName || !address) {
      alert("Missing params");
    } else {
      handleSaveUser(model);
    }
  };

  return (
    <>
      <Modal
        className="modal-user-container"
        isOpen={isOpen}
        toggle={toggleIsModal}
        size="lg"
        centered
      >
        <ModalHeader toggle={toggleIsModal}>Edit User</ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
              />
            </div>
            <div className="input-container">
              <label>Password:</label>
              <input
                type="password"
                value={passWord}
                onChange={(e) => setPassWord(e.target.value)}
                disabled
              />
            </div>
            <div className="input-container">
              <label>FirstName:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>LastName:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input-container max-width-input">
              <label>Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" className="px-3" onClick={update}>
            Update
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
