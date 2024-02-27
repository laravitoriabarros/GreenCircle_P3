import { Outlet } from "react-router-dom";

export function Default(){
    return(
        <div className="layout">
            {/* <AsideLeft/> */}
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}