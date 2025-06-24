"use client"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface TextInputProps {
    value: string,
    onChange: (value: string) => void,
}

export function TextInput({
    value,
    onChange
}: TextInputProps) {
    return (
        <div>
            <Label htmlFor="qr-text">Text or URL</Label>
            <Textarea
                id="qr-text"
                placeholder="Enter text, URL, email, phone number, or any data..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="min-h-[100px] resize-none"
            />
        </div>
    )
}
