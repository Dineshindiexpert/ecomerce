import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactMarkdown from "react-markdown";
import { DropdownItem } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";

const Dashboard = () => {
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const summaryRef = useRef(null);

  const handleSummarize = async () => {
    setLoading(true);

    // Future FastAPI call
    // const res = await fetch("/api/summarize", {method:"POST"})

    setTimeout(() => {
      const dummySummary = `# Meeting Summary

## Key Points
- Introduction to **AI Note Taking Agent**
- Discussion about **Falcon LLM Integration**
- Frontend built using **React + Bootstrap**

## Action Items
- Complete frontend tonight
- Integrate FastAPI backend
- Deploy on cloud

## Notes
AI assistant will convert transcripts into structured markdown automatically.
`;

      setSummary(dummySummary);
      setLoading(false);

      setTimeout(() => {
        summaryRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }, 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([summary], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "meeting-summary.md";
    a.click();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
  };

  const clearTranscript = () => {
    setTranscript("");
    setSummary("");
  };

  const wordCount = transcript.trim()
    ? transcript.trim().split(/\s+/).length
    : 0;

  return (
    <div className="container-fluid bg-dark text-light min-vh-100 p-4">

      {/* Header */}
      <header className="text-center mb-5">
        <h1 className="display-5 fw-bold text-info">
          AI Note-Taking Assistant
        </h1>
        <p className="lead text-secondary">
          Convert messy transcripts into clean Markdown summaries
        </p>
      </header>

      <div className="row g-4">

        {/* LEFT SIDE */}
        <div className="col-lg-6">
          <div className="card bg-secondary text-white shadow-lg border-0">

            <div className="card-header bg-info text-dark fw-bold d-flex justify-content-between">
              Raw Meeting Transcript
              <span className="badge bg-dark">
                {wordCount} words
              </span>
            </div>

            <div className="card-body">

              <textarea
                className="form-control bg-dark text-white border-0"
                rows="15"
                placeholder="Paste meeting transcript here..."
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
              />

              <div className="d-flex gap-2 mt-3">

                <button
                  className="btn btn-info flex-fill fw-bold"
                  onClick={handleSummarize}
                  disabled={loading || !transcript}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Generating Summary...
                    </>
                  ) : (
                    "⚡ Summarize with Falcon AI"
                  )}
                </button>

                <button
                  className="btn btn-outline-light"
                  onClick={clearTranscript}
                >
                  Clear
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-6">

          <div className="card bg-secondary text-white shadow-lg h-100 border-0">

            <div className="card-header bg-success fw-bold d-flex justify-content-between">
              Markdown Summary
              <button
                className="btn btn-sm btn-light"
                onClick={handleCopy}
                disabled={!summary}
              >
                Copy
              </button>
            </div>

            <div
              ref={summaryRef}
              className="card-body bg-dark m-2 rounded overflow-auto"
              style={{ maxHeight: "450px" }}
            >
              {summary ? (
                <div className="p-2">
                  <ReactMarkdown>{summary}</ReactMarkdown>
                </div>
              ) : (
                <div className="text-center text-secondary mt-5">
                  <h1>🤖</h1>
                  <p>Generated summary will appear here</p>
                </div>
              )}
            </div>

            <div className="card-footer border-0 bg-transparent">

              <button
                className="btn btn-outline-light w-100"
                onClick={handleDownload}
                disabled={!summary}
              >
             <Download/> Markdown
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;