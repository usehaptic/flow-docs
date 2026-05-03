import { permanentRedirect } from 'next/navigation';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const path = params.slug?.join('/') ?? '';

  permanentRedirect(path.length > 0 ? `/${path}` : '/');
}
