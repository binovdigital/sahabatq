import BasicToolbarComponent from "~/components/BasicToolbar";
import Image from "next/image";
import {
    Card,
    CardHeader,
    CardBody,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button,
  } from "@material-tailwind/react";
import { api } from "~/utils/api";
import { useEffect, useState } from "react";
import { Article } from "~/server/interface/articles";
import { BookmarkIcon, HeartIcon } from "@heroicons/react/24/outline";



const ArticlesPage = () =>{
    const [isSave, setIsSave] = useState(false);
    const [modal, setModal] = useState(false);
    const [isLove, setIsLove] = useState(false);
    const [product, setProduct] = useState<Article>();
    const [selectedDay, setSelectedDay] = useState<string>("")
    const responseDetail = api.article.getDom.useQuery({text: selectedDay})
    const data = api.article.getArticles.useQuery();
    const [products, setProducts] = useState<Article[]>([]);
    const article: Article[] = data.data
    useEffect(()=>{
        if (!data.isLoading) {
            const showing: Article[] = []
            for (const element of article) {
                if (element?.title != "[Removed]") {
                    showing.push(element)
                }
            }
            setProducts(showing)
        }
    }, [data.isLoading])


    useEffect(()=>{
        responseDetail.refetch().catch(
            console.error
        )
    }, [selectedDay])
    

    function openModal(url: string, index:number) {
        setSelectedDay(url)
        setProduct(products[index])
        setModal(true)
    }

    return(
        <>
            <BasicToolbarComponent></BasicToolbarComponent>
            <main className="min-h-fit bg-white">
                <div className="px-6 pt-2 pb-6 min-h-[calc(100vh-50px)] flex flex-col">
                    {
                        products.map((item, index) => (
                        // <Link key={index} href={{
                        //     pathname: `/articles/${index}`,
                        //     query: item,
                        // }}>                            
                        <Card onClick={()=> openModal(item.url, index)} key={index} shadow={false} className="w-full max-w-[48rem] gap-x-2 border justify-between items-center rounded h-[140px] flex-row p-2 mt-2">
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-2/5 shrink-0">
                                <Image
                                width={174}
                                height={116}
                                src={item.urlToImage || "http://localhost:3000/assets/img/header.jpg"}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody className="p-0">
                                <p className="mb-1 font-regular text-black">{item.title}</p>
                                <div className="leading-none">
                                <span className="text-[#DE5A29] text-[10px] bg-[#FFF3F3] py-0.5 px-1 rounded">{item.source.name}</span>
                                </div>
                            </CardBody>
                        </Card>
                        // </Link>
                        ))}
                </div>
                <Dialog open={modal} size={"xxl"} handler={()=>{setModal(true)}}>
                    <DialogHeader>
                        <span>
                            {product ? product.title : ""}
                        </span>
                    </DialogHeader>
                    <DialogBody divider className="h-[40rem] overflow-scroll">
                    <section className="pt-[56.25%] relative w-full">
                        <Image className="w-full h-full object-cover absolute inset-0"
                            width={500}
                            height={281}
                            src={product?.urlToImage ?? "http://localhost:3000/assets/img/header.jpg"}
                            alt="Tentang Anak Hero Image"
                        />
                    </section>
                    {
                        responseDetail.data ? (<div dangerouslySetInnerHTML={{ __html: responseDetail.data }}/>) : ""
                    }
                    </DialogBody>
                    <DialogFooter>
                    <Button variant="text" color="red" onClick={() => setModal(false)} className="mr-1">
                        <span>Selesai baca</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color={isSave?"red":"green"}
                        className="flex p-2"
                        onClick={() => setIsSave(isSave?false:true)}
                    >
                        <BookmarkIcon className="h-4 mr-1"/>
                        <span>{!isSave?'Simpan':'Batal'}</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color={isLove?"gray":"pink"}
                        className="flex p-2 ml-2"
                        onClick={() => setIsLove(isLove?false:true)}
                    >
                        <HeartIcon className="h-4 mr-1"/>
                        <span>{isLove?'Batal Suka':'Batal'}</span>
                    </Button>
                    </DialogFooter>
                </Dialog>
            </main>
        </>
    )
}

export default ArticlesPage;