import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext';

const Profile = () => {
const {token, userdetails } = useContext(DataContext);
return (
  <div className="">
    <h1 className="text-center text-decoration-underline bg-danger p-3 border border-black">
      Profile
    </h1>
    <div className=" mx-5 px-5">
      {" "}
      <table className="table table-hover border border-dark">
        <tbody>
          <tr class="table-warning">
            <td className="fs-3 fw-bold">Name :</td>
            <td className=" fs-3">{userdetails.name}</td>
          </tr>
          <tr class="table-success">
            <td className="fs-3 fw-bold">Email :</td>
            <td className="fs-3">{userdetails.email}</td>
          </tr>
          <tr class="table-danger">
            <td className="col-md-6 fs-3 fw-bold">Phonenumber :</td>
            <td className="col-md-4 fs-4">{userdetails.phonenumber}</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  </div>
);
}

export default Profile
