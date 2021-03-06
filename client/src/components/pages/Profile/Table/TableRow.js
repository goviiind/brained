import React, { useState } from "react";
import { Modal, ModalBody, InputGroup, Input } from "reactstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { deleteProfile } from "../../../../redux/actions/profileActions";
import { connect } from "react-redux";

const schema = yup.object().shape({
  technology: yup.string().required(),
  experience: yup.string().required(),
});

const TableRow = ({ srNo, technology, experience, updatedAt }) => {
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
    <>
      <tr>
        <td>{srNo}</td>
        <td>{technology}</td>
        <td>{experience} Years</td>
        <td>{updatedAt}</td>
        <td>
          <i class="fas fa-edit" onClick={toggle}></i>
          <i class="fas fa-trash-alt"></i>
        </td>
      </tr>
      <Modal isOpen={modal} centered toggle={toggle}>
        <ModalBody>
          <h6>Edit Technology</h6>
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
    </>
  );
};

export default TableRow;
