import Banner from '@/components/banner';
import Clients from '@/components/clients';
import ContactUs from '@/components/contact-us';
import Services from '@/components/services';
import WorkingProcess from '@/components/working-process';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Banner />
      <Clients />
      <Services />
      <ContactUs />
      <WorkingProcess />
    </main>
  );
}
