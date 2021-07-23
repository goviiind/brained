import React, { useEffect } from "react";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import { getProfile } from "../../../../redux/actions/profileActions";
import { connect } from "react-redux";


const Table = ({ auth, profiles, getProfile }) => {
  const userId = auth?.user?._id;

  useEffect(() => {
    getProfile(userId);
  }, []);

  return (
    <table>
      <TableHeading />

      {auth?.user?.skills.map((skill, index) => {
        return (
          <TableRow
            srNo={index + 1}
            technology={skill.technology}
            experience={skill.experience}
            updatedAt={skill.date}
          />
        );
      })}
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
