import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Disclaimer: The results provided by the Merit App are for
          informational purposes only.
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Merit App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
