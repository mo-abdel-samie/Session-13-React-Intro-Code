import React, { useState } from "react";
import { Header } from "../components/Header";
import { Container } from "../components/Container";
import { Loading } from "../components/Loading";
import { FormAddUser } from "../components/FormAddUser";

export const Home = () => {
  // let loading = true;
  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState([
    {
      name: "A. Samie",
      title: "FS",
      task: true,
    },
    {
      name: "Jo",
      title: "FS",
      task: false,
    },
    {
      name: "Mo",
      title: "FS",
      task: true,
    },
    {
      name: "Yara",
      title: "FS",
      task: false,
    },
    {
      name: "Fatma",
      title: "Engineer",
      task: true,
    },
  ]);

  setTimeout(() => {
    console.log("true");
    // loading = false;
    setLoading(false);
  }, 2000);

  const Content = () =>
    users.map((user, i) => (
      <UserCard key={i} name={user.name} title={user.title} task={user.task} />
    ));

  const Check = () => <span>✅</span>;

  const UserCard = ({ name, title, task }) => {
    let fullName = task ? "✅" + name : name;

    if (task) {
      return (
        <div className="card my-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">
              {task && <Check />}
              {name}
            </h5>
            <h5 className="card-title">{fullName}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{title}</h6>
          </div>
        </div>
      );
    }

    return (
      <div className="card my-3 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">
            {task && <Check />}
            {name}
          </h5>
          <h5 className="card-title">{fullName}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{title}</h6>
        </div>
      </div>
    );
  };

  const editeUsers = (user) => {
    setUsers([...users, user]);
  };

  return (
    <React.Fragment>
      <Header title="Home Page 101" description="This is my Home page" />

      <main>
        <section>
          <Container>
            <div className="row">
              <div className="col-md-6">
                <h2>Developers Data:</h2>
                {loading ? <Loading /> : <Content />}
              </div>
              <div className="col-md-6">
                <h2>Add new developer</h2>
                <FormAddUser userHandler={editeUsers} />
              </div>
            </div>
          </Container>
        </section>
      </main>
    </React.Fragment>
  );
};
