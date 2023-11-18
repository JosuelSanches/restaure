"use client";

import* as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
    email: z.string({
        required_error: "Email is required."
    }).email({
        message: "Must be a valid email."
    }),
password: z.string({
    required_error: "Password is required."
}).min(7,{
    message: "Password must have at least 7 charaters"
}).max(12)
})

export function CreateAccountForm(){
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            email: "",
            password: "",
        }
    })

    return(
        <h1>Create AccountForm</h1>
    )
}