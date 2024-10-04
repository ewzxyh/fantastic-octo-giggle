import dynamic from 'next/dynamic';
import PageWrapper from "@/components/Container/PageWrapper";
const Form = dynamic(() => import('@/components/LandingPage/Form'), { ssr: false });
import Banner from "@/components/LandingPage/Banner";
import List from "@/components/LandingPage/List";

export default function Home() {
  return (
      <List />
  );
}
