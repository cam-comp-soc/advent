
export default async function Page({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;

  return <div>Profile for {userId}</div>;
}
