import React from "react";
import { useParams } from "react-router-dom";
import { Container, Section } from "../../styles/GlobalStyles";
import Title from "../../ui/typography/Title";
import Feed from "../Feed/Feed";

const UserProfile = () => {
  const { user } = useParams();

  return (
    <div>
      <Container>
        <Title size="3.875rem" margin="2.5rem 0">
          {user}
        </Title>
        <Feed user={user} />
      </Container>
    </div>
  );
};

export default UserProfile;
