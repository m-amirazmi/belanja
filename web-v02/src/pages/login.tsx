import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useInitialPageName from "@/hooks/use-initial-page-name";
import useAuthStore from "@/store/auth-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address or password" }),
  password: z.string(),
});

export default function LoginPage() {
  useInitialPageName("Login");

  const navigate = useNavigate();
  const { setIsAuthenticate } = useAuthStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "demo@gmail.com",
      password: "123456",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsAuthenticate(true);
    navigate({ to: "/" });
  };

  return (
    <>
      <h1 className="text-3xl">Welcome Back!</h1>
      <p className="text-muted-foreground">Enter your registered credentials</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-8 w-80 mt-8"
        >
          <div className="flex flex-col gap-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full text-base" type="submit">
            Login
          </Button>
        </form>
      </Form>
    </>
  );
}
