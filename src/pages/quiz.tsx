import BasicToolbarComponent from "~/components/BasicToolbar";
import { Progress } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

export default function QuizPage() {
    const babyBluesQuestions: BabyBluesQuestion[] = [
        {
          question:
            "Saya merasa sedih atau cemas tanpa alasan yang jelas, atau merasa seperti menangis tanpa alasan yang jelas.",
          answer: [
            { point: 1, answer: "Hampir setiap hari" },
            { point: 2, answer: "Beberapa kali seminggu" },
            { point: 3, answer: "Sekali seminggu atau kurang" },
            { point: 4, answer: "Tidak jelas" },
          ],
        },
        {
          question:
            "Saya merasa kelelahan atau kehabisan tenaga bahkan setelah tidur yang cukup atau istirahat yang cukup.",
          answer: [
            { point: 1, answer: "Hampir setiap hari" },
            { point: 2, answer: "Beberapa kali seminggu" },
            { point: 3, answer: "Sekali seminggu atau kurang" },
            { point: 4, answer: "Tidak pernah" },
          ],
        },
        {
          question:
            "Saya sulit tidur atau tidur terlalu banyak, bahkan jika ada kesempatan untuk tidur.",
          answer: [
            { point: 1, answer: "Hampir setiap hari" },
            { point: 2, answer: "Beberapa kali seminggu" },
            { point: 3, answer: "Sekali seminggu atau kurang" },
            { point: 4, answer: "Tidak pernah" },
          ],
        },
        {
          question:
            "Saya kehilangan minat atau kegembiraan dalam melakukan hal-hal yang biasanya saya nikmati, seperti hobi atau kegiatan sosial.",
          answer: [
            { point: 1, answer: "Hampir setiap hari" },
            { point: 2, answer: "Beberapa kali seminggu" },
            { point: 3, answer: "Sekali seminggu atau kurang" },
            { point: 4, answer: "Tidak pernah" },
          ],
        },
        {
          question:
            "Saya merasa kesulitan konsentrasi atau memutuskan sesuatu, bahkan pada hal-hal kecil.",
          answer: [
            { point: 1, answer: "Hampir setiap hari" },
            { point: 2, answer: "Beberapa kali seminggu" },
            { point: 3, answer: "Sekali seminggu atau kurang" },
            { point: 4, answer: "Tidak pernah" },
          ],
        },
        {
          question:
            "Saya merasa marah, tidak sabar, atau mudah tersinggung, bahkan oleh hal-hal kecil.",
          answer: [
            { point: 1, answer: "Hampir setiap hari" },
            { point: 2, answer: "Beberapa kali seminggu" },
            { point: 3, answer: "Sekali seminggu atau kurang" },
            { point: 4, answer: "Tidak pernah" },
          ],
        },
        {
          question:
            "Saya merasa sangat cemas, khawatir, atau takut tanpa alasan yang jelas.",
          answer: [
            { point: 1, answer: "Hampir setiap hari" },
            { point: 2, answer: "Beberapa kali seminggu" },
            { point: 3, answer: "Sekali seminggu atau kurang" },
            { point: 4, answer: "Tidak pernah" },
          ],
        },
        {
          question:
            "Saya merasa bersalah atau menyalahkan diri sendiri tanpa alasan yang jelas.",
          answer: [
            { point: 1, answer: "Hampir setiap hari" },
            { point: 2, answer: "Beberapa kali seminggu" },
          ],
        },
        {
          question:
            "Saya merasa tidak ada harapan untuk masa depan saya atau perasaan bahwa segala sesuatu akan selalu buruk.",
          answer: [
            { point: 1, answer: "Hampir setiap hari" },
            { point: 2, answer: "Beberapa kali seminggu" },
            { point: 3, answer: "Sekali seminggu atau kurang" },
            { point: 4, answer: "Tidak pernah" },
          ],
        },
        {
          question:
            "Saya berpikir untuk menyakiti diri sendiri atau merasa bahwa orang lain akan lebih baik jika saya tidak ada.",
          answer: [
            { point: 1, answer: "Hampir setiap hari" },
            { point: 4, answer: "Tidak pernah" },
          ],
        },
      ];
      
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [userAnswers, setUserAnswers] = useState<answer[]>([]);

    const handleAnswerSelect = (selectedAnswer: answer) => {
        setUserAnswers([...userAnswers, selectedAnswer]);
        if (currentQuestionIndex < babyBluesQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            console.log("sudah habis pertanyaannya")
        }
      };
    const renderList = () => {
        const listItems = [];
        for (let i = 0; i <= currentQuestionIndex; i++) {
          listItems.push(
            <div key={i}>
                <div className="flex items-start space-x-2 mt-2">
                    <Image width={24} height={24} src="https://lh3.googleusercontent.com/a/ACg8ocKP0H5Pumx6VWUKMPqdaQjeo719vJHHRhlhyYjQHaz1=s96-c" alt="Bot" className="w-8 h-8 rounded-full" />
                    <div className="bg-purple-100 chat-baloon">
                        <p className="text-sm break-words">{babyBluesQuestions[i]?.question}</p>
                    </div>
                </div>
                {userAnswers[i]?.answer && (
                    <div className="flex items-end justify-end space-x-2 mt-2">
                        <div className="bg-blue-500 chat-baloon">
                        <p className="text-sm text-white break-words">{userAnswers[i]?.answer}</p>
                        </div>
                    </div>
                )}
            </div>
          );
        }
        return listItems;
      };
        
    return (
        <>
            <BasicToolbarComponent title={"Quiz"}>
                <div className="flex justify-center items-center h-[5vh] bg-white">
                    <Progress className="w-[70%]" color="purple"  value={50} />
                </div>
            </BasicToolbarComponent>
            <main className="min-h-fit bg-white">
                <div className="p-4 overflow-y-auto min-h-[80vh] flex flex-col-reverse">
                    <div className="p-4">
                        {babyBluesQuestions[currentQuestionIndex]?.answer.map((option, index) => (
                            <div className="bg-purple-500 p-2 m-1 rounded-lg float-left" key={index} onClick={() => handleAnswerSelect(option)} >
                                <p className="text-sm text-gray-300">{option.answer}</p>
                            </div>
                        ))}
                        <div className="clear-both"></div>
                    </div>
                    {renderList().slice().reverse()}
                </div>

            </main>
        </>
    )
}


export interface BabyBluesQuestion {
    question: string;
    answer: answer[]
}

export interface answer{
    point: number;
    answer: string;
}