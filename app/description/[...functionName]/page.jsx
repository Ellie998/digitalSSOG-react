// app/description/[functionName]/page.jsx
import FunctionDescriptionProvider from "../../../components/FunctionDescription/FunctionDescriptionProvider";
import FunctionDescriptionPage from "../../../components/layout/FunctionDescriptionPage";
import MyLayout from "../../../components/layout/MyLayout";

// or Dynamic metadata
export async function generateMetadata({ params }) {
  const functionName = decodeURI(params.functionName);
  const realFunctionName = functionName.slice(2);
  return {
    charset: "utf-8",
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
    title: `${realFunctionName} 기능 사용법 - 디지털쏙`,
    description: `${realFunctionName} 기능을 사용하는 여러가지 방법을 공유합니다.`,
    url: `https://ssog.pages.dev/description/${realFunctionName}`,
    verification: {
      naver: "55145f147d68935311d0493b0428d0a9843e5eb9",
    },
    robots: {
      index: true,
    },
    keywords: ["digital", "app", "function", "description", "tech"],
    icons: {
      icon: [
        { url: "/assets/favicon/favicon.ico" },
        {
          url: "/assets/favicon/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/assets/favicon/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: "/assets/favicon/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
      manifest: "/assets/favicon/site.webmanifest",
    },
    openGraph: {
      title: `${realFunctionName} 기능 사용법 - 디지털쏙`,
      description: `${realFunctionName} 기능을 사용하는 여러가지 방법을 공유합니다.`,
      url: `https://ssog.pages.dev/description/${realFunctionName}`,
      type: "website",
      image: "/assets/metaIMG.png",
    },
    twitter: {
      title: `${realFunctionName} 기능 사용법 - 디지털쏙`,
      description: `${realFunctionName} 기능을 사용하는 여러가지 방법을 공유합니다.`,
      url: `https://ssog.pages.dev/description/${realFunctionName}`,
      type: "website",
      image: "/assets/metaIMG.png",
    },
  };
}
// export const metadata = {};

export default function Page() {
  return (
    <MyLayout>
      <FunctionDescriptionProvider></FunctionDescriptionProvider>
      {/* <FunctionDescriptionPage></FunctionDescriptionPage> */}
    </MyLayout>
  );
}