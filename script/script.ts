import { PrismaClient } from "@prisma/client";
import { db } from "../lib/db";

const prisma = new PrismaClient();

async function main() {
  // const categories = await db.function_category.createMany({
  //   data: [
  //     {
  //       name: "sns",
  //       icon: "❤️",
  //     },
  //     {
  //       name: "문자",
  //       icon: "💬",
  //     },
  //     {
  //       name: "전화",
  //       icon: "📞",
  //     },
  //   ],
  // });

  // const apps = await db.app.createMany({
  //   data: [
  //     {
  //       name: "기본",
  //     },
  //     { name: "카카오톡" },
  //   ],
  // });

  // const functions = await db.function.createMany({
  //   data: [
  //     {
  //       title: "전화받기(수신)",
  //       icon: "📞",
  //       description: "전화를 받을 수 있다.",
  //     },
  //     {
  //       title: "전화걸기(발신)",
  //       icon: "📞",
  //       description: "전화를 걸 수 있다.",
  //     },
  //     {
  //       title: "영상통화 발신",
  //       icon: "🤳",
  //       description: "영상통화를 걸 수 있다.",
  //     },
  //     {
  //       title: "문자 발신",
  //       icon: "💬",
  //       description: "특정 사람에게 문자를 보낸다.",
  //     },
  //     {
  //       title: "그룹 채팅하기",
  //       icon: "🙋",
  //       description:
  //         "여러명(2명 이상)과 문자로 대화를 주고받을 수 있다. 이미지, 동영상, 파일, 음성 파일 등의 파일을 여러명에게 보낼 수 있다.",
  //     },
  //   ],
  // });

  const methods = await db.method.createMany({
    data: [
      {
        order: 1,
      },
    ],
  });

  const guides = await db.guide.createMany({
    data: [
      {
        order: 1,
        description: "전화가 걸려오면 [통화 버튼]을 스와이프한다.",
      },
      {
        order: 2,
        description: "전화 연결 화면이 나오면 귀에 스피커를 가져다댄다.",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
