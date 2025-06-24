"use client"

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link, Mail, Smartphone, Wifi } from "lucide-react";
import type { QuickTemplate } from "@/lib/types/qr-generator";

export function QuickTemplates({ onTemplateSelect }: { onTemplateSelect: (placeholder: string) => void }) {
    const templates: QuickTemplate[] = [
        { icon: Link, label: "Website URL", placeholder: "https://example.com" },
        { icon: Mail, label: "Email", placeholder: "mailto:example@email.com" },
        { icon: Smartphone, label: "Phone", placeholder: "tel:+1234567890" },
        { icon: Wifi, label: "WiFi", placeholder: "WIFI:T:WPA;S:NetworkName;P:Password;;" },
    ];

    return (
        <div>
            <Label className="text-sm font-medium mb-3 block">Quick Templates</Label>
            <div className="grid grid-cols-2 gap-2">
                {templates.map((template, index) => (
                    <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => onTemplateSelect(template.placeholder)}
                        className="justify-start gap-2"
                    >
                        <template.icon className="h-4 w-4" />
                        {template.label}
                    </Button>
                ))}
            </div>
        </div>
    )
}
