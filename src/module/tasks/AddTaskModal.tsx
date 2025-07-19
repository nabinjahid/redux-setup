import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

export function AddTaskModal() {
  const form = useForm();
  const onSubmit = (data)=>{
    console.log(data);
    
  }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Add Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
          </DialogHeader>
          <DialogDescription className="sr-only">Fill up this form to add task</DialogDescription>

          <Form {...form}>
           <form onSubmit={form.handleSubmit(onSubmit)}>
             <FormField
              control={form.control}
              name="title"
              render={({field}) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Input {...field} value={field.value || ""}></Input>
                  </FormControl>
                </FormItem>
              )}
            />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
           </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  );
}
