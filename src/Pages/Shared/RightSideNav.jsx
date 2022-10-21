import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import BrandCarousel from "./BrandCarousel";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="lg:position-fixed mt-2">
      <ButtonGroup className="mb-2" vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle className="m-2"></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub className="m-2"></FaGithub> Login with Github
        </Button>
      </ButtonGroup>
      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook className="m-2"></FaFacebook>Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaGithub className="m-2"></FaGithub>Github
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaInstagram className="m-2"></FaInstagram> Instagram
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter className="m-2"></FaTwitter>Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch className="m-2"></FaTwitch>Twitch
          </ListGroup.Item>
        </ListGroup>
      </div>
      <BrandCarousel></BrandCarousel>
    </div>
  );
};

export default RightSideNav;
