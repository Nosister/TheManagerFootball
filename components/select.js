import defaultSports from "./data"



export default function Select({title}) {


return (
    <>
    <div>
        <select className="edge" onChange={title}>
            <option value="">All</option>
            <option value={defaultSports[0].category}>Liverpool</option>
            <option value={defaultSports[1].category}>Mancity</option>
            <option value={defaultSports[2].category}>Manunited</option>
        </select>
        
    </div>
    <style jsx>{`

    .edge {
        border-style : solid ;
        border-width : 1px;
        margin-left : 15px;
        margin-top : 15px;
        border-radius : 15px;
        padding-left : 10px;
        padding-right : 10px;
    }


    `}</style>
    </>

)

}