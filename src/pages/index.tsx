import Link from "next/link";
import {
  BookmarkIcon,
  ChevronRightIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Carousel,
} from "@material-tailwind/react";
import Image from "next/image";

import ReviewComponent from "~/components/Review";
import AppMenuComponent from "~/components/AppMenu";
import BottomNavComponent from "~/components/BottomNav";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [isLove, setIsLove] = useState(false);
  const [isSave, setIsSave] = useState(false);
  return (
    <>
      {/* <HeaderComponent/> */}
      <main className="min-h-fit bg-white">
        <section id="hero">
          <Image
            className="w-full object-cover"
            width={500}
            height={281}
            src="/assets/img/header.jpg"
            alt="Tentang Anak Hero Image"
          />
        </section>
        <AppMenuComponent />
        <section className="p-5">
          <Carousel className="rounded-xl" autoplay autoplayDelay={3000} loop>
            <Link href={"/test"}>
              <Image
                width={374}
                height={187}
                src="/assets/img/1.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </Link>

            <Image
              width={374}
              height={187}
              src="/assets/img/2.jpg"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <Image
              width={374}
              height={187}
              src="/assets/img/3.jpg"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </section>
        <section className="pt-4 pb-6">
          <div className="px-6 flex items-end justify-between mb-2">
            <h2 className="text-base font-bold">Artikel Terbaru</h2>
            <Link
              href={"/articles"}
              className="flex items-center font-regular text-[#DE5A29]"
            >
              <span>Lihat Semua</span>
              <ChevronRightIcon className="h-4 stroke-2" />
            </Link>
          </div>
          <div className="px-6">
            <Card
              onClick={() => {
                setModal(true);
              }}
              shadow={false}
              className="w-full max-w-[48rem] gap-x-2 border justify-between items-center rounded h-[140px] flex-row p-2 mt-2"
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0"
              >
                <Image
                  width={174}
                  height={116}
                  src="https://tentanganak.com/_next/image/?url=https%3A%2F%2Fd1yumyy1wq8q4y.cloudfront.net%2Fimages%2Farticle%2Fthumbnail%2F64f70aca-1c98f64e-70f4-4cb8-bb08-43114f5083c9.jpg&w=828&q=75"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="p-0">
                <p className="mb-1 font-regular text-black">
                  Si Kecil Lahir Sehat? Ini Alasan Wajib Skrining Hipotiroid
                </p>
                <div className="leading-none">
                  <span className="text-[#DE5A29] text-[10px] bg-[#FFF3F3] py-0.5 px-1 rounded">
                    Kesehatan anak
                  </span>
                </div>
              </CardBody>
            </Card>
            <Card
              shadow={false}
              className="w-full max-w-[48rem] gap-x-2 border justify-between items-center rounded h-[140px] flex-row p-2 mt-2"
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0"
              >
                <Image
                  width={174}
                  height={116}
                  src="https://tentanganak.com/_next/image/?url=https%3A%2F%2Fd1yumyy1wq8q4y.cloudfront.net%2Fimages%2Farticle%2Fthumbnail%2F64f5b056-276521ea-08b8-46e6-98a4-23dc77b1a030.jpg&w=828&q=75"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="p-0">
                <p className="mb-1 font-regular text-black">
                  Bolehkah Anak Makan Jeroan? Simak Penjelasannya di Sini
                </p>
                <div className="leading-none">
                  <span className="text-[#DE5A29] text-[10px] bg-[#FFF3F3] py-0.5 px-1 rounded">
                    Kesehatan anak
                  </span>
                </div>
              </CardBody>
            </Card>
            <Card
              shadow={false}
              className="w-full max-w-[48rem] gap-x-2 border justify-between items-center rounded h-[140px] flex-row p-2 mt-2"
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0"
              >
                <Image
                  width={174}
                  height={116}
                  src="https://tentanganak.com/_next/image/?url=https%3A%2F%2Fd1yumyy1wq8q4y.cloudfront.net%2Fimages%2Farticle%2Fthumbnail%2F64f33042-fd31963d-0dcd-44f8-b09a-89699c55724d.jpg&w=828&q=75"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="p-0">
                <p className="mb-1 font-regular text-black">
                  Selain Susu Sapi, Ini Makanan Tinggi Kalsium yang Baik untuk
                  Anak
                </p>
                <div className="leading-none">
                  <span className="text-[#DE5A29] text-[10px] bg-[#FFF3F3] py-0.5 px-1 rounded">
                    Kesehatan anak
                  </span>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>
        <section className="pt-4 pb-6">
          <div className="px-6 flex items-end justify-between mb-2">
            <h2 className="text-base font-bold">Fitur Tentang Anak</h2>
          </div>
          <div className="px-6 font-regular">
            <p className="m-0">
              SOLUSI TERLENGKAP untuk kehamilan dan tumbuh kembang anak langsung
              dari Ahlinya!
            </p>
            <Card
              shadow={false}
              className="w-full max-w-[48rem] gap-x-2 justify-between items-center rounded flex-row mt-4"
            >
              <CardHeader shadow={false} floated={false} className="m-0">
                <Image
                  width={174}
                  height={116}
                  src="/assets/icons/icon.png"
                  alt="card-image"
                  className="h-16 w-16 object-cover"
                />
              </CardHeader>
              <CardBody className="p-0 w-full text-[#121212]">
                <span className="font-medium">Kehamilan</span>
                <p>
                  Pantau perkembangan ukuran janin AyBun setiap minggunya.
                  Saksikan juga Webinar dan Tanya Jawab dengan Obsgyn di fitur
                  Tanya Ahli.
                </p>
              </CardBody>
            </Card>
          </div>
        </section>
        <section className="pt-4 pb-6">
          <div className="px-6 flex items-end justify-between mb-2">
            <h2 className="text-base font-bold">Ulasan</h2>
          </div>
          <ReviewComponent></ReviewComponent>
        </section>
      </main>
      <Dialog
        open={modal}
        size={"xxl"}
        handler={() => {
          setModal(true);
        }}
      >
        <DialogHeader>Contoh Judul Artikel.</DialogHeader>
        <DialogBody divider>
          <Image
            width={382}
            height={215}
            className="object-cover mb-3"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt=""
          />
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setModal(false)}
            className="mr-1"
          >
            <span>Selesai baca</span>
          </Button>
          <Button
            variant="gradient"
            color={isSave ? "red" : "green"}
            className="flex p-2"
            onClick={() => setIsSave(isSave ? false : true)}
          >
            <BookmarkIcon className="h-4 mr-1" />
            <span>{!isSave ? "Simpan" : "Batal"}</span>
          </Button>
          <Button
            variant="gradient"
            color={isLove ? "gray" : "pink"}
            className="flex p-2 ml-2"
            onClick={() => setIsLove(isLove ? false : true)}
          >
            <HeartIcon className="h-4 mr-1" />
            <span>{isLove ? "Batal Suka" : "Batal"}</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <BottomNavComponent />
    </>
  );
}
