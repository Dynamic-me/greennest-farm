import React from 'react';

export default function Placeholder({
  label,
  role = 'img',
  ariaLabel,
  className = '',
  src,
  alt,
}) {
  const classes = `ph ${src ? 'ph-image' : ''} ${className}`.trim();

  if (src) {
    return (
      <div className={classes}>
        <img src={src} alt={alt || ariaLabel || label || ''} />
      </div>
    );
  }

  return (
    <div className={classes} role={role} aria-label={ariaLabel || label}>
      {label}
    </div>
  );
}
