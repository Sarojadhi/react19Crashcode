const AdminPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">Admin Panel</h1>
      <p className="mt-4">Hello, {user?.username || "Admin"}!</p>
    </div>
  );
};

export default AdminPage;
