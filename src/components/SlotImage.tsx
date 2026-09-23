import { useState } from "react";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
};

/**
 * Muestra una imagen si existe. Si el archivo todavía no se subió (404),
 * no renderiza nada y queda visible el fondo abstracto de respaldo.
 */
export function SlotImage({ src, alt, className, loading = "lazy" }: Props) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
