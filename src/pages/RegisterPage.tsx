import { Button, Container, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import { Page } from "../models/page.ts";
import { postRegister } from "../api/user.ts";
import { ChatPage } from "./ChatPage.tsx";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { setUser } from "../slice/userSlice.ts";
import { useAppDispatch } from "../store/hooks.ts";

export const RegisterPage: Page = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mutation = useMutation({
    mutationFn: postRegister,
    onSuccess: (data) => {
      if (data) {
        dispatch(setUser(data));
        navigate(ChatPage.path);
      }
    },
  });

  const onSubmit = () => {
    if (inputRef.current) {
      mutation.mutate({ username: inputRef.current.value });
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" sx={{ margin: "15px" }}>
        Chat Login
      </Typography>
      <TextField
        sx={{ margin: "10px" }}
        label="Your username"
        inputRef={inputRef}
      />
      <Button sx={{ margin: "5px" }} onClick={onSubmit} type="submit">
        Login
      </Button>
    </Container>
  );
};

RegisterPage.path = "/register";
