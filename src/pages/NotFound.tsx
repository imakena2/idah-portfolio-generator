
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4">
      <div className="text-center max-w-md bg-white p-8 rounded-xl shadow-lg border border-blue-100">
        <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Page Not Found</h1>
        <p className="text-lg text-slate-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
