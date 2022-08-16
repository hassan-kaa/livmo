import { Button } from "@mui/material";
import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
function FileUploader({ onClickFunction }) {
  const hiddenFileInput = useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
  };
  return (
    <React.Fragment>
      <AddImage onClick={handleClick} color="primary">
        <AddIcon sx={{ fontSize: 80 }} />
        <h3>Add image</h3>
      </AddImage>
      <input
        ref={hiddenFileInput}
        onChange={onClickFunction}
        type="file"
        hidden
        multiple
      />
    </React.Fragment>
  );
}
const AddImage = styled(Button)`
  /* border: 4px #e42651 dashed; */
  width: 100%;
  border-radius: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23E42651FF' stroke-width='4' stroke-dasharray='30%2c30' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
`;

export default FileUploader;
