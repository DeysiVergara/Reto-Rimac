// src/components/ui/Button.tsx
import React from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  fullWidth?: boolean;
}

// Diseño: colores/espaciados mapeados a Tailwind; focus-ring visible.
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center rounded-xl font-medium transition-colors " +
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
      "disabled:opacity-60 disabled:cursor-not-allowed";

    const variants: Record<Variant, string> = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600",
      secondary:
        "bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-400",
      ghost:
        "bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400",
      danger:
        "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
    };

    const sizes: Record<Size, string> = {
      sm: "text-sm h-9 px-3 gap-2",
      md: "text-sm h-10 px-4 gap-2",
      lg: "text-base h-12 px-5 gap-3",
    };

    return (
      <button
        ref={ref}
        className={cn(
          base,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        aria-busy={isLoading || undefined}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className='animate-spin h-4 w-4'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
              fill='none'
            />
            <path
              className='opacity-75'
              d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
              fill='currentColor'
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
