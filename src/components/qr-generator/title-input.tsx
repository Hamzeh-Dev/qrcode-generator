"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TitleInputProps {
    value: string,
    onChange: (value: string) => void,
}

export function TitleInput({ value, onChange }: TitleInputProps) {
    return (
        <div className="space-y-2">
            <Label htmlFor="qr-title">Title (Optional)</Label>
            <Input
                id="qr-title"
                placeholder="Enter a title to display under the QR code..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                maxLength={20}
                className="mt-1"
            />
            <p className="text-xs text-gray-500 mt-1">{value.length}/20 characters - Will appear under the QR code</p>
        </div>
    )
}
