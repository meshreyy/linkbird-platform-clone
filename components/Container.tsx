'use client'


export default function Container({children,style}) {
    return (
        <div
        style={{
            border:"2px solid white",
            padding:"20px"
        }}>

            {children}
        </div>
    )
}