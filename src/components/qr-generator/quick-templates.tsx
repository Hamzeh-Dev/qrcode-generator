"use client"

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link, Mail, Smartphone, Wifi } from "lucide-react";
import type { QuickTemplate } from "@/lib/types/qr-generator";
import { useState } from "react";

export function QuickTemplates({ onTemplateSelect }: { onTemplateSelect: (placeholder: string) => void }) {
    const templates: QuickTemplate[] = [
        { icon: Link, label: "Website URL", placeholder: "https://example.com", note: "Replace example.com with your URL", },
        { icon: Mail, label: "Email", placeholder: "mailto:example@email.com", note: "Replace example@email.com with your Email", },
        { icon: Smartphone, label: "Phone", placeholder: "tel:+1234567890", note: "Replace +1234567890 with your Number" },
        { icon: Wifi, label: "WiFi", placeholder: "WIFI:T:WPA;S:NetworkName;P:Password;;", note: "Replace NetworkName with your Network Name and Password with your Password" },
    ];

    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    return (
        <div>
            <Label className="text-sm font-medium mb-3 block">Quick Templates</Label>
            <div className="grid grid-cols-2 gap-2">
                {templates.map((template, index) => (
                    <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            onTemplateSelect(template.placeholder);
                            setCurrentIndex(index);
                        }}
                        className="justify-start gap-2"
                    >
                        <template.icon className="h-4 w-4" />
                        {template.label}
                    </Button>
                ))}
            </div>
            <Label className="text-sm mt-3 block">{(currentIndex !== null) ? templates[currentIndex]?.note : ""}</Label>
        </div>
    )
}
