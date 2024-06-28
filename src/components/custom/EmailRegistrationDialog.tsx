import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

type Props = {
  handleFormSubmit: (email: string) => void;
  isRegistered: boolean;
  isLoading: boolean;
};

const EmailRegistrationDialog = ({ handleFormSubmit, isRegistered, isLoading }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isRegistered) {
      setOpen(false);
    }
  }, [isRegistered]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    handleFormSubmit(email);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button className="border border-slate-400 text-slate-400 hover:bg-slate-200 hover:text-slate-950 font-semibold">
          Register
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register Email</DialogTitle>
          <DialogDescription>
            Register a email address for your profile. Click submit when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-6 relative">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right font-medium">
                Email:
              </Label>
              <Input
                onFocus={() => setError("")}
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3 font-medium"
              />
              {error && (
                <p className="absolute -bottom-0 pl-4 text-xs w-full text-red-500 col-span-4 text-center">
                  * {error}
                </p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? <div className="loader w-6 h-6"></div> : (
                <span>Submit Email</span>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailRegistrationDialog;
