"use client";

import { useEffect, useRef } from "react";

export default function AdminPage() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    (async () => {
      try {
        const CMS = (await import("decap-cms-app")).default;
        CMS.init();
      } catch (error) {
        console.error("Failed to initialize Decap CMS:", error);
      }
    })();
  }, []);

  return (
    <div id="nc-root">
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", (user) => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `,
        }}
      />
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
    </div>
  );
}
