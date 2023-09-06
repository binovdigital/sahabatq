import Link from "next/link";
import HeaderComponent from "~/components/header";
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
        
export default function Home() {
  return (
    <>
      <HeaderComponent/>
      <main className="min-h-fit bg-white">
        <section id="hero">
            <img className="w-full object-cover"
              src="http://localhost:3000/assets/img/header.jpg"
              alt="Tentang Anak Hero Image"
          />
        </section>
        <section className="pt-4 pb-6">
          <div className="px-6 flex items-end justify-between mb-2">
            <h2 className="text-base font-bold">Artikel Terbaru</h2>
            <Link href={"/"} className="flex items-center font-regular text-[#DE5A29]">
              <span>Lihat Semua</span>
              <ChevronRightIcon className="h-4 stroke-2"/>
            </Link>
          </div>
          <div>
          <Card className="w-full max-w-[48rem] h-[140px] flex-row-reverse">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-l-none">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          </Card>
          </div>
        </section>
      </main>
    </>
    );
}
        
        