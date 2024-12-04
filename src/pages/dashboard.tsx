export default function Dashboard() {
  const handleData = async () => {
    const data = await fetch("./data/products.json");
  };

  return <div className="bg-white">Dashboard Page</div>;
}
