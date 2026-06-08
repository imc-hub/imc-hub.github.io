"use client";

import * as React from "react";
import { X, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastVariant = "success" | "error";

interface Toast {
  id: number;
  message: string;
  variant: ToastVariant;
}

let toastId = 0;
let setToastsFn: React.Dispatch<React.SetStateAction<Toast[]>> | null = null;

export function showToast(message: string, variant: ToastVariant = "success") {
  if (!setToastsFn) return;
  const id = ++toastId;
  setToastsFn((prev) => [...prev, { id, message, variant }]);
  setTimeout(() => {
    setToastsFn?.((prev) => prev.filter((t) => t.id !== id));
  }, 4000);
}

function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: () => void }) {
  const Icon = toast.variant === "success" ? CheckCircle2 : AlertCircle;

  return (
    <div
      className={cn(
        "pointer-events-auto flex w-full max-w-sm items-center gap-3 rounded-xl border px-4 py-3 shadow-lg animate-in slide-in-from-right",
        toast.variant === "success"
          ? "border-emerald-500/20 bg-emerald-50 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-950 dark:text-emerald-100"
          : "border-red-500/20 bg-red-50 text-red-900 dark:border-red-500/30 dark:bg-red-950 dark:text-red-100"
      )}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <p className="flex-1 text-sm font-medium">{toast.message}</p>
      <button
        onClick={onDismiss}
        className="shrink-0 rounded-md p-1 opacity-60 transition-opacity hover:opacity-100"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export function ToastContainer() {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  React.useEffect(() => {
    setToastsFn = setToasts;
    return () => {
      setToastsFn = null;
    };
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="pointer-events-none fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onDismiss={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
        />
      ))}
    </div>
  );
}
