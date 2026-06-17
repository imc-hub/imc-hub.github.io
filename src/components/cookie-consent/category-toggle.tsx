"use client";

import { useId } from "react";

interface CategoryToggleProps {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

export function CategoryToggle({
  label,
  description,
  checked,
  disabled = false,
  onChange,
}: CategoryToggleProps) {
  const id = useId();
  const labelId = `${id}-label`;
  const descId = `${id}-desc`;

  return (
    <div className="flex items-start justify-between gap-4 py-4">
      <div className="min-w-0 flex-1">
        <p id={labelId} className="text-sm font-medium text-foreground">
          {label}
          {disabled && (
            <span className="ml-2 inline-flex items-center rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Always Active
            </span>
          )}
        </p>
        <p
          id={descId}
          className="mt-1 text-xs leading-relaxed text-muted-foreground"
        >
          {description}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={labelId}
        aria-describedby={descId}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-imc-teal/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950 ${
          checked ? "bg-imc-teal" : "bg-dark-500"
        } ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
