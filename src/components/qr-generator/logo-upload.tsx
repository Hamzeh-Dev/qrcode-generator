"use client"

import type React from "react";
import { useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { X, ImageIcon } from "lucide-react";
import { LogoUploadProps } from "@/lib/types/qr-generator";

export function LogoUpload({ logoImage, logoSize, onLogoChange, onLogoSizeChange }: LogoUploadProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (file) {
                if (file.size > 5 * 1024 * 1024) {
                    alert("Image size should be less than 5MB");
                    return;
                }

                const reader = new FileReader();
                reader.onload = (e) => {
                    onLogoChange(e.target?.result as string);
                }
                reader.readAsDataURL(file);
            }
        },
        [onLogoChange],
    )

    const removeImage = useCallback(() => {
        onLogoChange("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }, [onLogoChange]);

    return (
        <div>
        <Label className="text-sm font-medium mb-3 block">Logo/Image (Optional)</Label>
            <div className="space-y-3">
                {!logoImage ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            id="logo-upload"
                        />
                            <label htmlFor="logo-upload" className="cursor-pointer">
                            <ImageIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 mb-1">Click to upload logo</p>
                            <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
                        </label>
                    </div>
                ) : (
                <div className="relative">
                    <div className="border rounded-lg p-4 bg-gray-50">
                        <div className="flex items-center gap-3">
                            <img
                                src={logoImage || "/placeholder.svg"}
                                alt="Logo preview"
                                className="w-12 h-12 object-cover rounded border"
                            />
                            <div className="flex-1">
                                <p className="text-sm font-medium">Logo uploaded</p>
                                <p className="text-xs text-gray-500">Ready to embed in QR code</p>
                            </div>
                            <Button variant="outline" size="sm" onClick={removeImage} className="gap-1">
                                <X className="h-3 w-3" />
                                Remove
                            </Button>
                        </div>
                    </div>

                    <div className="mt-3">
                        <Label htmlFor="logo-size">Logo Size: {logoSize[0]}%</Label>
                        <Slider
                            id="logo-size"
                            min={10}
                            max={30}
                            step={2}
                            value={logoSize}
                            onValueChange={onLogoSizeChange}
                            className="mt-2"
                        />
                        <p className="text-xs text-gray-500 mt-1">Recommended: 15-25% for optimal scanning</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}
