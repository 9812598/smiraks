"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import React from "react";

const regex =
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/gm;

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Введите имя",
  }),
  email: z.string().email({
    message: "Неправильная почта",
  }),
  tel: z.string().regex(regex, {
    message: "Неправильный телефон",
  }),
});

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

type Props = {
  text: string;
  className?: string;
};

export default function DialogBtn({ text, className }: Props) {
  const [open, setOpen] = React.useState(false);
  const [isSend, setIsSend] = React.useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      tel: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSend(true);
    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    form.reset();

    wait().then(() => {
      setOpen(false);
      setIsSend(false);
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className}>{text}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {isSend ? (
          <DialogHeader>
            <DialogTitle>Спасибо!</DialogTitle>
            <DialogDescription>
              Ваша заявка успешно отправлена
            </DialogDescription>
          </DialogHeader>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-6"
            >
              <DialogHeader>
                <DialogTitle>Smiraks</DialogTitle>
                <DialogDescription>
                  Наши менеджеры свяжутся с вами в ближайшее время
                </DialogDescription>
              </DialogHeader>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имя</FormLabel>
                    <FormControl>
                      <Input placeholder="Иванов Иван" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@email.ru" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Телефон</FormLabel>
                    <FormControl>
                      <Input placeholder="+7 999 999-99-99" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" variant="outline" size={"md"}>
                Отправить
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
