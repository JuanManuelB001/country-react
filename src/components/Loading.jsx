import "../styles/loading.css";

export function Loading() {
  return (
    <div>
      <div className="world"></div>
      <p>
        <span className="loading">cargando...</span>
      </p>
    </div>
  );
}
