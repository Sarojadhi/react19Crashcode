const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4">Welcome, {user?.username || "User"}!</p>
    </div>
  );
};

export default Dashboard;
