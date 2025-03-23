import React, { useState } from "react";
import styled from "styled-components";

// 🎨 Styled Components
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/staffl.jpeg") no-repeat center center/cover;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px); /* Adjust blur strength */
  background: rgba(255, 255, 255, 0.1); /* Slight tint */
`;

const LoginCard = styled.div`
  position: relative;
  background: rgba(245, 247, 248, 0.45);
  padding: 2rem;
  border-radius: 10px;
  backdrop-filter: blur(15px);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 300px;
  z-index: 1; /* Ensures card appears above overlay */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s;
  &:hover {
    background: #0056b3;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: black;
  font-size: 0.9rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// 🎨 Main Component
const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in as: ${username}`);
  };

  return (
    <Container>
      <Overlay /> {/* Covers entire page with blur */}
      <LoginCard>
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Links>
            <Link href="#">Forgot Password?</Link>
            
          </Links>
          <LoginButton type="submit">Login</LoginButton>
        </form>
      </LoginCard>
    </Container>
  );
};

export default AdminLogin;
