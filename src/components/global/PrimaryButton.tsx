type Props = {
  children: React.ReactNode;
  type: "submit" | "button" | "reset";
  className?: string;
};

export default function PrimaryButton({ children, type, className }: Props) {
  return (
    <button
      type={type}
      className={`${className} font-medium border border-stone-900 bg-stone-900 py-2 px-6 text-white rounded-full`}
    >
      {children}
    </button>
  );
}
