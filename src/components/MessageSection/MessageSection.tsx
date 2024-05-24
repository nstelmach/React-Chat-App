import { Box, Button, TextField, TextFieldProps } from "@mui/material";
import React, { FunctionComponent } from "react";

type MessageSectionProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  message: string;
  onChange: TextFieldProps["onChange"];
  onSend: () => void;
};

export const MessageSection: FunctionComponent<MessageSectionProps> = ({
  inputRef,
  message,
  onChange,
  onSend,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderTop: "1px solid #aaaaaa",
        padding: "10px",
      }}
    >
      <TextField
        sx={{ margin: "5px" }}
        id="outlined-basic"
        label="Type a message"
        variant="outlined"
        inputRef={inputRef}
        value={message}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSend();
        }}
        autoFocus
      />
      <Button
        variant="contained"
        sx={{ width: "100px", margin: "5px" }}
        onClick={onSend}
      >
        SEND
      </Button>
    </Box>
  );
};
