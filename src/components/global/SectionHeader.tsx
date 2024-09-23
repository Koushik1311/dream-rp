type Props = {
  children: React.ReactNode;
};

export default function SectionHeader({ children }: Props) {
  return <h2 className="text-3xl font-semibold">{children}</h2>;
}
