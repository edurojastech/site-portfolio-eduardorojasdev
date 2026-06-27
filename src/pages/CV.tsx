import { useEffect } from "react";

const CV_URL = "https://dev.eduardorojas.com.br/Curriculo_Eduardo_Rojas.pdf";

const CV = () => {
  useEffect(() => {
    document.title = "Curriculo Eduardo Rojas";
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, background: "#0B1424" }}>
      <iframe
        src={CV_URL}
        title="Curriculo Eduardo Rojas"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
};

export default CV;
