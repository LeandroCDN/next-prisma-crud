import CreateNewUser from "@/components/CreateNewUser";
import UserForm from "@/components/UserForm";

async function loadUsers() {
  const res = await fetch("http://localhost:3000/api/register");
  const data = await res.json;
  console.log(data);
}

async function Homepage() {
  const users = await loadUsers();
  console.log(users);
  return (
    <div className="flex justify-center align-center">
      {/* //<CreateNewUser /> */}
      <UserForm />
    </div>
  );
}

export default Homepage;
