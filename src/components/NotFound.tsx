import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-24 h-screen px-6 text-center space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">Page Not Found</h1>
      <p className="text-muted-foreground">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Button variant="outline" onClick={() => navigate("/")}>
        <Home className="mr-2 h-5 w-5" />
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
