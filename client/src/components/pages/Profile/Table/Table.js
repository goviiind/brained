import React, { useEffect } from "react";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import { getProfile } from "../../../../redux/actions/profileActions";
import { connect } from "react-redux";

const Table = ({ auth, profiles, getProfile }) => {
  useEffect(() => {
    getProfile(auth?.state?.user?._id);
  }, []);

  console.log(profiles);

  return (
    <table>
      <TableHeading />
      <TableRow auth={auth} profiles={profiles} />
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    profiles: state.profile,
  };
};

export default connect(mapStateToProps, { getProfile })(Table);
