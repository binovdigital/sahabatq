import Link from "next/link";
import HeaderComponent from "~/components/header";
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import {
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import Image from "next/image";
        
export default function Home() {
  return (
    <>
      <HeaderComponent/>
      <main className="min-h-fit bg-white">
        <section id="hero">
            <Image className="w-full object-cover"
              width={500}
              height={281}
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
          <div className="px-6">
          <Card shadow={false} className="w-full max-w-[48rem] gap-x-2 border justify-between items-center rounded h-[140px] flex-row p-2 mt-2">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0">
              <Image
                width={174}
                height={116}
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className="p-0">
              <p className="mb-1 font-regular text-black">Si Kecil Lahir Sehat? Ini Alasan Wajib Skrining Hipotiroid</p>
              <div className="">
                <span className="text-[#DE5A29] text-[10px] bg-[#FFF3F3] py-0.5 px-1 rounded">Kesehatan anak</span>
              </div>
            </CardBody>
          </Card>
          <Card shadow={false} className="w-full max-w-[48rem] gap-x-2 border justify-between items-center rounded h-[140px] flex-row p-2 mt-2">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0">
              <Image
                width={174}
                height={116}
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className="p-0">
              <p className="mb-1 font-regular text-black">Si Kecil Lahir Sehat? Ini Alasan Wajib Skrining Hipotiroid</p>
              <div className="">
                <span className="text-[#DE5A29] text-[10px] bg-[#FFF3F3] py-0.5 px-1 rounded">Kesehatan anak</span>
              </div>
            </CardBody>
          </Card>
          <Card shadow={false} className="w-full max-w-[48rem] gap-x-2 border justify-between items-center rounded h-[140px] flex-row p-2 mt-2">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0">
              <Image
                width={174}
                height={116}
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className="p-0">
              <p className="mb-1 font-regular text-black">Si Kecil Lahir Sehat? Ini Alasan Wajib Skrining Hipotiroid</p>
              <div className="leading-none">
                <span className="text-[#DE5A29] text-[10px] bg-[#FFF3F3] py-0.5 px-1 rounded">Kesehatan anak</span>
              </div>
            </CardBody>
          </Card>
          </div>
        </section>
      </main>
    </>
    );
}
        
        