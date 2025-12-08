import { Card, CardContent, CardTitle } from "@/components/ui/card"
import MyToolTip from "@/components/reusableUI/tooltip"
import { SiShadcnui, SiCplusplus, SiReact, SiTailwindcss, SiMui, SiFramer, SiBun, SiNpm, SiGit, SiFirebase, SiMysql, SiWireshark } from "react-icons/si"
import { LiaHtml5 } from "react-icons/lia"
import { TbBrandCss3, TbBrandJavascript, TbBrandTypescript, TbBrandCSharp, TbBrandPython, TbBrandDjango } from "react-icons/tb"
import { FaJava } from "react-icons/fa6"
import { Separator } from "@/components/ui/separator"

export default function TechStackSection() {
    return (
        <>
            <Card className="flex-1 min-w-[220px] items-center px-2 mx-2 md:mx-0">
                <CardTitle className="text-sm font-semibold">Frontend</CardTitle>
                <Separator />
                <CardContent className="flex flex-wrap gap-4 justify-center">
                    <MyToolTip content="HTML"><LiaHtml5 className="w-8 h-8 text-orange-600" /></MyToolTip>
                    <MyToolTip content="JavaScript"><TbBrandJavascript className="w-8 h-8 text-yellow-400" /></MyToolTip>
                    <MyToolTip content="TypeScript"><TbBrandTypescript className="w-8 h-8 text-blue-500" /></MyToolTip>
                    <MyToolTip content="React"><SiReact className="w-8 h-8 text-blue-400" /></MyToolTip>
                    <MyToolTip content="React Native"><SiReact className="w-8 h-8 text-blue-400" /></MyToolTip>
                </CardContent>
            </Card>

            <Card className="flex-1 min-w-[220px] items-center px-2 mx-2 md:mx-0">
                <CardTitle className="text-sm font-semibold">Backend</CardTitle>
                <Separator />
                <CardContent className="flex flex-wrap gap-4 justify-center">
                    <MyToolTip content="Django"><TbBrandDjango className="w-8 h-8 text-green-900" /></MyToolTip>
                    <MyToolTip content="Bun"><SiBun className="w-8 h-8" /></MyToolTip>
                </CardContent>
            </Card>

            <Card className="flex-1 min-w-[220px] items-center px-2 mx-2 md:mx-0">
                <CardTitle className="text-sm font-semibold">UI/UX</CardTitle>
                <Separator />
                <CardContent className="flex flex-wrap gap-4 justify-center mx-2 md:mx-0">
                    <MyToolTip content="CSS"><TbBrandCss3 className="w-8 h-8 text-blue-400" /></MyToolTip>
                    <MyToolTip content="TailwindCSS"><SiTailwindcss className="w-8 h-8 text-teal-400" /></MyToolTip>
                    <MyToolTip content="MUI"><SiMui className="w-8 h-8 text-blue-500" /></MyToolTip>
                    <MyToolTip content="Shadcn/UI"><SiShadcnui className="w-8 h-8 bg-neutral-200 dark:bg-black p-1 rounded" /></MyToolTip>
                    <MyToolTip content="React Icons"><SiReact className="w-8 h-8 text-red-400" /></MyToolTip>
                    <MyToolTip content="Framer Motion"><SiFramer className="w-8 h-8 text-pink-500" /></MyToolTip>
                </CardContent>
            </Card>

            <Card className="flex-1 min-w-[220px] items-center px-2 mx-2 md:mx-0">
                <CardTitle className="text-sm font-semibold">Databases / Services</CardTitle>
                <Separator />
                <CardContent className="flex flex-wrap gap-4 justify-center">
                    <MyToolTip content="MySQL"><SiMysql className="w-8 h-8" /></MyToolTip>
                    <MyToolTip content="Firebase"><SiFirebase className="w-8 h-8 text-orange-500" /></MyToolTip>
                </CardContent>
            </Card>

            <Card className="flex-1 min-w-[220px] items-center px-2 mx-2 md:mx-0">
                <CardTitle className="text-sm font-semibold">Tools / Programming Languages</CardTitle>
                <Separator />
                <CardContent className="flex flex-wrap gap-4 justify-center">
                    <MyToolTip content="npm"><SiNpm className="w-8 h-8" /></MyToolTip>
                    <MyToolTip content="Git"><SiGit className="w-8 h-8 text-orange-600" /></MyToolTip>
                    <MyToolTip content="Wireshark"><SiWireshark className="w-8 h-8" /></MyToolTip>
                    <MyToolTip content="Java"><FaJava className="w-8 h-8" /></MyToolTip>
                    <MyToolTip content="C++"><SiCplusplus className="w-8 h-8 text-blue-400" /></MyToolTip>
                    <MyToolTip content="C#"><TbBrandCSharp className="w-8 h-8 text-purple-400" /></MyToolTip>
                    <MyToolTip content="Python"><TbBrandPython className="w-8 h-8 text-blue-400" /></MyToolTip>
                </CardContent>
            </Card>
        </>
    )
}