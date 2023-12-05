import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
function Account() {
  const { userId } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
    console.log(account)
    console.log(process.env.DB_CONNECTION_STRING)
  };

  const save = async () => {
    await client.updateUser(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/kanbas/signin");
  };


  useEffect(() => {
    if (userId) {
      findUserById(userId);
    }
    fetchAccount();
  }, []);

  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input className="form-control" value={account.password}
            onChange={(e) => setAccount({
              ...account,
              password: e.target.value
            })} />
          <input className="form-control" value={account.firstName}
            onChange={(e) => setAccount({
              ...account,
              firstName: e.target.value
            })} />
          <input className="form-control" value={account.lastName}
            onChange={(e) => setAccount({
              ...account,
              lastName: e.target.value
            })} />
          <input className="form-control" value={account.dob}
            onChange={(e) => setAccount({
              ...account,
              dob: e.target.value
            })} />
          <input className="form-control" value={account.email}
            onChange={(e) => setAccount({
              ...account,
              email: e.target.value
            })} />
          <select className="form-control" onChange={(e) => setAccount({
            ...account,
            role: e.target.value
          })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <div className="d-flex flex-column">
            <button className="btn btn-primary w-25" onClick={save}>
              Save
            </button>
            <Link to="/kanbas/users" className="btn btn-warning w-25">
              Users
            </Link>
            <button className="btn btn-danger w-25" onClick={signout}>
              Signout
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
export default Account;