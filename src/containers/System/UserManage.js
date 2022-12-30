import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManager.scss";
import { getAllUsers } from "../../services/userService";
import ModalUser from "./ModalUser";

function UserManage(props) {
  const [arrUsers, setArrUsers] = useState([]);
  const [isOpenModalUser, setIsOpenModalUser] = useState(false);

  useEffect(() => {
    getListUsers();
  }, []);

  const getListUsers = async () => {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      setArrUsers(response.users);
    }
  };

  const toggleIsModal = () => {
    setIsOpenModalUser(!isOpenModalUser);
  };

  const handleAddNewUser = () => {
    setIsOpenModalUser(true);
  };

  return (
    <>
      <div className="users-container">
        <ModalUser isOpen={isOpenModalUser} toggleIsModal={toggleIsModal} />
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
                        <button className="btn-edit">
                          <i className="fas fa-pencil-alt" />
                        </button>
                        <button className="btn-delete">
                          <i className="fas - fa-trash" />
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
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
