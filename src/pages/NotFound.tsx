
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 px-4">
      <div className="text-center max-w-md bg-white p-8 rounded-xl shadow-lg border border-purple-100">
        <div className="text-8xl font-bold text-purple-600 mb-4">404</div>
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Page Not Found</h1>
        <p className="text-lg text-slate-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
