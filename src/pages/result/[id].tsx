import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { api } from "~/utils/api";

export default function ResultPage(props: InferGetServerSidePropsType<typeof getServerSideProps>){
    const id: number = parseInt(props.id)
    const {data, isError} = api.test.getSingleAttemptbyid.useQuery({id: id, Userid: "clmk85b360000i0rcmu6w1eq6"})
    return(
        <main>
          <h1>halo dunia</h1>
        </main>
    )
}

export function getServerSideProps(
    context: GetServerSidePropsContext<{ id: string }>,
  ) {   
    const id = context.params!.id;
    return {
      props: {
        id,
      },
    };
  }