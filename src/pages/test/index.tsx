import { Card, CardBody, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react"
import Link from "next/link";
import BasicToolbarComponent from "~/components/BasicToolbar"
import { api } from "~/utils/api"

export default function ListTestPage() {
    const ListTest = api.test.getTest.useQuery();
    const ListHistory  = api.test.getTestAttemptbyUser.useQuery({id: "clmk85b360000i0rcmu6w1eq6"})
    if (ListTest.isLoading && ListHistory.isLoading) {
        return(
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500 border-opacity-50"></div>
          </div>
        );
      }
    return (
        <>
            <BasicToolbarComponent title={"Test Page"}>
            </BasicToolbarComponent>
            <main className="min-h-fit bg-white">

                <div className="px-6 pt-2 pb-6 min-h-[calc(100vh-50px)] flex flex-col">
                <Tabs id="custom-animation" value="List">
                    <TabsHeader>
                        <Tab value={"List"}>
                            {"List"}
                        </Tab>
                        <Tab value={"History"}>
                            {"History"}
                        </Tab>
                    </TabsHeader>
                    <TabsBody         animate={{
          initial: { x: 1 },
          mount: { x: 0 },
          unmount: { x: 250 },
        }}>
                        <TabPanel value={"List"} className="p-0">

                            {ListTest.data?.map((option, index) => (
                                <Link href={`/test/${option.testId}`} key={index}>                      
                                    <Card shadow={true} className="w-full max-w-[48rem] border items-center rounded h-[100px] flex-row mt-2">
                                        <CardBody className="flex justify-between w-full items-center">
                                            <p className="text-base text-black">{option.testName}</p>
                                            <div className="leading-none">
                                                <span className="text-[#DE5A29] text-[12px] bg-[#FFF3F3] py-1 px-2 rounded">{option.testCategory.testCategoryName}</span>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Link>   
                            ))}

                        </TabPanel>
                        <TabPanel value={"History"} className="p-0">
                            {ListHistory.data?.map((option, index) => (
                                    <Link href={`/result/${option.testAttemptId}`} key={index}>                      
                                        <Card shadow={true} className="w-full max-w-[48rem] gap-x-2 p-4 border items-center rounded h-[180px] flex-row mt-2">
                                            {/* <CardHeader
                                                shadow={false}
                                                floated={false}
                                                className="m-0 w-[28%] h-full shrink-0 flex items-center bg-green-300">
                                                    <Typography className="text-center w-full" variant="h6">Sep <br/> 09 <br/> 2023</Typography>
                                            </CardHeader> */}
                                            <CardBody className="p-0 gap-x-2 flex justify-between w-full items-center">
                                                <div className="flex flex-col"> 
                                                    <p className="text-base text-black font-bold">{option.test.testName}</p>
                                                    <p className="text-base text-black">{option.testResult.testResultMessage}</p>
                                                </div>
                                                <div className="leading-none">
                                                    <span className="text-[#DE5A29] text-[12px] bg-[#FFF3F3] py-1 px-2 rounded">Lihat</span>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Link>   
                                ))}
                        </TabPanel>
                    </TabsBody>
                </Tabs>
                </div>
            </main>
        </>
    )
}