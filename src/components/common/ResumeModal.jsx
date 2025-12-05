import React from "react";

const ResumeModal = ({ isOpen, onClose, url }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        aria-hidden="true"
        onClick={onClose}
      />

      <div className="relative w-[90%] md:w-3/4 lg:w-2/3 h-[80%] bg-white dark:bg-[#0b1220] rounded-xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between p-3 border-b dark:border-gray-800">
          <h3 className="text-lg font-semibold">Resume Preview</h3>
          <button
            onClick={onClose}
            aria-label="Close resume preview"
            className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded"
          >
            Close
          </button>
        </div>

        <div className="w-full h-full">
          <iframe
            title="Resume Preview"
            src={url}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
