"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center p-24 text-center bg-gray-900 text-white">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Critical Error</h2>
          <p className="mb-8 text-gray-400">
            {error.message || "A critical error occurred."}
          </p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
