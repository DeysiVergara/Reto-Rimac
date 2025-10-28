// src/components/ui/Card.tsx
import React from "react";
import { cn } from "../../lib/cn";
import { Button } from "./Button";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl?: string;
  title: string;
  description?: string;
  tags?: string[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  // Permite inyectar acciones custom (por ej. íconos)
  actionsSlot?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  tags,
  ctaLabel,
  onCtaClick,
  actionsSlot,
  className,
  ...props
}) => {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",
        "transition hover:shadow-md",
        className
      )}
      {...props}
    >
      {imageUrl && (
        <div className='aspect-[16/9] w-full overflow-hidden bg-slate-100'>
          <img
            src={imageUrl}
            alt=''
            className='h-full w-full object-cover transition group-hover:scale-105'
            loading='lazy'
          />
        </div>
      )}

      <div className='p-4 sm:p-5'>
        <header className='flex items-start justify-between gap-3'>
          <h3 className='text-base sm:text-lg font-semibold text-slate-900'>
            {title}
          </h3>
          {actionsSlot}
        </header>

        {description && (
          <p className='mt-2 text-sm text-slate-600 leading-6'>{description}</p>
        )}

        {tags && tags.length > 0 && (
          <ul className='mt-3 flex flex-wrap gap-2'>
            {tags.map((t) => (
              <li
                key={t}
                className='rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700'
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        {ctaLabel && (
          <div className='mt-4'>
            <Button onClick={onCtaClick} size='md'>
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </article>
  );
};
