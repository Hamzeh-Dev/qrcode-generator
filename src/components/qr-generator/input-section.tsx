"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QuickTemplates } from "./quick-templates";
import { TextInput } from "./text-input";
import { LogoUpload } from "./logo-upload";
import { CustomizationOptions } from "./customization-options";
import type { InputSectionProps, QRCodeSettingsProps } from "@/lib/types/qr-generator";

export function InputSection({ settings, onSettingsChange }: InputSectionProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Generate QR Code</CardTitle>
                <CardDescription>Enter your text, URL, or any data to generate a QR code</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <QuickTemplates onTemplateSelect={(text) => onSettingsChange({ text })} />

                <TextInput value={settings.text} onChange={(text) => onSettingsChange({ text })} />

                <LogoUpload
                    logoImage={settings.logoImage}
                    logoSize={settings.logoSize}
                    onLogoChange={(logoImage) => onSettingsChange({ logoImage })}
                    onLogoSizeChange={(logoSize) => onSettingsChange({ logoSize })}
                />

                <CustomizationOptions
                    size={settings.size}
                    bgColor={settings.bgColor}
                    fgColor={settings.fgColor}
                    errorLevel={settings.errorLevel}
                    onSizeChange={(size) => onSettingsChange({ size })}
                    onBgColorChange={(bgColor) => onSettingsChange({ bgColor })}
                    onFgColorChange={(fgColor) => onSettingsChange({ fgColor })}
                    onErrorLevelChange={(errorLevel) => onSettingsChange({ errorLevel })}
                />
            </CardContent>
        </Card>
    )
}
