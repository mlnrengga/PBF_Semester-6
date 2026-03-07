import { useRouter } from "next/router";

const CategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Halaman Category</h1>
      <h2>URL Parameters:</h2>
      {slug && Array.isArray(slug) ? (
        <ul>
          {slug.map((param, index) => (
            <li key={index}>
              Parameter {index + 1}: <strong>{param}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>No parameters found</p>
      )}
    </div>
  );
};

export default CategoryPage;
