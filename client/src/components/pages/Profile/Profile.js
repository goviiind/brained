import React, { useState } from "react";
import Table from "./Table/Table";
import "./profile.css";
import { Modal, ModalBody, InputGroup, Input } from "reactstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  technology: yup.string().required(),
  experience: yup.string().required(),
});
const Profile = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="profile-div">
      <div className="profile-header">
        <div>
          <h2>Hello, Govind Sharma! </h2>
          <h4> Welcome to your dashboard...</h4>
        </div>
        <div>
          <button onClick={toggle}>+ Add New Technology</button>
        </div>
      </div>

      <Modal isOpen={modal} centered toggle={toggle}>
        <ModalBody>
          <h6>Add New Technology</h6>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup className="my-3">
              <Input {...register("technology")} placeholder="Technologoy" />
            </InputGroup>
            <p className="error">{errors["technology"]?.message}</p>
            <InputGroup>
              <Input {...register("experience")} placeholder="Experience" />
            </InputGroup>
            <p className="error">{errors["experience"]?.message}</p>
            <button className="add-btn" type="submit">
              Add
            </button>
            <button className="cancel-btn" onClick={toggle}>
              Cancel
            </button>
          </form>
        </ModalBody>
      </Modal>

      <div className="profile-table">
        <Table />
      </div>
    </div>
  );
};

export default Profile;
