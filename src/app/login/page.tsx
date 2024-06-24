"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Page() {
  const LoginWithGoogle = () => {
    // window.open(`${process.env.REACT_APP_SERVER_URL}/auth/google`, "_self");
    window.open(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`, "_self");
  };
  return (
    <Card className="mx-auto p-8 w-[600px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">
          You need to login to checkout.
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-4">
        <button
          type="button"
          className="login-with-google-btn"
          onClick={LoginWithGoogle}
        >
          Sign in with Google
        </button>
      </CardContent>
    </Card>
  );
}
