import { useEffect } from "react";

const CV_URL = "https://dev.eduardorojas.com.br/Curriculo_Eduardo_Rojas.pdf";

const CV = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Currículo Eduardo Rojas";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, background: "#0B1424" }}>
      <object
        data={CV_URL}
        type="application/pdf"
        style={{ width: "100%", height: "100%", border: "none" }}
      >
        <iframe
          src={CV_URL}
          title="Currículo Eduardo Rojas"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </object>
    </div>
  );
};

export default CV;
