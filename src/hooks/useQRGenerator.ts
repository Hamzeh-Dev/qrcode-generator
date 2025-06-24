"use client"

import { QRCodeSettingsProps } from "@/lib/types/qr-generator";
import { useCallback, useRef, useState } from "react";
import { blob } from "stream/consumers";


export function useQRGenerator() {
    const [settings, setSettings] = useState<QRCodeSettingsProps>({
        text: "",
        size: [256],
        bgColor: "#fff",
        fgColor: "#000",
        errorLevel: "M",
        logoImage: "",
        logoSize: [0],
    });

    const qrRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const updateSettings = useCallback((updates: Partial<QRCodeSettingsProps>) => {
        setSettings(prev => ({...prev, ...updates}));
    }, []);

    const downloadQRCode = useCallback(() => {
        if (!settings.text.trim()) return;

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        canvas.width = settings.size[0];
        canvas.height = settings.size[0];

        const svg = qrRef.current?.querySelector("svg");
        if (!svg) return;

        const svgData = new XMLSerializer().serializeToString(svg);
        const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
        const svgUrl = URL.createObjectURL(svgBlob);

        const qrImg = new Image();
        qrImg.crossOrigin = "anonymous";
        qrImg.onload = () => {
            ctx.fillStyle = settings.bgColor;
            ctx.fillRect(0, 0, settings.size[0], settings.size[0]);
            ctx.drawImage(qrImg, 0, 0, settings.size[0], settings.size[0]);

            canvas.toBlob((blob) => {
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `qrcode-${Date.now()}.png`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                }
            }, "image/png");
        }
        qrImg.src = svgUrl
    }, [settings]);

    return {
        settings,
        updateSettings,
        downloadQRCode,
        qrRef,
        canvasRef,
    }
}