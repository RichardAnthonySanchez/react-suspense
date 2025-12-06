export default function Banner({
  bannerContent,
}: {
  bannerContent: React.ReactNode;
}) {
  return <div className="flex justify-center text-center">{bannerContent}</div>;
}
