import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManager.scss";
import {
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
import { emitter } from "../../utils/emitter";

function UserManage(props) {
  const [arrUsers, setArrUsers] = useState([]);
  const [isOpenModalUser, setIsOpenModalUser] = useState(false);
  const [isOpenModalEditUser, setIsOpenModalEditUser] = useState(false);
  const [userEdit, setUserEdit] = useState();

  useEffect(() => {
    getListUsers();
  }, []);

  // Call API get list
  const getListUsers = async () => {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      setArrUsers(response.users);
    }
  };

  const toggleIsModal = () => {
    setIsOpenModalUser(!isOpenModalUser);
  };

  const toggleIsModalEdit = () => {
    setIsOpenModalEditUser(!isOpenModalEditUser);
  };

  const handleAddNewUser = () => {
    setIsOpenModalUser(true);
  };

  const handleUpdateUser = (dataUpdate) => {
    setUserEdit(dataUpdate);
    setIsOpenModalEditUser(true);
  };

  const handleDeleteUser = async (id) => {
    try {
      let response = await deleteUserService(id);
      if (response && response.message.errCode === 0) {
        alert(response.message.message);
        getListUsers();
      } else {
        alert(response.message.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveUser = async (data) => {
    try {
      let response = await editUserService(data);
      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        await getListUsers();
        setIsOpenModalEditUser(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (data) => {
    const { email, passWord, address, firstName, lastName } = data;
    try {
      let response = await createNewUserService({
        email: email,
        address: address,
        password: passWord,
        firstName: firstName,
        lastName: lastName,
      });

      if (response && response.message.errCode !== 0) {
        alert(response.message.message);
      } else {
        await getListUsers();
        setIsOpenModalUser(false);
        emitter.emit("EVENT_CLEAR_MODAL_DATA");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="users-container">
        <ModalUser
          isOpen={isOpenModalUser}
          toggleIsModal={toggleIsModal}
          createUser={createUser}
        />
        <ModalEditUser
          isOpen={isOpenModalEditUser}
          toggleIsModal={toggleIsModalEdit}
          userEdit={userEdit}
          handleSaveUser={handleSaveUser}
        />
        <div className="title text-center">Manage users with Huy</div>
        {/* Button */}
        <div className="mx-1">
          <button
            onClick={() => handleAddNewUser()}
            className="btn btn-primary px-3 "
          >
            <i className="fas fa-plus" /> Add new User
          </button>
        </div>
        {/* Table */}
        <div className="users-table mt-3 mx-1">
          <table id="customers">
            <tbody>
              <tr>
                <th>Email</th>
                <th>LastName</th>
                <th>FirstName</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
              {arrUsers &&
                arrUsers.map((user) => {
                  return (
                    <>
                      <tr key={user.id}>
                        <td>{user.email}</td>
                        <td>{user.lastName}</td>
                        <td>{user.firstName}</td>
                        <td>{user.address}</td>
                        <td>
                          <button
                            className="btn-edit"
                            onClick={() => handleUpdateUser(user)}
                          >
                            <i className="fas fa-pencil-alt" />
                          </button>
                          <button
                            className="btn-delete"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <i className="fas - fa-trash" />
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
