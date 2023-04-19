import React from "react";
import { pdf, Document, Page, StyleSheet } from "@react-pdf/renderer";
import Component from "./Component"; // Import your existing component

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

const PDFComponent = () => (
  <Document>
    <Page size="A4" style={styles.container}>
      <Component />
    </Page>
  </Document>
);

const App = () => {
  const handleDownload = async () => {
    const blob = await pdf(<PDFComponent />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "component.pdf";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Component />
      <button onClick={handleDownload}>Download Component as PDF</button>
    </div>
  );
};

export default App;