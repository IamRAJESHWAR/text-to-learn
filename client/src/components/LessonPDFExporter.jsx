// PDF Exporter for lessons using html2canvas and jsPDF
// Install: npm install html2canvas jspdf
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const LessonPDFExporter = ({ children, fileName = 'lesson.pdf' }) => {
  const printRef = useRef();

  const handleDownload = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, { backgroundColor: '#fff' });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(fileName);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download as PDF</button>
      <div style={{ display: 'none' }}>
        <div ref={printRef}>{children}</div>
      </div>
    </div>
  );
};

export default LessonPDFExporter;
