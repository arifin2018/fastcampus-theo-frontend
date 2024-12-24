import { Button } from "../ui/button"
import { IoPricetag,IoCart,IoPerson } from "react-icons/io5";

const SidebarItem = (props) =>{
    const {icon,nameIcon} = props

    return (
        <Button variant="ghost" size="lg">
            {icon}
            {nameIcon}
        </Button>
    )
}

const AdminLayout = (props)=>{
    const {namePageLayout,sectionNamePageLayout,buttonPageLayout,children} = props
    return (
        <div className="flex">
            <aside className="w-72 border-r h-screen">
                <div className="h-16 flex-col flex items-center justify-center border-b">
                    <h1 className="font-semibold text-3xl">Admin Dashboard</h1>
                </div>
                <div className="flex flex-col space-y-0 py-4">
                    <SidebarItem icon={<IoPricetag className="h-6 w-6 mr-4"/>} nameIcon="Product Management"></SidebarItem>
                    <SidebarItem icon={<IoCart className="h-6 w-6 mr-4"/>} nameIcon="Orders Management"></SidebarItem>
                </div>
            </aside>

            <div className="flex-1">
                <header className="h-16 border-b w-full flex justify-end items-center px-8">
                    <Button className="rounded-full" size="icon">
                        <IoPerson className="h-6 w-6"></IoPerson>
                    </Button>
                </header>

                <main className="flex flex-col p-4">
                    <div className="flex justify-between items-center pb-4 border-b mb-8">
                        <div>
                            <h1 className="font-bold text-4xl">{namePageLayout}</h1>
                            <p className="text-muted-foreground">
                                {sectionNamePageLayout}
                            </p>
                        </div>
                        {buttonPageLayout}
                    </div>
                    {children}
                </main>
            </div>

        </div>
    )
}

export default AdminLayout