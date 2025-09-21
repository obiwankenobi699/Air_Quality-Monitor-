import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, LogIn } from "lucide-react";
import sideImage from "./logo.jpg";

export interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Logged in", description: "Demo login successful." });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Visual side */}
          <div className="relative hidden md:block min-h-[380px]">
            <img
              src={sideImage}
              alt="OceanSutra"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
            <div className="absolute left-4 right-4 bottom-4 text-white/90">
              <div className="inline-flex items-center px-2 py-1 rounded-full bg-white/15 text-xs">
                <LogIn className="mr-1 h-3.5 w-3.5" /> Welcome back
              </div>
              <p className="mt-2 text-sm text-white/80">
                Sign in to continue your blue carbon projects.
              </p>
            </div>
          </div>

          {/* Form side */}
          <div className="p-6 md:p-8">
            <DialogHeader className="space-y-1">
              <DialogTitle className="text-2xl tracking-tight">
                Sign in
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Enter your credentials to access the dashboard.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required placeholder="••••••••" />
              </div>

              <div className="flex items-center justify-between text-sm">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" className="w-full rounded-xl">
                Start creating <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
