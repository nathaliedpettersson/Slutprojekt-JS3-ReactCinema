import React from "react";
import Modal from "../Modal/Modal";
export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showModal: false,
      modalMessage: "",
    };
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const usersInStorage = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : [];

    const isEmailValid = usersInStorage.find((storedEmail) => {
      const emailExist = this.state.email === storedEmail.email;
      this.setState({
        showModal: true,
        modalMessage: "Choose other email address.",
      });
      return emailExist;
    });

    if (!isEmailValid) {
      usersInStorage.push(this.state);
      localStorage.setItem("user", JSON.stringify(usersInStorage));
      this.setState({
        showModal: true,
        modalMessage: "Welcome! You are signed up.",
      });

      this.state.email = "";
      this.state.password = "";
    }
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="form-container">
        <h3 className="form-header">New here? Sign up and start adding movies to your profile!</h3>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />
          <input className="submit-btn" type="submit" value="Sign up" />
        </form>
        <Modal
          show={this.state.showModal}
          modalMessage={this.state.modalMessage}
          handleClick={this.hideModal}
        ></Modal>
      </div>
    );
  }
}
